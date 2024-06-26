import { Button } from "@/components/ui/button";
import redditText from "@/public/logo-name.svg";
import redditMobile from "@/public/reddit-full.svg";
import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import {
  LoginLink,
  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { UserDropdown } from "./user-dropdown";

export async function Navbar() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

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

      <div className="flex items-center gap-x-4">
        <ThemeToggle />

        {user ? (
          <UserDropdown userImage={user.picture} />
        ) : (
          <div className="flex items-center gap-x-4">
            <Button variant="secondary" asChild>
              <RegisterLink>Sign Up</RegisterLink>
            </Button>

            <Button asChild>
              <LoginLink>Log in</LoginLink>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
