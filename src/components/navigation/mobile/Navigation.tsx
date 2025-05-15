import { motion } from "framer-motion";
import SocialButtons from "../SocialButtons";
import { list, navVariants } from "../styles/mobile";
import MenuItem from "./MenuItem";

const Navigation = () => (
  <motion.ul style={list} variants={navVariants}>
    <MenuItem />
  </motion.ul>
);

export default Navigation;
