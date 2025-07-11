export const container: React.CSSProperties = {
  position: "relative",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "stretch",
  flexGrow: 1,
  width: 500,
  maxWidth: "100%",
  height: 400,
  backgroundColor: "blue",
  borderRadius: 20,
  overflow: "hidden",
};

export const background: React.CSSProperties = {
  backgroundColor: "#FFFFFF",
  position: "fixed",
  top: 0,
  right: 0,
  bottom: 0,
  width: 250,
  height: "100%",
};

export const listItem: React.CSSProperties = {
  padding: 0,
  margin: "0 10px",
  listStyle: "none",
  marginBottom: 20,
  cursor: "pointer",
};

export const toggleContainer: React.CSSProperties = {
  outline: "none",
  border: "none",
  WebkitUserSelect: "none",
  MozUserSelect: "none",
  cursor: "pointer",
  position: "absolute",
  top: 18,
  right: 2,
  width: 50,
  height: 50,
  borderRadius: "50%",
  background: "transparent",
};

export const iconPlaceholder: React.CSSProperties = {
  width: 40,
  height: 40,
  borderRadius: "50%",
  flex: "0 0 40px",
  marginRight: 20,
};

export const textPlaceholder: React.CSSProperties = {
  borderRadius: 5,
  width: 200,
  height: 20,
  flex: 1,
};

export const listStyles: React.CSSProperties = {
  listStyle: "none",
  padding: "5px 10px",
  margin: 0,
  position: "absolute",
  right: 0,
  top: 80,
  width: 230,
};

export const nav: React.CSSProperties = {
  width: 300,
};

export const sidebarVariants = {
  open: () => ({
    clipPath: `circle(150% at calc(100% - 40px) 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(25px at calc(100% - 40px) 40px)",
    transition: {
      delay: 0.1,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

export const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export const navVariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};
