import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";

import { MenuIcon } from "lucide-react";
import Link from "next/link";

type Props = {
  userImage: string | null;
};

const nullImageSrc =
  "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small_2x/default-avatar-icon-of-social-media-user-vector.jpg";

export function UserDropdown({ userImage }: Props) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="rounded-full border px-2 py-2 lg:px-4 lg:py-2 flex items-center gap-x-3">
          <MenuIcon className="w-6 h-6 lg:w-5 lg:h-5" />

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="rounded-full w-8 h-8 hidden lg:block"
            src={userImage ?? nullImageSrc}
            alt="user avatar"
          />
        </div>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-[200px]" align="end">
        <DropdownMenuItem>
          <Link className="w-full" href="/r/create">
            Create Community
          </Link>
        </DropdownMenuItem>

        <DropdownMenuItem>
          <Link className="w-full" href="/create">
            Create Post
          </Link>
        </DropdownMenuItem>

        <DropdownMenuItem>
          <Link className="w-full" href="/settings">
            Settings
          </Link>
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem>
          <LogoutLink className="w-full">Logout</LogoutLink>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
