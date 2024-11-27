import React from "react";
import Image from "next/image";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const courses = [
  {
    id: 1,
    title: "UX/UI Design 201",
    category: "Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    price: "$400",
    image: "/image1.png",
  },
  {
    id: 2,
    title: "Introduction to Python",
    category: "programming",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    price: "$400",
    image: "/image2.png",
  },
  {
    id: 3,
    title: "Graphic Design Basics",
    category: "Design",
    description:
      "Learn the fundamentals of graphic design from industry experts.",
    price: "$400",
    image: "/image3.png",
  },
  {
    id: 4,
    title: "Art Specialization",
    category: "Art",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    price: "$400",
    image: "/image4.png",
  },
  {
    id: 5,
    title: "Rule of Law",
    category: "Law",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    price: "$400",
    image: "/image5.png",
  },
  {
    id: 6,
    title: "Introduction to webflow",
    category: "Tech",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    price: "$250",
    image: "/image6.png",
  },
];

const Mycourses = () => {
  return (
    <div className="max-w-[1280px] mx-auto bg-[#FFFFFF]" data-aos="zoom-out-up">
      {/* Header Section */}
      <h1
        className={`${roboto.className} text-[32px] sm:text-[56px] font-bold text-center mt-9`}
      >
        Courses
      </h1>
      <p
        className={`${roboto.className} font-normal text-[14px] sm:text-[18px] leading-[27px] text-center`}
      >
        Your Ultimate Guide to Learning
      </p>

      {/* Navigation Section */}
      <div className="flex justify-center gap-6 sm:gap-9 text-center mt-16">
        <h1 className="text-[16px] sm:text-[18px]">Popular</h1>
        <h1 className="text-[16px] sm:text-[18px]">Recommended</h1>
        <h1 className="text-[16px] sm:text-[18px]">Best Price</h1>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center items-center mt-14" data-aos="fade-up-left">
        {courses.map((course) => (
          <div key={course.id} className="w-full sm:w-[416px] h-auto bg-[#F7F7F7] rounded-lg overflow-hidden shadow-md">
            {/* Image */}
            <div className="w-full h-[200px] sm:h-[300px] relative overflow-hidden">
              <Image
                src={course.image}
                alt={course.title}
                layout="fill"
                objectFit="cover" // Ensure the image scales proportionally
              />
            </div>
            {/* Category and Star */}
            <div className="flex justify-between items-center mt-4 px-4">
              <h1 className="text-sm sm:text-[16px]">{course.category}</h1>
              <Image
                className="w-[48px] h-[24px]"
                src="/Star.png"
                alt="star"
                width={48}
                height={24}
              />
            </div>
            {/* Course Title */}
            <h1
              className={`${roboto.className} font-bold text-[18px] sm:text-[24px] px-4 mt-2`}
            >
              {course.title}
            </h1>
            {/* Description */}
            <p
              className={`${roboto.className} font-normal text-[14px] sm:text-[16px] px-4 mt-4`}
            >
              {course.description}
            </p>
            {/* Button and Price */}
            <div className="flex items-center justify-start mt-6 px-4 gap-8">
              <button
                className={`${roboto.className} font-normal text-[14px] sm:text-[16px] border border-black px-4 py-3 hover:bg-slate-100 rounded-md`}
              >
                Enroll Now
              </button>
              <h1 className={`${roboto.className} font-medium text-[14px] sm:text-[16px]`}>
                {course.price}
              </h1>
            </div>
          </div>
        ))}
      </div>

      {/* View All Courses Button */}
      <div className="flex justify-center mt-10">
        <div className="w-[155px] h-[48px] border border-black px-4 py-3 hover:bg-slate-100 rounded-md">
          <button className="flex justify-center items-center text-center text-[14px] sm:text-[16px]">
            View All Courses
          </button>
        </div>
      </div>
    </div>
  );
};

export default Mycourses;
