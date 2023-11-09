import React, { useState } from "react";
import { motion } from "framer-motion";

const NavbarDropdownMenuItem = ({ testo }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.li
      whileHover={{ scale: 1.2, fontWeight: "bolder" }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="text-xl font-light py-1"
    >
      <a
        href="/#"
        className="relative inline-block"
      >
        {testo}
      </a>
    </motion.li>
  );
};

export default NavbarDropdownMenuItem;
