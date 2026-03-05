import Header from "@/components/content-sections/Header";
import MainPhoto from "@/components/content-sections/MainPhoto";
import { useGlobalSettings } from "@/hooks/useGlobalSettings";

export default function Invitation() {
  const { envelopeOpen } = useGlobalSettings();

  return (
    <article
      className={`invitation text-[#252525] text quattrocento-text text-base bg-white dark:bg-white relative w-full items-center justify-center overflow-hidden text-center min-h-screen h-[300vh] ${envelopeOpen ? "block" : "hidden"}`}
    >
      <Header />
      <MainPhoto />
    </article>
  );
}
