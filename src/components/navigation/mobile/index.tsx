"use client";

import { Container, Logo } from "@/common";
import { useDimensions } from "@/hooks/useDimensions";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { background, nav, sidebarVariants } from "../styles/mobile";
import MenuToggle from "./MenuToggle";
import Navigation from "./Navigation";

function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const height = useDimensions(containerRef);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <Container>
        <Logo />
        <motion.nav
          initial={false}
          animate={isOpen ? "open" : "closed"}
          custom={height}
          ref={containerRef}
          style={nav}
        >
          <motion.div style={background} variants={sidebarVariants} />
          <Navigation />
          <MenuToggle toggle={() => setIsOpen(!isOpen)} />
        </motion.nav>
      </Container>
    </>
  );
}

export default MobileNavigation;
