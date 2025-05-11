import { Container, Flex, Divider } from "@/common";
import { RoutePaths } from "@/constants";
import Link from "next/link";
import genUtils from "@/utils/gen";

export default function Footer() {
  return (
    <Container
      padding={"p-20"}
      background={"secondary"}
      margin={"mt-20"}
      classname="text-gray-700"
    >
      <div>
        <Container margin={"mb-10"}>
          <Flex alignItems={"start"} classname={"justify-between"}>
            <div className="w-1/2">
              <h2 className="text-3xl font-[800] text-eminence mb-2">Gobuy</h2>
              <h3 className="text-[15px] tracking-[1px]">
                Join the Gobuy community and experience the future of
                cryptocurrency utility. We&apos;re constantly innovating to
                enhance your mobile connectivity and expand the possibilities of
                PI. Gobuy is more than just a platform; it&apos;s a gateway to
                seamless digital access, powered by your crypto. Discover the
                convenience of Gobuy today.
              </h3>
            </div>

            <div>
              <h2 className="text-xl font-[800] text-eminence mb-2">
                Get in touch
              </h2>
              <h5 className="text-sm tracking-[1px]">help@gobuy.com</h5>
            </div>
          </Flex>
        </Container>
        <Divider />
        <Container margin={"mt-10"}>
          <h2 className="text-center text-xl">
            &copy; {genUtils.getCurrentYear()} Gobuy. All rights reserved
          </h2>
          <Flex
            justifyContent={"center"}
            alignItems={"center"}
            classname={"text-[12px] underline"}
            gap={"space-x-3"}
          >
            <Link href={RoutePaths.TERMS_OF_SERVICE} target="_blank" rel="noreferrer noopener">
              Terms of Service
            </Link>
            <Link href={RoutePaths.PRIVACY_POLICY} target="_blank" rel="noreferrer noopener">
              Privacy Policy
            </Link>
          </Flex>
        </Container>
      </div>
    </Container>
  );
}
