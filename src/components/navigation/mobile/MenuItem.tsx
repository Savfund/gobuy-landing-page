import { Flex, Container } from "@/common";
import { motion } from "framer-motion";
import Link from "next/link";
import SocialButtons from "../SocialButtons";
import { itemVariants, listItem } from "../styles/mobile";

const MenuItem = () => {
  return (
    <motion.li
      style={listItem}
      variants={itemVariants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Flex direction="col" gap="space-y-3">
        <Container classname="mb-5 text-lg">
          <Link href="#">
            <h1 className="mb-2">About us</h1>
          </Link>
          <Link href="#">
            <h1>Features</h1>
          </Link>
        </Container>
        <SocialButtons />
      </Flex>
    </motion.li>
  );
};

export default MenuItem;
