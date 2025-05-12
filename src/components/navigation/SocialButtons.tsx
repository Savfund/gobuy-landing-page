import { Button, Flex, Container } from "@/common";
import { RoutePaths } from "@/constants";

const SocialButtons = () => {
  return (
    <Container>
      <Flex gap="space-x-2">
        <Button
          url={RoutePaths.LOGIN}
          className="text-center rounded-lg capitalize"
          asLink
        >
          login
        </Button>
        <Button
          url={RoutePaths.REGISTER}
          className="text-center rounded-lg capitalize"
          asLink
        >
          sign up
        </Button>
      </Flex>
    </Container>
  );
};

export default SocialButtons;
