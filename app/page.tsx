'use client'
import TickerTape from "@/components/TicketTape";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const tickerMessages = [
  "Welcome to The Realms of Asgard Website – Your destination for diverse server hosting!",
  "Interested in RP? TROA RP is in its testing phase! Join our Discord and request whitelist access to get started.",
  "We run 10 in-house servers powered by top-tier hardware.",
  "Empyrion Reforged Eden 2 is launching – get ready for adventure!",
  "TROA currently hosts 10 active servers. Check out the games we play and join the fun on Discord!",
  "TROA Forge is thriving! Don't forget to vote and download our modpack at TechinPack.",
  "Supported Games: Dayz, RUST, Arma 3, ICARUS, Empyrion, Stationeers, Astroneers, Star Citizen, Elite Dangerous, No Man's Sky, Astro Colony, Minecraft.",
];

export default function Home() {
  const [timeRemaining, setTimeRemaining] = useState("");

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 33); // Set target date to 33 days from now

    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference <= 0) {
        clearInterval(interval);
        setTimeRemaining("Time's up!");
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / (1000 * 60)) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeRemaining(
        `${days} days, ${hours} hours, ${minutes} minutes, and ${seconds} seconds`
      );
    }, 1000);

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  return (
    <div className="flex flex-col text-white">
      {/* Header */}
      <TickerTape messages={tickerMessages} />

      {/* Main Content */}
      <main className="flex flex-1 flex-col items-center justify-center px-4 text-center py-32">
        <div className="mb-6">
          <Image
            src="/logo.png"
            alt="The Realms of Asgard Logo"
            width={400}
            height={400}
            className="mx-auto"
          />
        </div>

        <h1 className="text-3xl font-bold">The Realms of Asgard - NPO</h1>
        <p className="mt-4 text-lg">
          Welcome to the TROA website, we are currently working on our new site!
        </p>

        <p className="mt-6 text-xl text-yellow-400 font-sans">{timeRemaining}</p>

        <div className="mt-8 flex space-x-4">
          <Link
            href="https://discord.therealmsofasgard.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 bg-yellow-500 text-black font-bold rounded hover:bg-yellow-600"
          >
            Join our Discord
          </Link>
          <Link
            href="/forums"
            className="px-6 py-2 bg-yellow-500 text-black font-bold rounded hover:bg-yellow-600"
          >
            Visit our Forums
          </Link>
        </div>
      </main>
    </div>
  );
}
