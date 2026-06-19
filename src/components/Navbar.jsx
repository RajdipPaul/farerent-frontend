// import React from 'react'
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
// import AnimatedButton from "./buttons/AnimatedButton";

const Navbar = () => {
  return (
    <nav className="w-screen h-24 text-[1.2rem] font-outfit bg-[#344b75] flex justify-between items-center px-6">
      <div className="w-140 flex items-center list-none gap-18">
        <div className="text-4xl font-bold">FareRent</div>
        <div className="flex justify-center items-center gap-10 text-gray-200">
          <Link>Home</Link>
          <Link>Properites</Link>
          <Link>Contact Us</Link>
        </div>
      </div>
      <div className="flex justify-between items-center list-none gap-10">
        <motion.div
          whileHover={{ scale: 1.11, y: -2 }}
          whileTap={{ scale: 0.9, y: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
        >
          <Link
            to="/login"
            className="text-xl font-outfit font-medium tracking-wider flex justify-center items-center border-2 border-white rounded px-4 py-3 cursor-pointer"
          >
            Log In
          </Link>
        </motion.div>

        {/* <AnimatedButton link={"/login"} text="Log In" /> */}

        <motion.div
          whileHover={{ scale: 1.11, y: -2 }}
          whileTap={{ scale: 0.9, y: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
        >
          <Link
            to="/rolechoice"
            className="text-xl font-outfit font-medium tracking-wider flex justify-center items-center border-2 border-white rounded px-4 py-3 gap-2"
          >
            Connect <FaArrowRight />
          </Link>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;
