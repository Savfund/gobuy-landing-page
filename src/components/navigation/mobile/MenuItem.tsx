import { Flex } from "@/common";
import { motion } from "framer-motion";
import Link from "next/link";
import SocialButtons from "../SocialButtons";
import {
    itemVariants,
    listItem
} from "../styles/mobile";

const MenuItem = () => {
  return (
    <motion.li
      style={listItem}
      variants={itemVariants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Flex direction="col" gap="space-y-3">
        <Link href="#">
          <h1>About us</h1>
        </Link>
        <Link href="#">
          <h1>Features</h1>
        </Link>
        <SocialButtons />
      </Flex>
    </motion.li>
  );
};

export default MenuItem;
