import { Button, Flex } from "@/common";
import { RoutePaths } from "@/constants";

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

export default SocialButtons