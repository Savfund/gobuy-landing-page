import { Container, Flex } from "@/common";
import { marketing } from "@/data/marketing";

export default function Features() {
  const { features } = marketing;
  return (
    <Container margin="my-20 mx-10 md:mx-20" classname="scroll-smooth">
      <h1 className="text-eminence text-center text-2xl md:text-3xl font-bold mb-6 md:mb-10">
        Our Features
      </h1>

      <Flex
        gap="flex-col md:flex-row md:space-x-10 space-y-10 md:space-y-0"
        classname="md:items-center md:justify-center"
      >
        {features.map((text, index) => {
          return (
            <Container
              key={index}
              padding="p-8 md:p-10"
              margin="md:mb-0"
              border="border-2 rounded-lg border-gray-100"
              size="md:w-2/6"
              background="bg-eminence"
            >
              <h2 className="font-bold text-lg md:text-xl mb-4 md:mb-2 text-center text-white">
                {text.heading}
              </h2>
              <p className="text-center text-[14px] text-gray-300">
                {text.note}
              </p>
            </Container>
          );
        })}
      </Flex>
    </Container>
  );
}
