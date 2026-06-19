// import React from "react";
import { FaArrowRight } from "react-icons/fa6";
// import { Link } from "react-router-dom";
import { motion } from "motion/react";
import AnimatedButton from "./buttons/AnimatedButton.jsx";

const Herosection = () => {
  return (
    <div className="h-[calc(100vh-96px)] bg-[#F0EAD6] flex flex-col justify-center items-center text-black">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="flex flex-col justify-center items-center gap-12"
      >
        <div className="text-7xl font-extrabold font-tangerine tracking-wider flex flex-col justify-center items-center gap-4">
          <span>Are you Someone who is looking for houses ?</span>
          <hr className="w-7xl absolute border-t-2 border-b-2 border-black" />
          <span className="z-10 px-4 bg-[#F0EAD6]">Or</span>
          <span>Are you a Lanlord trying to manage Propety ?</span>
        </div>
        <div className="text-2xl text-gray-700 font-outfit tracking-wider">
          Well, If that`s the case, We gotch you!!
        </div>

        <AnimatedButton
          text="Try it now"
          link={"/rolechoice"}
          icon={<FaArrowRight />}
        />

        {/* <motion.div
          whileHover={{ scale: 1.11, y: -2 }}
          whileTap={{ scale: 0.9, y: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
        >
          <Link
            to="/rolechoice"
            className="text-xl font-outfit font-medium tracking-wider flex justify-center items-center border-2 border-black rounded px-8 py-4 gap-2"
          >
            Try Us Now <FaArrowRight />
          </Link>
        </motion.div> */}
      </motion.div>
    </div>
  );
};

export default Herosection;
