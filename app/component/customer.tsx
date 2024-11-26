import React from "react";
import { Roboto } from "next/font/google";
import Image from "next/image";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const Courses = () => {
  return (
    <div
      className="w-full max-w-[1280px] h-auto flex flex-col justify-center items-center bg-white mt-0 gap-6 px-6 lg:px-8"
      data-aos="fade-up-left"
    >
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

      {/* Grid Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 lg:mt-12">
        {/* Individual Cards */}
        {[
          { title: "Design & Development", icon: "/tool1.png" },
          { title: "Marketing", icon: "/volume-high.png" },
          { title: "Development", icon: "/group.png" },
          { title: "Communication", icon: "/microphone.png" },
          { title: "Digital Marketing", icon: "/link.png" },
          { title: "Self Development", icon: "/arrow.png" },
          { title: "Business", icon: "/briefcase.png" },
          { title: "Finance", icon: "/book1.png" },
          { title: "Consulting", icon: "/book.png" },
        ].map((course, index) => (
          <div
            key={index}
            className="bg-[#F7F7F7] w-full sm:w-[400px] lg:w-[300px] xl:w-[350px] h-auto flex items-center gap-4 px-12 py-6 shadow-sm rounded-md"
          >
            <Image
              className="flex-shrink-0"
              src={course.icon}
              alt={course.title}
              height={40}
              width={40}
            />
            <div>
              <h1
                className={`${roboto.className} text-[16px] md:text-[18px] font-medium`}
              >
                {course.title}
              </h1>
              <p
                className={`${roboto.className} text-[14px] md:text-[16px] font-normal`}
              >
                50+ Courses Available
              </p>
            </div>
          </div>
        ))}
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
