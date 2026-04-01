"use client";

import { useState, useEffect } from "react";

export function CountdownTimer() {
  const targetDate = new Date("2026-04-11T00:00:00-03:00").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (!isMounted) return null;

  return (
    <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 mt-4">
      <TimeBox value={timeLeft.days} label="Dias" />
      <TimeBox value={timeLeft.hours} label="Horas" />
      <TimeBox value={timeLeft.minutes} label="Minutos" />
      <TimeBox value={timeLeft.seconds} label="Segundos" />
    </div>
  );
}

function TimeBox({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center justify-center bg-white border border-gray-200 shadow-sm rounded-lg px-6 py-4 min-w-[100px] sm:min-w-[140px]">
      <div className="text-4xl sm:text-6xl font-black text-gray-800 tracking-tight tabular-nums">
        {value.toString().padStart(2, "0")}
      </div>
      <div className="text-sm sm:text-base font-semibold mt-1 text-gray-500 capitalize">
        {label}
      </div>
    </div>
  );
}
