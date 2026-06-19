// import React from 'react'
import { motion } from "motion/react";
import { Link } from "react-router-dom";
// import { FaArrowRight } from "react-icons/fa6";

const AnimatedButton = ({ link, text, icon }) => {
  console.log(text, icon);

  return (
    <motion.div
      whileHover={{ scale: 1.11, y: -2 }}
      whileTap={{ scale: 0.9, y: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 12 }}
    >
      <Link
        to={link}
        className="text-xl font-outfit font-medium tracking-wider flex justify-center items-center border-2 border-black rounded px-8 py-4 gap-2"
      >
        {text} {icon}
        {/* <FaArrowRight /> */}
      </Link>
    </motion.div>
  );
};

export default AnimatedButton;
