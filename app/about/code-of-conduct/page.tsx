import Image from "next/image";

export default function CodeOfConductPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen  text-white px-6">
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
      <h1 className="text-3xl font-bold text-center mb-6">
        TROA Community Code of Conduct
      </h1>

      {/* Content */}
      <div className="max-w-5xl space-y-8 text-lg text-justify">
        <p>
          Welcome to The Realms of Asgard: A Non-Profit Online Gaming Community!
        </p>
        <p>
          At The Realms of Asgard (TROA), gaming is more than a pastime; it’s a
          way to build lasting friendships and form a community where everyone
          feels at home. As a Non-Profit Organization (NPO), TROA is committed
          to creating an inclusive, welcoming environment for gamers across the
          globe. Diversity is celebrated here, and every voice matters.
        </p>

        <h2 className="text-2xl font-bold">What is TROA?</h2>
        <p>
          Founded in 2017, TROA has grown into an immersive online gaming
          community that goes beyond traditional gaming. Our mission is to be a
          sanctuary for gamers—a place of fun, friendship, and meaningful
          interactions. As an NPO, we focus on cultivating a secure and positive
          environment rather than profit. We reinvest our resources back into
          the community, providing support and enriching the gaming experience
          for all.
        </p>

        <h2 className="text-2xl font-bold">Our Community Values</h2>
        <p>
          TROA is grounded in the values of inclusivity, diversity, and support.
          We embrace gamers from every culture, background, and walk of life,
          fostering a space where everyone feels welcome and valued. Our vibrant
          community reflects a tapestry of different perspectives and
          experiences, making TROA an engaging and dynamic place to be.
        </p>

        <h2 className="text-2xl font-bold">Code of Conduct</h2>
        <p>
          To maintain the welcoming and positive environment that defines TROA,
          we have established a comprehensive Code of Conduct. By participating
          in TROA activities, both in and outside the game, we ask that you
          adhere strictly to these guidelines to ensure a respectful and
          constructive community for all.
        </p>

        <h3 className="text-xl font-bold">1. General Code of Conduct</h3>
        <ul className="list-disc ml-6 space-y-2">
          <li>
            <strong>Respect:</strong> Treat every member with respect.
            Discrimination, harassment, or any toxicity will not be tolerated.
          </li>
          <li>
            <strong>Inclusivity:</strong> Be mindful of diverse perspectives and
            backgrounds.
          </li>
          <li>
            <strong>Language:</strong> Use respectful and appropriate language.
          </li>
          <li>
            <strong>No Hate Speech:</strong> TROA has zero tolerance for hate
            speech, harassment, or stalking.
          </li>
          <li>
            <strong>Privacy:</strong> Do not share personal information without
            consent.
          </li>
        </ul>

        <h3 className="text-xl font-bold">
          2. Code of Conduct for Company Employees and Non-Employees
        </h3>
        <ul className="list-disc ml-6 space-y-2">
          <li>
            <strong>Professionalism:</strong> Maintain professionalism in all
            interactions.
          </li>
          <li>
            <strong>Ethical Conduct:</strong> Avoid conflicts of interest and
            disclose any potential conflicts.
          </li>
          <li>
            <strong>Confidential Information:</strong> Protect confidential
            information at all times.
          </li>
        </ul>

        <h3 className="text-xl font-bold">3. Discord Code of Conduct</h3>
        <ul className="list-disc ml-6 space-y-2">
          <li>
            <strong>Respect:</strong> Treat everyone with respect and kindness.
          </li>
          <li>
            <strong>No Spamming:</strong> Avoid spamming, trolling, or
            disruptive behavior.
          </li>
          <li>
            <strong>Content:</strong> Share relevant and appropriate content.
          </li>
        </ul>

        <h3 className="text-xl font-bold">4. Website Code of Conduct</h3>
        <ul className="list-disc ml-6 space-y-2">
          <li>
            <strong>Respectful Interaction:</strong> Engage respectfully with
            others.
          </li>
          <li>
            <strong>Relevant Content:</strong> Keep posts relevant to the topic.
          </li>
        </ul>

        <h3 className="text-xl font-bold">5. Game Server Code of Conduct</h3>
        <ul className="list-disc ml-6 space-y-2">
          <li>
            <strong>Fair Play:</strong> No cheating or exploiting game
            mechanics.
          </li>
          <li>
            <strong>Respect:</strong> Treat all players with courtesy.
          </li>
        </ul>

        <h3 className="text-xl font-bold">6. Strike System</h3>
        <p>
          TROA enforces a four-strike system for violations:
          <ul className="list-disc ml-6 space-y-2">
            <li>First Strike: Timeout for one week.</li>
            <li>Second Strike: Verbal warning.</li>
            <li>Third Strike: Documented warning.</li>
            <li>Fourth Strike: Removal and potential ban.</li>
          </ul>
        </p>

        <h3 className="text-xl font-bold">7. Appeals Process</h3>
        <p>
          For strike or ban appeals, contact us via Discord or email at
          <strong> odin@therealmsofasgard.com</strong>.
        </p>
        <h3 className="text-xl font-bold">8. Misinformation and Bashing</h3>
        <p>
          Misinformation or bashing TROA or our services will not be tolerated.
          If unhappy, please move on respectfully.
        </p>
        <h3 className="text-xl font-bold">9. Closing Statement</h3>
        <p>
          TROA is committed to fostering a positive community. This Code of
          Conduct is subject to change, and it's the responsibility of all
          members to stay updated. Thank you for your cooperation in upholding
          these standards.
        </p>
      </div>
    </div>
  );
}
