import { motion } from "framer-motion";
import { useState } from "react";

export default function NavbarButton({ testo }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.li
      whileHover={{ scale: 1.3, color: isHovered ? "green" : "black" }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <a
        href="/riparazione"
        className="text-xl font-light relative inline-block"
        style={{
          textDecoration: "none",
          color: isHovered ? "green" : "black",
        }}
      >
        {testo}
        {/* Underline on Hover */}
        {/* <motion.div
          initial={{ scaleX: 0 }}
          animate={isHovered ? { scaleX: 1 } : { scaleX: 0 }}
          exit={{ scaleX: 0 }}
          transition={{ duration: 0.2 }}
          className="absolute bottom-0 left-0 w-full h-0.5 bg-black origin-bottom"
        /> */}
      </a>
    </motion.li>
  );
}
