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
              boxShadow="shadow-md mix-blend-color"
              margin="md:mb-0"
              border="border-2 rounded-lg border-gray-100"
              classname="bg-gray-50"
              size="md:w-2/6"
            >
              <h2 className="font-bold text-xl md:text-2xl mb-4 md:mb-2 text-center">
                {text.heading}
              </h2>
              <p className="text-justify text-sm text-grey-scale">
                {text.note}
              </p>
            </Container>
          );
        })}
      </Flex>
    </Container>
  );
}
