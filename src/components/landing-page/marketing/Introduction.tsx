import PiCoin from "@/assets/pi-coin.jpg";
import { Button, Container, Flex } from "@/common";
import { RoutePaths } from "@/constants";
import Image from "next/image";

export default function Introduction() {
  return (
    <Container padding="px-6 md:px-12" margin="mt-4 md:mt-16">
      <Flex
        alignItems="center"
        justifyContent="between"
        classname="flex-col md:flex-row gap-8"
      >
        <Container size="md:w-1/2">
          <div className="animate-fade-in">
            <h1 className="text-3xl md:text-5xl font-bold text-eminence leading-tight">
              Seamlessly Use Your Digital Currency.
            </h1>
            <p className="text-base md:text-lg mt-4 text-grey-scale leading-relaxed">
              Subnownow enables you to effortlessly transform your digital
              currency into essential mobile services, making life simpler.
            </p>
            <Button
              className="w-full md:w-1/3 text-center mt-6 py-3 rounded-md shadow-lg"
              url={RoutePaths.REGISTER}
              asLink
            >
              Get Started
            </Button>
          </div>
        </Container>
        <Image
          src={PiCoin}
          alt="pi-brand-logo"
          height={350}
          width={350}
          style={{
            objectFit: "contain",
            objectPosition: "center",
          }}
          className="rounded-lg shadow-md animate-fade-in"
        />
      </Flex>
    </Container>
  );
}
