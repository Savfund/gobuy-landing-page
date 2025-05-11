import { Flex, Container } from "@/common";

export default function LandingPageBanner(props: {
  heading: string;
  subheading: string;
}) {
  return (
    <Container background="primary" padding="py-10" size="w-full">
      <Flex justifyContent="center" alignItems="center" direction="col">
        <h1 className="text-5xl font-bold">{props.heading}</h1>
        <p className="text-md text-gray-200 text-[12px]">{props.subheading}</p>
      </Flex>
    </Container>
  );
}
