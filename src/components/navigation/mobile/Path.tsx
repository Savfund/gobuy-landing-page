import type { Variants } from "framer-motion";
import { motion } from "framer-motion";

interface PathProps {
  d?: string;
  variants: Variants;
  transition?: { duration: number };
}

const Path = (props: PathProps) => (
  <motion.path
    fill="transparent"
    strokeWidth="2"
    stroke="hsl(0, 0%, 10%)"
    strokeLinecap="square"
    {...props}
  />
);

export default Path;
