import fs from 'fs';
import path from 'path';
import https from 'https';
import { URL } from 'url';
import crypto from 'crypto';

const TARGET_URL = 'https://specially.love/demo-classic-pastel';
const ASSETS_DIR = path.join(process.cwd(), 'src', 'assets');
const DOWNLOADS_DIR = path.join(process.cwd(), 'src', 'assets', 'downloads');

if (!fs.existsSync(ASSETS_DIR)) fs.mkdirSync(ASSETS_DIR, { recursive: true });
if (!fs.existsSync(DOWNLOADS_DIR)) fs.mkdirSync(DOWNLOADS_DIR, { recursive: true });

async function fetchPage(url: string): Promise<string> {
    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            let data = '';
            res.on('data', (chunk) => data += chunk);
            res.on('end', () => resolve(data));
        }).on('error', reject);
    });
}

async function downloadFile(url: string, dest: string): Promise<void> {
    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            if (res.statusCode !== 200) {
                reject(new Error(`Failed to download ${url}: ${res.statusCode}`));
                return;
            }
            const file = fs.createWriteStream(dest);
            res.pipe(file);
            file.on('finish', () => {
                file.close();
                resolve();
            });
        }).on('error', (err) => {
            fs.unlink(dest, () => reject(err));
        });
    });
}

function extractUrls(html: string, baseUrl: string): string[] {
    const urlRegex = /(?:href|src|data-src|url\()=['"]?([^'"\)\s>]+)['"]?/g;
    const urls = new Set<string>();
    let match;
    while ((match = urlRegex.exec(html)) !== null) {
        let url = match[1];
        if (url.startsWith('data:')) continue; // Skip inline base64
        if (url.startsWith('//')) url = 'https:' + url;
        else if (url.startsWith('/')) url = baseUrl + url;
        else if (!url.startsWith('http')) url = baseUrl + '/' + url;
        urls.add(url);
    }
    return Array.from(urls);
}

async function main() {
    console.log(`Fetching HTML from ${TARGET_URL}...`);
    try {
        const html = await fetchPage(TARGET_URL);
        const parsedUrl = new URL(TARGET_URL);
        const baseUrl = `${parsedUrl.protocol}//${parsedUrl.host}`;

        const rawUrls = extractUrls(html, baseUrl);
        // Filter for media assets
        const mediaExtensions = ['.png', '.jpg', '.jpeg', '.svg', '.gif', '.mp3', '.mp4', '.webp', '.woff2'];
        const mediaUrls = rawUrls.filter(u => mediaExtensions.some(ext => u.toLowerCase().includes(ext)));

        console.log(`Found ${mediaUrls.length} media assets.`);

        for (let i = 0; i < mediaUrls.length; i++) {
            let u = mediaUrls[i];
            try {
                const parsed = new URL(u);
                let filename = path.basename(parsed.pathname);
                if (!filename || filename.includes('=')) {
                    // fallback if no extension
                    const extMatch = u.match(/\.([a-z0-9]+)(?:[\?#]|$)/i);
                    const ext = extMatch ? extMatch[0] : '.bin';
                    filename = crypto.createHash('md5').update(u).digest('hex') + ext;
                }

                const destPath = path.join(DOWNLOADS_DIR, filename);
                if (!fs.existsSync(destPath)) {
                    console.log(`[${i + 1}/${mediaUrls.length}] Downloading: ${filename}`);
                    await downloadFile(u, destPath);
                } else {
                    console.log(`[${i + 1}/${mediaUrls.length}] Skipping (exists): ${filename}`);
                }
            } catch (err: any) {
                console.error(`Error downloading ${u}: ${err.message}`);
            }
        }
        console.log('Download complete.');
    } catch (err: any) {
        console.error('Error fetching page:', err);
    }
}

main();
