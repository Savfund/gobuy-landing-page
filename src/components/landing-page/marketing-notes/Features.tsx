import { Container, Flex } from "@/common";
import { marketing } from "@/data/marketing";

export default function Features() {
  const { features } = marketing;
  return (
    <Container margin={"my-20 mx-10"}>
      <h1 className="text-eminence text-center text-4xl font-bold mb-10">
        Why Choose Us
      </h1>

      <Flex gap={"space-x-10"}>
        {features.map((text, index) => {
          return (
            <Container
              key={index}
              padding="p-10"
              boxShadow="shadow-lg"
              border="border-2 rounded-lg border-gray-100"
            >
              <h2 className="font-bold text-2xl mb-2">{text.heading}</h2>
              <p className="text-justify text-[14px] text-gray-600">
                {text.note}
              </p>
            </Container>
          );
        })}
      </Flex>
    </Container>
  );
}
