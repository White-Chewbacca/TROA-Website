"use client";

import { useEffect, useRef } from "react";

type TickerTapeProps = {
  messages: string[];
};

const TickerTape: React.FC<TickerTapeProps> = ({ messages }) => {
  const tickerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ticker = tickerRef.current;
    if (ticker) {
      const content = ticker.innerHTML;
      ticker.innerHTML += content; // Duplicate content for seamless scrolling
    }
  }, []);

  return (
    <div className="relative w-full overflow-hidden bg-yellow-500 text-black -z-10">
      <div
        ref={tickerRef}
        className="h-fit py-2 text-lg inline-block whitespace-nowrap animate-scroll px-4"
        style={{
          animation: `scroll 50s linear infinite`,
        }}
      >
        {messages.join(" • ")}
      </div>
      <style jsx>{`
        @keyframes scroll {
          from {
            transform: translateX(25%); /* Start closer to the screen */
          }
          to {
            transform: translateX(-100%); /* Scroll completely off-screen */
          }
        }
      `}</style>
    </div>
  );
};

export default TickerTape;
