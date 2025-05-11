import { Container, Flex, Logo } from "@/common";
import Link from "next/link";
import SocialButtons from "./SocialButtons";

export default function TopNavigation() {
  return (
    <Container padding="px-5">
      <Flex justifyContent="between" alignItems="center">
        <Logo />
        <Flex gap="space-x-4">
          <Link href="#">About us</Link>
          <Link href="#">Features</Link>
        </Flex>
        <SocialButtons />
      </Flex>
    </Container>
  );
}
