"use client";
import { CardStack } from "@/components/ui/card-stack";
export default function CardStackDemo() {
  return (
    <div className="flex flex-col items-center justify-center w-full px-6">
      {/* Top Section */}
      <div className="text-center mb-8 mt-32">
        <h1 className="text-4xl font-bold mb-4">The Odin Stones of TROA: Guiding Values for a Thriving Community</h1>
        <p className="text-lg max-w-3xl mx-auto">
          The Realms of Asgard (TROA) Odin Stones embody the core values that shape the foundation of our community, fostering harmony, inclusivity, and collaboration. Each Odin Stone represents a principle that guides TROA members in building a welcoming and dynamic environment.
        </p>
      </div>

      {/* Card Stack Section */}
      <div className="h-[40rem] flex items-center justify-center w-full">
        <CardStack items={CARDS} />
      </div>

      {/* Bottom Section */}
      <div className="text-center mt-8 mb-4">
        <h2 className="text-3xl font-bold mb-4">Together: The Pillars of TROA</h2>
        <p className="text-lg max-w-3xl mx-auto">
          The Odin Stones—Communication, Honesty, Trust, and Respect—are the guiding principles that unite the TROA community. These values ensure a thriving space where openness, integrity, collaboration, and inclusivity flourish.
        </p>
        <p className="text-lg max-w-3xl mx-auto mt-4">
          TROA is more than a gaming community; it’s a family bound by these shared values, creating a welcoming and engaging environment for gamers across the globe.
        </p>
      </div>
    </div>
  );
}

const CARDS = [
  {
    id: 0,
    name: "Rune of Communication",
    content: (
      <p>
        The Rune of Communication emphasizes the crucial role of open and
        effective communication. It fosters an environment where dialogue is
        encouraged, bridging gaps and forming lasting connections. Practices
        include Open Channels,
        Active Listening, and
        Conflict Resolution.
      </p>
    ),
    style: "w-[30rem] h-[20rem]",
  },
  {
    id: 1,
    name: "Rune of Honesty",
    content: (
      <p>
        The Rune of Honesty highlights the significance of truthfulness and
        sincerity. It nurtures an atmosphere of authenticity and trust through
        practices like Transparent Leadership,
        Sincere Feedback, and
        Authentic Connections.
      </p>
    ),
    style: "w-[30rem] h-[20rem]",
  },
  {
    id: 2,
    name: "Rune of Trust",
    content: (
      <p>
        Trust forms the foundation of the TROA community. It enables
        collaboration and unity through practices such as
        Collaborative Projects,
        Accountability, and
        Safe Spaces.
      </p>
    ),
    style: "w-[30rem] h-[20rem]",
  },
  {
    id: 3,
    name: "Rune of Respect",
    content: (
      <p>
        The Rune of Respect ensures that every member is valued and treated
        with dignity. It promotes Celebrating Diversity,
        Constructive Interaction, and
        Recognition of contributions.
      </p>
    ),
    style: "w-[30rem] h-[20rem]",
  },
];