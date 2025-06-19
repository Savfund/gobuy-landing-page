import { motion } from "framer-motion";
import { listStyles, navVariants } from "../styles/mobile";
import MenuItem from "./MenuItem";
import { ToggleInterface } from "../Navigation";

const Navigation = (props: ToggleInterface) => (
  <motion.ul style={listStyles} variants={navVariants}>
    <MenuItem {...props} />
  </motion.ul>
);

export default Navigation;
