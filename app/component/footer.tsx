import React from "react";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const Footer = () => {
  return (
    <div
      className="flex flex-col lg:flex-row justify-between items-center w-full mt-[150px] px-6 lg:px-12"
      data-aos="flip-down"
    >
      {/* Text Section */}
      <div className="w-full lg:w-1/2 mb-8 lg:mb-0 text-center lg:text-left">
        <h1 className={`${roboto.className} font-semibold text-[18px] lg:text-[20px]`}>
          Subscribe to our newsletter
        </h1>
        <p className={`${roboto.className} font-normal text-[14px] lg:text-[16px] mt-2`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      {/* Input Section */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-end gap-4">
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-2 border border-[#000000] text-[#505050] rounded-md w-full sm:w-auto"
          />
          <button className="px-4 py-2 border border-black rounded-md w-full sm:w-auto">
            Subscribe
          </button>
        </div>
        <p className="text-[12px] lg:text-[14px] text-center lg:text-right">
          By subscribing, you agree to our Privacy Policy.
        </p>
      </div>
    </div>
  );
};

export default Footer;
