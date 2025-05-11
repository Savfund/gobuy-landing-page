import { Button, Container, Flex, Logo } from "@/common";
import { RoutePaths } from "@/constants";
import Link from "next/link";

export default function TopNavigation() {
  return (
    <Container padding="px-5">
      <Flex justifyContent="between" alignItems="center">
        <Logo />
        <Flex gap="space-x-4">
          <Link href={"#"}>About us</Link>
          <Link href={"#"}>Features</Link>
        </Flex>
        <SocialButtons />
      </Flex>
    </Container>
  );
}

const SocialButtons = () => {
  return (
    <Flex gap="space-x-2">
      <Button url={RoutePaths.LOGIN} className="capitalize" asLink>
        login
      </Button>
      <Button
        url={RoutePaths.REGISTER}
        className="capitalize rounded-md px-4 text-md"
        asLink
      >
        sign up
      </Button>
    </Flex>
  );
};
