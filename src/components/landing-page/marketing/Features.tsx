import { Container, Flex } from "@/common";
import { marketing } from "@/data/marketing";

export default function Features() {
  const { features } = marketing;
  return (
    <Container classname="my-20 mx-10 md:mx-20 scroll-smooth">
      <h1 className="text-eminence text-center text-2xl md:text-3xl font-bold mb-6 md:mb-10">
        Our Features
      </h1>

      <Flex classname="flex-col md:flex-row md:items-center md:justify-center gap-10">
        {features.map((text, index) => (
          <Container
            key={index}
            classname="p-8 md:p-10 border-2 rounded-xl border-eminence bg-eminence md:w-2/6 transform transition-transform duration-300 hover:scale-105 shadow-lg"
          >
            <h2 className="font-bold text-lg md:text-xl mb-4 md:mb-2 text-center text-white">
              {text.heading}
            </h2>
            <p className="text-center text-sm text-gray-300">{text.note}</p>
          </Container>
        ))}
      </Flex>
    </Container>
  );
}
