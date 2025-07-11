import { Container, Flex, Logo } from "@/common";
import Link from "next/link";
import SocialButtons from "../SocialButtons";
import { useEffect, useState } from "react";

function DesktopNavigation() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`${
        isSticky ? "fixed top-0 left-0 w-full z-50 shadow-lg bg-white" : ""
      } transition-all duration-300`}
    >
      <Container padding="px-6 py-2">
        <Flex classname="items-center justify-between">
          <Logo />
          <Flex classname="gap-8 text-gray-800 font-semibold text-lg">
            <Link
              href="#about"
              className="hover:text-eminence transition-colors duration-200"
            >
              About Us
            </Link>
            <Link
              href="#features"
              className="hover:text-eminence transition-colors duration-200"
            >
              Features
            </Link>
          </Flex>
          <SocialButtons />
        </Flex>
      </Container>
    </div>
  );
}

export default DesktopNavigation;
