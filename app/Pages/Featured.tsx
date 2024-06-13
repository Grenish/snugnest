import Navbar from "./Navbar";
import { Image } from "@nextui-org/react";

export default function Featured() {
  return (
    <div className="bg-white w-full min-h-screen flex flex-col">
      <Navbar />
      <div className="px-4 md:px-16 lg:px-56 flex flex-col lg:flex-row justify-evenly items-center flex-grow">
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
          <h1 className="text-4xl sm:text-4xl md:text-6xl lg:text-5xl Vaimek">
            Shop The Best <br /> For You
          </h1>
          <p className="text-xs md:text-xs xl:text-md">
            Find the perfect cardigan that combines style, comfort, and quality.
            Our carefully crafted pieces are designed to keep you cozy and chic,
            whether at home or out and about. Shop the best for you and embrace
            unparalleled comfort with SnugNest.
          </p>
          <button className="mt-4 text-xs md:text-xs xl:text-md p-2 bg-[#ffcdb2] hover:bg-[#ffb4a2] transition-colors duration-200 ease-in-out">
            Discover More
          </button>
        </div>
        <Image
          src="https://ipfs.filebase.io/ipfs/QmcToifmSHqGBnCKRWKJ72MWNrEaJ2X4d44wZHPss9LNoR"
          className="w-[650px] lg:w-[400px] h-[600px] lg:h-[500px] object-cover pointer-events-none mb-5 sm:mb-0"
        />
      </div>
    </div>
  );
}