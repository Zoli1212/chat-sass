import Link from "next/link";
import LogoImage from "@logo/black.svg";
import { AspectRatio } from "./ui/aspect-ratio";
import Image from "next/image";

function Logo() {
  return (
    <Link href="/">
      <div>
        <AspectRatio
          ratio={16 / 9}
          className="flex items-center justify-center"
        >
          <Image
            src={LogoImage}
            priority
            alt="AnyChat Logo"
            className="rounded-full dark:filter dark:invert"
          />
        </AspectRatio>
      </div>
    </Link>
  );
}

export default Logo;
