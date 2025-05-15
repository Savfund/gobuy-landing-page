import PiCoin from "@/assets/pi-coin.jpg";
import { Button, Container, Flex } from "@/common";
import { RoutePaths } from "@/constants";
import Image from "next/image";

export default function Introduction() {
  return (
    <Container padding="px-10" margin="mt-14">
      <Flex
        alignItems="start"
        justifyContent="between"
        classname="flex-col-reverse md:flex-row"
      >
        <Container size="md:w-2/5">
          <div>
            <h1 className="text-4xl md:text-[45px] text-eminence">
              The Easy Way To Use Your PI.
            </h1>
            <p className="text-lg md:text-xl mt-2 md:mt-4 text-justify text-grey-scale">
              Don&apos;t let your crypto sit idle. Gobuy transforms it into the
              services you need.
            </p>
            <Button
              className="w-full md:w-2/4 text-center mt-8 md:mt-4 py-3 rounded-lg"
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
          height={400}
          width={400}
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      </Flex>
    </Container>
  );
}
