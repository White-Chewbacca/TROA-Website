import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-black text-white">
      <nav className="flex items-center justify-between pl-6 pr-10 text-xl font-bold ">
        {/* Logo */}
        <Link href="/" className="">
          <Image
                      src="/TROAExtended.png"
                      alt="The Realms of Asgard Logo"
                      width={400}
                      height={100}
                      className="mx-auto"
                    />
        </Link>

        {/* Links */}
        <ul className="flex space-x-6 items-center">
          <li>
            <Link href="/" className="hover:text-yellow-400">
              Home
            </Link>
          </li>
          <li>
            <Link href="https://forums.therealmsofasgard.com" className="hover:text-yellow-400">
              Forums
            </Link>
          </li>
          <li>
            <Link href="/status" className="hover:text-yellow-400">
              Status
            </Link>
          </li>
          <li>
            <Link
              href="https://discord.therealmsofasgard.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400"
            >
              Discord
            </Link>
          </li>
          <li className="relative group">
            {/* Dropdown Trigger with Larger Hover Area */}
            <div className="relative flex items-center">
              <Link
                href="/about"
                className="hover:text-yellow-400 px-4 py-2"
              >
                About Us
              </Link>
              <svg
                className="w-4 h-4 ml-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.23 8.27a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </div>

            {/* Dropdown Menu */}
            <ul className="absolute left-0 mt-3 bg-black border border-gray-700 rounded shadow-lg w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:mt-2 transition-all duration-300 z-10">
              <li>
                <Link
                  href="/about/mission"
                  className="block px-4 py-2 hover:bg-gray-800"
                >
                  Our Mission
                </Link>
              </li>
              <li>
                <Link
                  href="/about/purpose"
                  className="block px-4 py-2 hover:bg-gray-800"
                >
                  Our Purpose
                </Link>
              </li>
              <li>
                <Link
                  href="/about/odin-stones"
                  className="block px-4 py-2 hover:bg-gray-800"
                >
                  Odin Stones
                </Link>
              </li>
              <li>
                <Link
                  href="/about/code-of-conduct"
                  className="block px-4 py-2 hover:bg-gray-800"
                >
                  Code of Conduct
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="/contact" className="hover:text-yellow-400">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
