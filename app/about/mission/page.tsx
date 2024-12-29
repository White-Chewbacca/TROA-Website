import Image from "next/image";

export default function MissionPage() {
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
      <h1 className="text-3xl font-bold text-center mb-6">Our Mission</h1>

      {/* Content */}
      <div className="max-w-4xl text-center text-lg space-y-4">
        <p>
          Welcome to Realms of Asgard, where gamers unite in a welcoming and
          inclusive online community. Our mission is to provide a safe and
          vibrant space where gamers from all backgrounds can come together to
          enjoy gaming, forge friendships, and create unforgettable gaming
          experiences.
        </p>
        <p>
          We strive to cultivate an environment centered on camaraderie, fun,
          and mutual respect. Whether you're a seasoned player or new to the
          gaming world, everyone is invited to join our diverse community.
          Together, we embark on epic adventures, host servers, and form clans
          across various games, fostering a global community that celebrates the
          joy of gaming.
        </p>
        <p>
          Join us in the Realms of Asgard, where every gamer finds a home.
        </p>
      </div>
    </div>
  );
}
