import { motion } from "framer-motion";
import {
  listItem,
  itemVariants,
  iconPlaceholder,
  textPlaceholder,
} from "../styles/mobile";
import { Flex } from "@/common";
import Link from "next/link";
import SocialButtons from "../SocialButtons";

const MenuItem = () => {
  return (
    <motion.li
      style={listItem}
      variants={itemVariants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Flex direction="col" gap="space-y-5">
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
