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
  const [isSticky, setIsSticky] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const height = useDimensions(containerRef);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

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

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`${
          isSticky ? "fixed top-0 left-0 w-full z-50 shadow-lg bg-white" : ""
        } transition-all duration-300`}
      >
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
            <Navigation toggle={handleMenuToggle} />
            <MenuToggle toggle={handleMenuToggle} />
          </motion.nav>
        </Container>
      </div>
    </>
  );
}

export default MobileNavigation;
