"use client";

import { motion } from "framer-motion";

export default function Hero() {
  const handleScroll = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="w-full h-screen cozy flex items-center justify-center relative">
        <div className="absolute grain w-full h-screen z-[0]"></div>
        <div className="text-center z-[1] flex flex-col items-center justify-center">
          <motion.h1
            className="text-9xl font-bold Vaimek text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            SnugNest
          </motion.h1>
          <motion.p
            className="text-xl text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Find Your Comfort
          </motion.p>
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
            className="text-white mt-10 animate-bounce"
            onClick={handleScroll}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M205.66,149.66l-72,72a8,8,0,0,1-11.32,0l-72-72a8,8,0,0,1,11.32-11.32L120,196.69V40a8,8,0,0,1,16,0V196.69l58.34-58.35a8,8,0,0,1,11.32,11.32Z"></path>
            </svg>
          </motion.button>
        </div>
      </div>
    </>
  );
}
