import { Container, Flex } from "@/common";
import { motion } from "framer-motion";
import Link from "next/link";
import { ToggleInterface } from "../Navigation";
import SocialButtons from "../SocialButtons";
import { itemVariants, listItem } from "../styles/mobile";

const MenuItem = ({ toggle }: ToggleInterface) => {
  return (
    <motion.li style={listItem} variants={itemVariants}>
      <Flex direction="col" gap="4">
        <Container classname="mb-6">
          <Link href="#about" onClick={toggle}>
            <h1 className="text-lg font-semibold mb-3">About Us</h1>
          </Link>
          <Link href="#features" onClick={toggle}>
            <h1 className="text-lg font-semibold">Features</h1>
          </Link>
        </Container>
        <SocialButtons />
      </Flex>
    </motion.li>
  );
};

export default MenuItem;
