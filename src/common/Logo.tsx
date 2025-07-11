import { RoutePaths } from "@/constants";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type LogoProps = {
  url?: StaticImageData | string;
};

export default function Logo(props: LogoProps) {
  return (
    <div className="flex items-center p-3 md:p-0">
      <Link href={RoutePaths.DEFAULT} aria-label="Go to homepage">
        <Image
          src={props.url || "/brand-logo.png"}
          alt="Best store to exchange your PI coin"
          height={100}
          width={100}
          className="object-contain"
        />
      </Link>
    </div>
  );
}
