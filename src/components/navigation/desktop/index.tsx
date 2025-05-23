import { Container, Flex, Logo } from "@/common";
import Link from "next/link";
import SocialButtons from "../SocialButtons";

function DesktopNavigation() {
  return (
    <Container padding="px-5">
      <Flex classname="items-center justify-between">
        <Logo />
        <Flex gap="space-x-4">
          <Link href="#about">About us</Link>
          <Link href="#features">Features</Link>
        </Flex>
        <SocialButtons />
      </Flex>
    </Container>
  );
}

export default DesktopNavigation;
