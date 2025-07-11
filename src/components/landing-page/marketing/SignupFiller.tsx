import { Button, Container, Flex } from "@/common";
import { RoutePaths } from "@/constants";

export default function SignUpFiller() {
  return (
    <div
      className="bg-cover bg-center animate-fade-in"
      style={{
        backgroundImage: `url("https://res.cloudinary.com/dwuad4n3s/image/upload/v1750342951/shubham-dhage-IlUq1ruyv0Q-unsplash_pfvixf.jpg")`,
      }}
    >
      <Container classname="px-5 py-10 md:px-0 md:py-0 md:p-20 mx-5 md:mx-10 rounded-xl shadow-lg">
        <Container classname="md:w-1/2 mx-auto">
          <Flex classname="flex-col items-center">
            <h1 className="text-2xl md:text-3xl text-center mb-3 font-extrabold text-eminence animate-slide-up">
              Maximize Your Digital Currency: Get Data & Airtime, Instantly.
            </h1>
            <p className="text-sm md:text-lg md:w-[90%] text-center md:mt-3 mb-5 font-light text-gray-200 animate-fade-in">
              Join Subnownow and experience the convenience of converting your
              digital currency into valuable mobile subscriptions.
            </p>
            <Button
              url={RoutePaths.REGISTER}
              className="w-full md:w-2/4 text-center py-1 md:py-3 rounded-lg bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 transition-transform transform hover:scale-105"
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
