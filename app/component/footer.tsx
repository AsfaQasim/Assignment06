import React from "react";
import { Roboto } from "next/font/google";
import Image from "next/image";
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const Footer = () => {
  return (
    <div className="flex justify-between" data-aos="flip-down">
      <div className="w-full flex justify-between mt-[150px]  px-12">
        <div>
          {" "}
          <h1 className={`${roboto.className} font-semibold text-[18px]`}>
            Subscribe to our newsletter
          </h1>
          <p className={`${roboto.className} font-normal text-[16px]`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="flex gap-4 mr-12 flex-col">
          <div className="flex gap-5">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 border border-[#000000] text-[#505050] rounded-md"
            />
            <button className="px-2 py-2 border border-black rounded-md">
              Subscribe
            </button>
          </div>

          <p>By subscribing you agree to with our Privacy Policy</p>
        </div>
      </div>
    </div>
  );
};
export default Footer;
