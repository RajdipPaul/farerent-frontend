// import React from "react";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="w-full h-full flex flex-col font-outfit justify-center items-center bg-[#F0EAD6] gap-12">
      {/* White box */}
      <div className="w-220 aspect-video bg-white  rounded-4xl flex justify-center items-center shadow-xl shadow-gray-400/80">
        {/* Signup form */}
        <div className="w-1/2 h-full flex flex-col justify-center items-center text-black gap-6">
          <div className="text-4xl font-extrabold tracking-wider">SIGN UP</div>
          <form
            action=""
            className="flex flex-col justify-center items-center gap-8"
          >
            <div className="flex flex-col justify-center items-center gap-4">
              <div className="relative flex justify-center items-center">
                {/* <label htmlFor="">Full Name</label> */}
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-72 p-3 pr-9 bg-gray-400/35 text-black text-lg rounded-md shadow-lg shadow-inherit outline-none tracking-wide"
                  required
                />
                <FaUser className="absolute right-3 text-gray-500" />
              </div>
              <div className="relative flex justify-center items-center">
                {/* <label htmlFor="">Contact No.</label> */}
                <input
                  type="text"
                  placeholder="Contact No."
                  className="w-72 p-3 pr-9 bg-gray-400/35 text-black text-lg rounded-md shadow-lg shadow-inherit outline-none tracking-wide"
                  required
                />
                <IoCall className="absolute right-3 text-xl text-gray-500" />
              </div>
              <div className="relative flex justify-center items-center">
                {/* <label htmlFor="">Email</label> */}
                <input
                  type="email"
                  placeholder="Email"
                  className="w-72 p-3 pr-9 bg-gray-400/35 text-black text-lg rounded-md shadow-lg shadow-inherit outline-none tracking-wide"
                  required
                />
                <MdOutlineAlternateEmail className="absolute right-3 text-xl text-gray-500" />
              </div>
              <div className="relative flex justify-center items-center">
                {/* <label htmlFor="">Password</label> */}
                <input
                  type="password"
                  placeholder="Password"
                  className="w-72 p-3 pr-9 bg-gray-400/35 text-black text-lg rounded-md shadow-lg shadow-inherit outline-none tracking-wide"
                  required
                />
                <FaLock className="absolute right-3 text-xl text-gray-500" />
              </div>
            </div>
            <button className="w-72 p-3 bg-[#344b75] text-white text-xl rounded-md shadow-lg outline-none cursor-pointer transiton ease-in-out duration-350 hover:bg-[#345696ea]">
              Sign Up
            </button>
          </form>
        </div>

        {/* Blue Box */}
        <div className="w-1/2 h-full rounded-4xl bg-[#344b75] flex flex-col justify-center items-center gap-20">
          <div className="flex flex-col justify-center items-center gap-4">
            <h1 className="text-4xl font-extrabold tracking-wider">
              Hello Chief!!
            </h1>
            <div className="text-lg tracking-wide">
              It`s Nice to have you with us.
            </div>
          </div>

          <div className="flex flex-col justify-center items-center gap-6">
            <div className="text-lg tracking-wide">
              Wait.. Already have an account ?
            </div>
            <Link
              to="/login"
              className="w-52 p-3 flex justify-center items-center border-2 border-white text-white text-xl rounded-md tracking-wide shadow-lg outline-none cursor-pointer transiton ease-in-out duration-350 hover:bg-[#345696ea]"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
