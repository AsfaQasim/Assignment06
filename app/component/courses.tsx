import React from "react";
import { Roboto } from "next/font/google";
import Image from "next/image";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const Courses = () => {
  return (
    <div className="w-full max-w-[1280px] h-auto flex flex-col justify-center items-center bg-white mt-0 gap-6 px-4 lg:px-8" data-aos="fade-up-left">
      {/* Heading */}
      <h1
        className={`${roboto.className} font-bold text-[28px] md:text-[36px] lg:text-[48px] text-center mt-16 lg:mt-24`}
      >
        Explore Courses By Category
      </h1>
      <p
        className={`${roboto.className} font-normal text-[16px] md:text-[18px] text-center mt-4`}
      >
        Discover a wide range of courses covering a variety of subjects, taught
        by expert instructors.
      </p>

      {/* Flex Container for Cards */}
      <div className="w-full flex flex-wrap justify-between gap-6 mt-8 lg:mt-12">

        {/* First Card (Left aligned) */}
        <div className="bg-[#F7F7F7] w-[450px] h-auto flex items-center gap-4 px-6 py-6 shadow-sm rounded-md">
          <Image
            className="flex-shrink-0"
            src="/tool1.png"
            alt="tool1"
            height={40}
            width={40}
          />
          <div>
            <h1 className={`${roboto.className} text-[16px] md:text-[18px] font-medium`}>
              Design & Development
            </h1>
            <p className={`${roboto.className} text-[14px] md:text-[16px] font-normal`}>
              50+ Courses Available
            </p>
          </div>
        </div>

        {/* Second Card (Center aligned) */}
        <div className="bg-[#F7F7F7] w-[450px] h-auto flex items-center gap-4 px-6 py-6 shadow-sm rounded-md mx-auto">
          <Image
            className="flex-shrink-0"
            src="/volume-high.png"
            alt="tool2"
            height={40}
            width={40}
          />
          <div>
            <h1 className={`${roboto.className} text-[16px] md:text-[18px] font-medium`}>
              Marketing
            </h1>
            <p className={`${roboto.className} text-[14px] md:text-[16px] font-normal`}>
              50+ Courses Available
            </p>
          </div>
        </div>

        {/* Third Card (Right aligned) */}
        <div className="bg-[#F7F7F7] w-[450px] h-auto flex items-center gap-4 px-6 py-6 shadow-sm rounded-md">
          <Image
            className="flex-shrink-0"
            src="/group.png"
            alt="tool3"
            height={40}
            width={40}
          />
          <div>
            <h1 className={`${roboto.className} text-[16px] md:text-[18px] font-medium`}>
              Development
            </h1>
            <p className={`${roboto.className} text-[14px] md:text-[16px] font-normal`}>
              50+ Courses Available
            </p>
          </div>
        </div>

      </div>

      {/* View All Courses Button */}
      <div className="w-full flex justify-center mt-8">
        <button className="w-[155px] h-[48px] border border-black px-4 py-3 text-center hover:bg-slate-100">
          View All Courses
        </button>
      </div>
    </div>
  );
};

export default Courses;
