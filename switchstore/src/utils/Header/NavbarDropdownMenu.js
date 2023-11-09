import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaAngleDown } from 'react-icons/fa';
import NavbarDropdownMenuItem from "./NavbarDropdownMenuItem";


const NavbarDropdownMenu = ({ testo }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <motion.button
        whileHover={{ scale: 1.3, color: "green" }}
        animate={{ color: isOpen ? "green" : "black" }}
        className="focus:outline-none text-xl flex items-center font-light"
        onClick={handleButtonClick}
      >
        {testo}

        <FaAngleDown className="mt-2"/>
        {/* Sottolineatura */}
        {/* <motion.div
          initial={{ scaleX: 0 }}
          animate={isOpen ? { scaleX: 1 } : { scaleX: 0 }}
          exit={{ scaleX: 0 }}
          transition={{ duration: 0.2 }}
          className="absolute bottom-0 left-0 w-full h-0.5 bg-black origin-bottom"
        /> */}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, height: "auto" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute z-10 mt-2 bg-white rounded-md shadow-lg p-6"
          >
            {/* Dropdown content goes here */}
            <ul>
              <NavbarDropdownMenuItem testo={"Smartphone"} />
              <NavbarDropdownMenuItem testo={"Tablet"} />
              <NavbarDropdownMenuItem testo={"Notebook"} />
              <NavbarDropdownMenuItem testo={"Smartwatch"} />
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavbarDropdownMenu;
