import React from "react";
import Image from "next/image";
import { Roboto } from "next/font/google";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const Myfooter = () => {
  return (
    <div>
            <div className="flex justify-between px-16" data-aos="zoom-out-left"> 

      <div className="w-[120px]">
        <Image
          className="w-fit h-[40px]"
          src="/logo.png"
          alt="logo"
          width={100}
          height={100}
        />
      </div>
        <ul>
          <li className={`${roboto.className} text-[16px] font-semibold py-3`}>
            Courses
          </li>
          <li className={`${roboto.className} text-[14px] font-normal`}>
            Business
          </li>
          <li className={`${roboto.className} text-[14px] font-normal`}>
            Development
          </li>
          <li className={`${roboto.className} text-[14px] font-normal`}>
            Technology
          </li>
          <li className={`${roboto.className} text-[14px] font-normal`}>
            Design
          </li>
          <li className={`${roboto.className} text-[14px] font-normal`}>
            Programming
          </li>
        </ul>
        <ul>
          <li className={`${roboto.className} text-[16px] font-semibold py-3`}>
            Resources
          </li>
          <li className={`${roboto.className} text-[14px] font-normal`}>
            Career
          </li>
          <li className={`${roboto.className} text-[14px] font-normal`}>
            Resume
          </li>
          <li className={`${roboto.className} text-[14px] font-normal`}>
            Learning
          </li>
          <li className={`${roboto.className} text-[14px] font-normal`}>
            Interview Preparation
          </li>
          <li className={`${roboto.className} text-[14px] font-normal`}>
            Jobs
          </li>
        </ul>
        <ul>
          <li className={`${roboto.className} text-[16px] font-semibold py-3`}>
            About Us
          </li>
          <li className={`${roboto.className} text-[14px] font-normal`}>
            Contact
          </li>
          <li className={`${roboto.className} text-[14px] font-normal`}>
            Help/Support
          </li>
          <li className={`${roboto.className} text-[14px] font-normal`}>
            FAQ
          </li>
          <li className={`${roboto.className} text-[14px] font-normal`}>
            Terms and Conditions
          </li>
          <li className={`${roboto.className} text-[14px] font-normal`}>
            Partners
          </li>
        </ul>
      </div>
      <hr className="border-t border-gray-300 my-8" />
      <div className="flex justify-center items-center flex-col md:flex-row gap-6 md:gap-12">
        <h1 className={`${roboto.className} text-center md:text-left md:flex-1 ml-9`}>
          2023 Ddsgnr. All right reserved.
        </h1>
        <div className="flex justify-center items-center gap-9 md:flex-1">
          <ul className="flex gap-9">
            <li className={`${roboto.className} text-[14px] font-normal`}>
              Privacy Policy
            </li>
            <li className={`${roboto.className} text-[14px] font-normal`}>
              Terms of Service
            </li>
            <li className={`${roboto.className} text-[14px] font-normal`}>
              Cookies Settings
            </li>
          </ul>
        </div>
        <div className="flex justify-center items-center gap-6 md:flex-1">
          <a href="#" aria-label="Facebook" className="text-[#000000]">
            <FaFacebookF size={20} />
          </a>
          <a href="#" aria-label="LinkedIn" className="text-[#000000]">
            <IoLogoLinkedin size={20} />
          </a>
          <a href="#" aria-label="Twitter" className="text-[#000000]">
            <FaTwitter size={20} />
          </a>
          <a href="#" aria-label="Instagram" className="text-[#000000]">
            <FaInstagram size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Myfooter;
