import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
      <footer className="text-center mt-8 py-4 bg-black text-white font-bold ">
        <p className="text-sm">&copy; 2024 The Realms of Asgard. All rights reserved.</p>
        <Link href='https://bladenode.com/'>
        <div className="flex gap-2 items-center justify-center">
        <p className="text-sm">Hosted by</p><Image src="/BladeNode-white.png" alt="bladenode" width={100} height={100}></Image>
        </div>
        </Link>
      </footer>
    );
  }
  