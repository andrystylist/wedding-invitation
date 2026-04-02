import { AnimatePresence, motion } from "motion/react";
import { useEffect, useMemo, useState } from "react";
import images from "@/assets/images";

const CELEBRATION_DATE = import.meta.env.VITE_WEDDING_ISO_DATE as string;

function getTargetDate(): Date {
  // Normalise to a full datetime string — date-only values get midnight COT
  const hasTime = CELEBRATION_DATE.includes("T");
  const datetime = hasTime ? CELEBRATION_DATE : `${CELEBRATION_DATE}T00:00:00`;
  // Only append COT offset if no timezone is already present
  const withOffset =
    datetime.includes("+") || datetime.includes("Z") ? datetime : `${datetime}-05:00`;
  return new Date(withOffset);
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isOver: boolean;
}

function calcTimeLeft(target: Date): TimeLeft {
  const diff = target.getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, isOver: true };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    isOver: false,
  };
}

function useCountdown(target: Date): TimeLeft {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() => calcTimeLeft(target));
  useEffect(() => {
    const id = setInterval(() => setTimeLeft(calcTimeLeft(target)), 1000);
    return () => clearInterval(id);
  }, [target]);
  return timeLeft;
}

// Deterministic confetti pieces so they don't re-randomise on every render
const CONFETTI_COLORS = ["#fff", "#f9e4b7", "#d4e8d0", "#f2b5c4", "#b5d0e8", "#f2d4b5", "#d0b5e8"];
const CONFETTI_PIECES = Array.from({ length: 22 }, (_, i) => ({
  id: i,
  color: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
  left: `${(i * 4.7) % 100}%`,
  delay: `${(i * 0.08) % 1.6}s`,
  size: i % 3 === 0 ? "10px" : i % 3 === 1 ? "7px" : "5px",
  borderRadius: i % 2 === 0 ? "50%" : "2px",
}));

const target = getTargetDate();

export default function SeeYou() {
  const { days, hours, minutes, seconds, isOver } = useCountdown(target);

  // Trigger a new confetti burst every 4 s once it's the wedding day
  const [confettiBurst, setConfettiBurst] = useState(0);
  useEffect(() => {
    if (!isOver) return;
    const id = setInterval(() => setConfettiBurst((n) => n + 1), 4000);
    return () => clearInterval(id);
  }, [isOver]);

  // Key changes on each burst so the animation restarts
  const confettiKey = useMemo(() => confettiBurst, [confettiBurst]);

  return (
    <>
      <div className="bg-[#b7c8bc] inverse relative z-[19] -mt-0.5 py-1 pt-4 pb-6">
        <motion.h2
          className="text-white title-font text-alt text-7xl mb-4 font-normal leading-[0.8]"
          initial={{ opacity: 0, translateY: 30 }}
          whileInView={{ opacity: 1, translateY: 0, transition: { delay: 0.3, duration: 1.5 } }}
          viewport={{ once: true }}
        >
          {isOver ? "¡Es Hoy!" : "Nos vemos en"}
        </motion.h2>

        <motion.img
          key={isOver ? "today" : "timer"}
          src={images.timer}
          alt={isOver ? "celebration" : "clock"}
          width="80"
          className={`icon mx-auto my-2 w-20 ${isOver ? "animate-celebration-float" : "animate-lightrotation"}`}
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        />

        <AnimatePresence mode="wait">
          {isOver ? (
            /* ── Celebration panel ── */
            <motion.div
              key="celebration"
              className="relative px-4 pb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
            >
              {/* Confetti burst */}
              <div
                key={confettiKey}
                className="confetti-container absolute inset-x-0 top-0 h-32"
                aria-hidden
              >
                {CONFETTI_PIECES.map((p) => (
                  <span
                    key={p.id}
                    className="confetti-piece"
                    style={{
                      left: p.left,
                      backgroundColor: p.color,
                      width: p.size,
                      height: p.size,
                      borderRadius: p.borderRadius,
                      animationDelay: p.delay,
                    }}
                  />
                ))}
              </div>

              <p className="text-white text text-lg font-bold tracking-wider animate-celebration-float pt-2">
                ¡Hoy es el gran día!
              </p>
            </motion.div>
          ) : (
            /* ── Countdown panel ── */
            <motion.div
              key="countdown"
              className="text px-4 timer-container"
              initial={{ opacity: 0, translateY: 30 }}
              animate={{ opacity: 1, translateY: 0 }}
              exit={{ opacity: 0, translateY: -20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text relative grid grid-cols-1 place-items-center justify-center gap-4 px-8 pb-8">
                <div className="flex justify-center py-4">
                  <div className="flex flex-col border-r border-white/40 px-4">
                    <span className="text-3xl font-bold tabular-nums">{days}</span>
                    <span className="text-sm">Días</span>
                  </div>
                  <div className="flex flex-col border-r border-white/40 px-4">
                    <span className="text-3xl font-bold tabular-nums">
                      {String(hours).padStart(2, "0")}
                    </span>
                    <span className="text-sm">Horas</span>
                  </div>
                  <div className="flex flex-col border-r border-white/40 px-4">
                    <span className="text-3xl font-bold tabular-nums">
                      {String(minutes).padStart(2, "0")}
                    </span>
                    <span className="text-sm">Mins</span>
                  </div>
                  <div className="flex flex-col px-4">
                    <span className="text-3xl font-bold tabular-nums">
                      {String(seconds).padStart(2, "0")}
                    </span>
                    <span className="text-sm">Segs</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
