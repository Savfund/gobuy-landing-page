import { Button, Container, Flex } from "@/common";
import { RoutePaths } from "@/constants";

export default function SignUpFiller() {
  return (
    <Container
      background="primary"
      padding="p-20"
      margin="mx-10"
      outline="rounded-xl"
    >
      <Container size="w-1/2" margin="mx-auto">
        <Flex alignItems="center" classname="flex-col">
          <h1 className="text-4xl text-center mb-3 font-bold">
            Maximize Your PI: Get Data & Airtime, Instantly.
          </h1>
          <p className="text-lg w-[90%] text-center mt-3 mb-5 font-light">
            Join gobuy and experience the convenience of converting your
            cryptocurrency into valuable mobile subscriptions.
          </p>
          <Button
            url={RoutePaths.REGISTER}
            className="w-2/4 text-center py-3 rounded-lg"
            asLink
          >
            Get Started Now
          </Button>
        </Flex>
      </Container>
    </Container>
  );
}
