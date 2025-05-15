import { Button, Container, Flex } from "@/common";
import { RoutePaths } from "@/constants";

export default function SignUpFiller() {
  return (
    <Container padding="md:p-20" margin="mx-5 md:mx-10" outline="rounded-xl">
      <Container size="md:w-1/2" margin="mx-auto">
        <Flex alignItems="center" classname="flex-col">
          <h1 className="text-2xl md:text-3xl text-center mb-3 font-bold">
            Maximize Your PI: Get Data & Airtime, Instantly.
          </h1>
          <p className="text-[14px] md:text-lg md:w-[90%] text-center md:mt-3 mb-5 font-light text-grey-scale">
            Join gobuy and experience the convenience of converting your
            cryptocurrency into valuable mobile subscriptions.
          </p>
          <Button
            url={RoutePaths.REGISTER}
            className="w-full md:w-2/4 text-center py-1 md:py-3 rounded-lg"
            asLink
          >
            Get Started Now
          </Button>
        </Flex>
      </Container>
    </Container>
  );
}
