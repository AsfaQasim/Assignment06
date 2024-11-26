import React from "react";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const Achievement = () => {
  return (
    <div className="w-full max-w-[1280px] h-auto bg-[#FFFFFF] flex flex-col justify-center items-center py-10 px-4 mt-10" data-aos="fade-up-right">
      {/* Heading Section */}
      <h1
        className={`${roboto.className} font-bold text-[28px] md:text-[36px] lg:text-[48px] text-center`}
      >
        Our Achievements
      </h1>
      <p
        className={`${roboto.className} font-normal text-[14px] sm:text-[16px] md:text-[18px] text-center mt-5`}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        varius enim in eros elementum tristique. Duis cursus, mi quis viverra
        ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
      </p>

      {/* Achievements Section */}
      <div className="flex flex-col sm:flex-row sm:space-x-[80px] mt-10 justify-center items-center space-y-8 sm:space-y-0">
        {/* Achievement 1 */}
        <div className="flex flex-col items-center">
          <h3 className={`${roboto.className} text-[32px] sm:text-[40px] font-bold`}>+200</h3>
          <h4 className={`${roboto.className} text-[14px] sm:text-[16px] font-normal`}>Courses</h4>
        </div>

        {/* Achievement 2 */}
        <div className="flex flex-col items-center">
          <h3 className={`${roboto.className} text-[32px] sm:text-[40px] font-bold`}>50K</h3>
          <h4 className={`${roboto.className} text-[14px] sm:text-[16px] font-normal`}>Mentors</h4>
        </div>

        {/* Achievement 3 */}
        <div className="flex flex-col items-center">
          <h3 className={`${roboto.className} text-[32px] sm:text-[40px] font-bold`}>370K</h3>
          <h4 className={`${roboto.className} text-[14px] sm:text-[16px] font-normal`}>Students</h4>
        </div>

        {/* Achievement 4 */}
        <div className="flex flex-col items-center">
          <h3 className={`${roboto.className} text-[32px] sm:text-[40px] font-bold`}>100+</h3>
          <h4 className={`${roboto.className} text-[14px] sm:text-[16px] font-normal`}>
            Recognition
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Achievement;
