import { Container, Flex } from "@/common";
import { motion } from "framer-motion";
import Link from "next/link";
import { ToggleInterface } from "../Navigation";
import SocialButtons from "../SocialButtons";
import { itemVariants, listItem } from "../styles/mobile";

const MenuItem = ({ toggle }: ToggleInterface) => {
  return (
    <motion.li style={listItem} variants={itemVariants}>
      <Flex direction="col" gap="space-y-3">
        <Container classname="mb-5 text-lg">
          <Link href="#about" onClick={toggle}>
            <h1 className="mb-2 text-xl">About us</h1>
          </Link>
          <Link href="#features" onClick={toggle}>
            <h1 className="text-xl">Features</h1>
          </Link>
        </Container>
        <SocialButtons />
      </Flex>
    </motion.li>
  );
};

export default MenuItem;
