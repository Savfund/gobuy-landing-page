import { Button, Container, Flex } from "@/common";
import { RoutePaths } from "@/constants";

export default function SignUpFiller() {
  return (
    <div
      style={{
        backgroundImage: `url(${"https://res.cloudinary.com/dwuad4n3s/image/upload/v1750342951/shubham-dhage-IlUq1ruyv0Q-unsplash_pfvixf.jpg"})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <Container
        padding="px-5 py-10 md:px-0 md:py-0 md:p-20"
        margin="mx-5 md:mx-10"
        outline="rounded-xl"
      >
        <Container size="md:w-1/2" margin="mx-auto">
          <Flex alignItems="center" classname="flex-col">
            <h1 className="text-2xl md:text-3xl text-center mb-3 font-[900] text-eminence">
              Maximize Your Cryptocurrency: Get Data & Airtime, Instantly.
            </h1>
            <p className="text-[14px] md:text-lg md:w-[90%] text-center md:mt-3 mb-5 font-light text-grey-scale">
              Join coinbuy and experience the convenience of converting your
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
    </div>
  );
}
