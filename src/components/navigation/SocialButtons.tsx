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
        gap="md:space-x-2 space-y-2 md:space-y-0"
        classname="flex-col md:flex-row"
      >
        {socialLinks.map(({ name, url }) => (
          <Button
            key={name}
            url={url}
            intent={name === "login" ? "outline" : "secondary"}
            className="text-center rounded-lg capitalize"
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
