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
        <Container size="w-5/6 md:w-1/2 text-center md:text-left">
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
          src={`https://res.cloudinary.com/dwuad4n3s/image/upload/v1752306364/Subnownow_landing_page_illustration_u4sjjw.png`}
          alt="pi-brand-logo"
          height={600}
          width={600}
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      </Flex>
    </Container>
  );
}
