import { Container, Divider, Flex, Logo } from "@/common";
import { RoutePaths } from "@/constants";
import genUtils from "@/utils/gen";
import Link from "next/link";

export default function Footer() {
  return (
    <Container
      padding="p-5 md:p-20"
      background="secondary"
      margin="mt-10 md:mt-20 mx-5 md:mx-0"
      classname="text-gray-700"
    >
      <div>
        <Container margin="mb-10">
          <Flex
            alignItems="start"
            classname="flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-20"
          >
            <div className="md:w-1/3 animate-fade-in">
              <Logo />
              <p className="text-sm md:text-base tracking-wide text-grey-scale text-justify">
                Join the Subnownow community and experience the future of
                cryptocurrency utility. We&apos;re constantly innovating to
                enhance your mobile connectivity. Subnownow is more than just a
                platform; it&apos;s a gateway to seamless digital access,
                powered by your crypto. Discover the convenience of Subnownow
                today.
              </p>
            </div>

            <div className="animate-fade-in">
              <h2 className="text-3xl font-extrabold text-eminence mb-2">
                Get in touch
              </h2>
              <p className="text-sm tracking-wide text-grey-scale">
                support@subnownow.com
              </p>
            </div>
          </Flex>
        </Container>
        <Divider />
        <Container margin="mt-8">
          <p className="text-center text-sm">
            &copy; {genUtils.getCurrentYear()} Subnownow. All rights reserved
          </p>
          <Flex
            alignItems="center"
            classname="justify-center mt-2 text-sm underline text-grey-scale"
            gap="space-x-3"
          >
            {[
              { name: "Terms of Service", url: RoutePaths.TERMS_OF_SERVICE },
              { name: "Privacy Policy", url: RoutePaths.PRIVACY_POLICY },
            ].map(({ name, url }) => (
              <Link
                key={name}
                href={url}
                className="hover:text-eminence transition-colors duration-300"
              >
                {name}
              </Link>
            ))}
          </Flex>
        </Container>
      </div>
    </Container>
  );
}
