import { Container, Divider, Flex } from "@/common";
import { RoutePaths } from "@/constants";
import genUtils from "@/utils/gen";
import Link from "next/link";

export default function Footer() {
  return (
    <Container
      padding="md:p-20 p-5"
      background="secondary"
      margin="mt-20 md:mt-10 mx-5 md:mx-0"
      classname="text-gray-700"
    >
      <div>
        <Container margin="mb-10">
          <Flex
            alignItems="start"
            classname="md:space-x-20 flex-col md:flex-row"
          >
            <div className="md:w-1/3">
              <h2 className="text-2xl md:text-3xl font-[800] text-eminence mb-2">
                CoinBuy
              </h2>
              <h3 className="text-[14px] md:text-sm tracking-[1px] text-grey-scale text-justify">
                Join the CoinBuy community and experience the future of
                cryptocurrency utility. We&apos;re constantly innovating to
                enhance your mobile connectivity. CoinBuy is more than just a
                platform; it&apos;s a gateway to seamless digital access,
                powered by your crypto. Discover the convenience of CoinBuy
                today.
              </h3>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-[800] text-eminence mt-5 md:mt-0 mb-1">
                Get in touch
              </h2>
              <h5 className="text-sm tracking-[1px] text-grey-scale">
                codinkage@gmail.com
              </h5>
            </div>
          </Flex>
        </Container>
        <Divider />
        <Container margin="mt-8">
          <h2 className="text-center text-md text-grey-scale">
            &copy; {genUtils.getCurrentYear()} CoinBuy. All rights reserved
          </h2>
          <Flex
            alignItems="center"
            classname="text-[12px] underline justify-center mt-2"
            gap="space-x-3"
          >
            {[
              { name: "Terms of Service", url: RoutePaths.TERMS_OF_SERVICE },
              { name: "Privacy Policy", url: RoutePaths.PRIVACY_POLICY },
            ].map(({ name, url }) => (
              <Link key={name} href={url}>
                {name}
              </Link>
            ))}
          </Flex>
        </Container>
      </div>
    </Container>
  );
}
