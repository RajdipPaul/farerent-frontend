// import React from 'react'
import { motion } from "motion/react";
import { Link } from "react-router-dom";

const Rolechoice = () => {
  return (
    <div className="w-full h-full flex flex-col font-outfit justify-center items-center bg-[#F0EAD6] gap-12">
      <div className="text-4xl text-gray-700 tracking-wider">Are you a...?</div>
      <div className="flex justify-between items-center gap-20">
        <motion.div
          whileHover={{ scale: 2.11 }}
          whileTap={{ scale: 0.9, y: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 12 }}
        >
          <Link
            to="/signup"
            className="w-80 aspect-square bg-[#344b75] rounded-lg flex flex-col justify-center items-center cursor-pointer "
          >
            <img
              src="house.svg"
              alt="house_img"
              className="w-40 aspect-square"
            />
            <span className="text-2xl tracking-wide">Landlord</span>
          </Link>
        </motion.div>

        <Link
          to="/signup"
          className="w-80 aspect-square bg-[#344b75] rounded-lg flex flex-col justify-center items-center cursor-pointer hover:scale-110 transform transition-all duration-500 ease-in-out"
        >
          <img src="tent.svg" alt="tent-img" className="w-40 aspect-square" />
          <span className="text-2xl tracking-wide">Tenant</span>
        </Link>
      </div>
    </div>
  );
};

export default Rolechoice;
