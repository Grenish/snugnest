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
      <div className="w-full h-screen flex items-center justify-center relative bg-cover bg-center cozy">
        <div className="absolute grain w-full h-screen z-[0] bg-gray-900 opacity-50"></div>
        <div className="text-center z-[1] flex flex-col items-center justify-center px-4">
          <motion.h1
            className="text-6xl font-bold Vaimek text-white sm:text-7xl md:text-8xl lg:text-9xl xl:text-8xl 2xl:text-[12vw]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            SnugNest
          </motion.h1>
          <motion.p
            className="text-lg text-white sm:text-xl md:text-2xl lg:text-3xl xl:text-sm 2xl:text-sm"
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
            className="text-white mt-6 sm:mt-8 md:mt-10 lg:mt-12 xl:mt-5 2xl:mt-5 animate-bounce"
            onClick={handleScroll}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              fill="currentColor"
              viewBox="0 0 256 256"
              className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-6 xl:h-6 2xl:w-6 2xl:h-6"
            >
              <path d="M205.66,149.66l-72,72a8,8,0,0,1-11.32,0l-72-72a8,8,0,0,1,11.32-11.32L120,196.69V40a8,8,0,0,1,16,0V196.69l58.34-58.35a8,8,0,0,1,11.32,11.32Z"></path>
            </svg>
          </motion.button>
        </div>
      </div>
    </>
  );
}
