import Image from "next/image";

export default function PurposePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white px-6">
      {/* Logo */}
      <div className="my-8">
        <Image
          src="/logo.png" // Ensure your logo is stored in the public/ directory
          alt="TROA Logo"
          width={200}
          height={200}
          className="mx-auto"
        />
      </div>

      {/* Title */}
      <h1 className="text-3xl font-bold text-center mb-6">Our Purpose</h1>

      {/* Content */}
      <div className="max-w-4xl text-center text-lg space-y-4">
        <p>
          Realms of Asgard is more than just an online gaming community; it's a
          beacon of inclusivity and camaraderie in the gaming world. Our purpose
          is to offer a haven where gamers of all backgrounds can gather,
          connect, and immerse themselves in the thrill of gaming.
        </p>
        <p>
          We're committed to fostering an atmosphere where mutual respect and
          friendship flourish, regardless of skill level or experience. Through
          our shared passion for gaming, we embark on exciting journeys,
          establish servers, and create safe play, fostering a global network
          of gamers united by the love of play.
        </p>
        <p>
          Join us in the Realms of Asgard, where every gamer discovers not just
          a community, but a true home.
        </p>
      </div>
    </div>
  );
}
