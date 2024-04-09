import { Button } from "@/components/ui/button";
import redditText from "@/public/logo-name.svg";
import redditMobile from "@/public/reddit-full.svg";
import Image from "next/image";
import Link from "next/link";

export function Navbar() {
  return (
    <nav className="h-[10vh] w-full flex items-center border-b px-5 lg:px-14 justify-between">
      <Link className="flex items-center gap-x-3" href="/">
        <Image
          className="h-10 w-fit"
          src={redditMobile}
          alt="reddit mobile logo"
        />

        <Image
          className="h-9 w-fit hidden lg:block"
          src={redditText}
          alt="reddit desktop logo"
        />
      </Link>

      <Button>Hello</Button>
    </nav>
  );
}
