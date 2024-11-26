import React from "react";
import { Roboto } from "next/font/google";
import Image from "next/image";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const Logo = () => {
  return (
    <div
      className="w-full bg-[#F7F7F7] flex flex-col lg:flex-row items-center lg:items-center justify-start py-8 px-0"
      data-aos="zoom-in-right"
    >
      {/* Heading */}
      <div className="lg:w-auto mb-6 lg:mb-0 flex-shrink-0">
        <h1
          className={`${roboto.className} text-[20px] md:text-[24px] lg:text-[28px] font-bold text-start pl-4 lg:pl-8`}
        >
          Trusted by 2000+ companies worldwide.
        </h1>
      </div>

      {/* Logo Images */}
      <div className="flex flex-wrap justify-start items-center gap-6 pl-4 lg:pl-12 mt-4 lg:mt-0">
        <Image
          data-aos="fade-left"
          src={"/logo1.png"}
          alt="logo1"
          width={200}
          height={100}
          className="w-auto h-auto"
        />
        <Image
          src={"/logo2.png"}
          alt="logo2"
          width={200}
          height={100}
          className="w-auto h-auto"
        />
        <Image
          src={"/logo3.png"}
          alt="logo3"
          width={200}
          height={100}
          className="w-auto h-auto"
        />
        <Image
          src={"/logo5.png"}
          alt="logo5"
          width={200}
          height={100}
          className="w-auto h-auto"
        />
        <Image
          src={"/logo6.png"}
          alt="logo6"
          width={200}
          height={100}
          className="w-auto h-auto"
        />
      </div>
    </div>
  );
};

export default Logo;
