import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white px-6">
      {/* Logo */}
      <div className="my-8">
        <Image
          src="/logo.png" // Ensure your logo is in the /public directory
          alt="TROA Logo"
          width={150}
          height={150}
          className="mx-auto"
        />
      </div>

      {/* Title */}
      <h1 className="text-3xl font-bold text-center">Welcome to TROA NPO!</h1>

      {/* Content Section */}
      <div className="max-w-5xl mt-8 space-y-6 text-justify text-lg">
        <p>
          In the late 90s, Icey began his journey across the gaming universe, shaping what would become a monumental legacy. In 1999, he founded Tactical Gaming, a clan that rose to be one of the largest and most renowned gaming communities in the world. Tactical Gaming thrived on strategy, teamwork, and a passion for competitive play. After years of growth and success, Icey decided to hand over the reins, selling the name and rights to TG Biggy. But his journey was far from over.
        </p>
        <p>
          By 2017, Icey set his sights on a new horizon – Space Engineers. Here, he founded The Realms of Asgard (TROA), building a new community centered around exploration, creativity, and camaraderie. What began as a single Space Engineers server rapidly expanded into the dynamic and thriving community known as TROA, encompassing a diverse array of games and players from all over the globe.
        </p>
        <p>
          TROA has always been about creating safe spaces for adventurers, builders, and roleplayers alike. At the core of our community are the Odin Stones, our set of guiding principles that emphasize respect, integrity, and inclusion. These “stones” serve as the foundation of our community culture, ensuring that every member feels welcome, safe, and valued. In TROA, we are more than just gamers; we are a family that supports each other through every journey, whether in space or beyond.
        </p>
        <p>
          Our community extends across multiple galaxies, and we offer a variety of space-themed games to suit every explorer’s taste. Our servers host epic adventures in Empyrion, Stationeers, Astroneers, Star Citizen, Elite Dangerous, No Man’s Sky, and Astro Colony. Yet, TROA’s universe is not limited to the stars. We also create engaging experiences in non-space games, like FiveM roleplaying servers and expansive Minecraft worlds, ensuring there’s something for every gamer to enjoy.
        </p>
        <p>
          What makes TROA truly unique is our dedication to independence and security. Unlike many communities, we host everything on our own servers, giving us full control over our infrastructure. This approach allows us to provide our members with a seamless and secure gaming environment. Our systems are a well-oiled machine, with automated backups and data management that safeguard our community’s experiences. With a strong fleet of servers already in operation, we are continually prepared to expand to accommodate our ever-growing player base.
        </p>
        <p>
          Safety and integrity are at the heart of TROA’s values. Our automated systems not only optimize gameplay but also ensure data protection, creating an environment where players can feel at ease. Our community leaders are vigilant, constantly upholding the Odin Stones to maintain a welcoming and respectful atmosphere. TROA is more than just a gaming community; it’s a sanctuary where players can relax, connect, and find their place among the stars.
        </p>
        <p>
          As we move forward, we remain committed to fostering a vibrant, inclusive, and safe space for all. Our diverse international team is passionate about realizing TROA’s vision for the future, creating a place where every member can chart their own course in the cosmos. Join us, and become a part of a journey that’s not just about games but about building lasting friendships and memories.
        </p>
        <p className="text-center font-bold">
          Welcome to TROA – where the adventure never ends, the Odin Stones guide us, and safety is paramount. The cosmos awaits, and we are ready to explore it together!
        </p>
      </div>
    </div>
  );
}
