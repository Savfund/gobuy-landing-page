import { Container, Flex } from "@/common";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import SocialButtons from "../SocialButtons";
import { itemVariants, listItem } from "../styles/mobile";

const MenuItem = () => {
  return (
    <motion.li style={listItem} variants={itemVariants}>
      <Flex direction="col" gap="space-y-3">
        <Container classname="mb-5 text-lg">
          <Link to="about-us" duration={500} smooth>
            <h1 className="mb-2 text-xl">About us</h1>
          </Link>
          <Link to="features" duration={500} smooth>
            <h1 className="text-xl">Features</h1>
          </Link>
        </Container>
        <SocialButtons />
      </Flex>
    </motion.li>
  );
};

export default MenuItem;
