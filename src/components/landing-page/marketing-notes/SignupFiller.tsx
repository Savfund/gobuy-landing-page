import { Button, Container, Flex } from "@/common";
import { RoutePaths } from "@/constants";

export default function SignUpFiller() {
  return (
    <Container
      background="primary"
      classname="text-white"
      padding="p-20"
      margin="mx-10"
      outline="rounded-xl"
    >
      <Container size="w-1/2" margin="mx-auto">
        <Flex alignItems="center" direction="col">
          <h1 className="text-4xl text-center mb-3 font-bold">
            Maximize Your PI: Get Data & Airtime, Instantly.
          </h1>
          <h3 className="text-2xl text-center mb-5 font-light">
            Join gobuy and experience the convenience of converting your
            cryptocurrency into valuable mobile subscriptions.
          </h3>
          <Button
            url={RoutePaths.REGISTER}
            className="rounded-lg text-[14px] font-bold tracking-wide"
            asLink
          >
            Get Started Now
          </Button>
        </Flex>
      </Container>
    </Container>
  );
}
