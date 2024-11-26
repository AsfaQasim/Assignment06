import React from "react";
import { Roboto } from "next/font/google";
import Image from "next/image";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const Hero = () => {
  return (
    <div className="w-full min-h-[600px] flex flex-col-reverse lg:flex-row justify-center items-center px-4 lg:px-8" data-aos="zoom-in-down">
      {/* Text Content */}
      <div className="flex flex-col items-center lg:items-start lg:max-w-[50%] text-center lg:text-left">
        <h1
          className={`${roboto.className} text-[36px] lg:text-[56px] font-bold`}
        >
          Learn new skills online with ease
        </h1>
        <p
          className={`${roboto.className} font-normal text-[16px] lg:text-[18px] mt-4 lg:mt-6 leading-7`}
        >
          Discover a wide range of courses covering a variety of <br className="hidden lg:block" />
          subjects, taught by expert instructors.
        </p>
        <div className="flex justify-center lg:justify-start mt-8 space-x-4">
          <button
            className={`${roboto.className} bg-black text-[14px] lg:text-[16px] font-normal text-white px-4 py-3 rounded-md hover:bg-gray-800 transition-colors`}
          >
            Start learning now
          </button>
          <button
            className={`${roboto.className} text-[14px] lg:text-[16px] font-normal px-4 py-3 border border-black rounded-md hover:bg-slate-100`}
          >
            Explore Courses
          </button>
        </div>
      </div>

      {/* Image */}
      <div className="w-full lg:w-[50%] flex justify-center">
        <Image
          src={"/girl_image.png"}
          alt="girl_image"
          height={800}
          width={640}
          className="max-w-full h-auto"
        />
      </div>
    </div>
  );
};

export default Hero;
