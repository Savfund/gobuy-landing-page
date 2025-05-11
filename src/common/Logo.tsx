import logo from "@/assets/logo_black.png";
import { RoutePaths } from "@/constants";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type LogoProps = {
  url?: StaticImageData | string;
};

export default function Logo(props: LogoProps) {
  return (
    <div>
      <Link href={RoutePaths.DEFAULT}>
        <Image
          src={props.url || logo}
          alt="Best store to exchange your PI coin"
          height={100}
          width={100}
        />
      </Link>
    </div>
  );
}
