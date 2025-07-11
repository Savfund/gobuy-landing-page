import { Button, Container, Flex } from "@/common";
import { RoutePaths } from "@/constants";

const SocialButtons = () => {
  const socialLinks = [
    {
      name: "login",
      url: RoutePaths.LOGIN,
    },
    {
      name: "sign up",
      url: RoutePaths.REGISTER,
    },
  ];

  return (
    <Container>
      <Flex
        gap="space-y-4 md:space-y-0 md:space-x-4"
        classname="flex-col md:flex-row items-center w-full"
      >
        {socialLinks.map(({ name, url }) => (
          <Button
            key={name}
            url={url}
            intent={name === "login" ? "outline" : "secondary"}
            className="text-center rounded-md capitalize px-4 py-2 w-full md:w-auto"
            asLink
          >
            {name}
          </Button>
        ))}
      </Flex>
    </Container>
  );
};

export default SocialButtons;
