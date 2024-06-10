import { Cardigan3 } from "../assets";
import Navbar from "./Navbar";
import { Image } from "@nextui-org/react";

export default function Featured() {
  return (
    <div className="bg-white w-full min-h-screen flex flex-col">
      <Navbar />
      <div className="px-56 flex justify-between items-center flex-grow">
        <div className="w-1/2">
          <h1 className="text-5xl Vaimek">
            Shop The Best <br /> For You
          </h1>
          <p>
            find the perfect cardigan that combines style, comfort, and quality.
            Our carefully crafted pieces are designed to keep you cozy and chic,
            whether at home or out and about. Shop the best for you and embrace
            unparalleled comfort with SnugNest.
          </p>
          <button className="mt-2 p-2 bg-[#ffcdb2] hover:bg-[#ffb4a2] transition-colors duration-200 ease-in-out">Discover More</button>
        </div>
        <Image
          src={Cardigan3.src}
          className="h-[600px] pointer-event-none"
        />
      </div>
    </div>
  );
}