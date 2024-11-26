

import React from "react";
import { Roboto } from "next/font/google";
import Image from "next/image";
import { FaLinkedin, FaTwitter, FaDribbble } from "react-icons/fa"; 

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const teamMembers = [
  {
    name: "James Nduku",
    position: "Marketing Coordinator",
    image: "/profile1.png",
    social: { linkedin: "#", twitter: "#", dribbble: "#" },
  },
  {
    name: "Sarah Lee",
    position: "Project Manager",
    image: "/profile2.png",
    social: { linkedin: "#", twitter: "#", dribbble: "#" },
  },
  {
    name: "Joseph Ngumbau",
    position: "Medical Assistant",
    image: "/profile3.png",
    social: { linkedin: "#", twitter: "#", dribbble: "#" },
  },
  {
    name: "Erick Kipkemboi",
    position: "Web Designer",
    image: "/profile4.png",
    social: null, // No icons for this member
  },
  {
    name: "Stephen Kerubo",
    position: "President of Sales",
    image: "/profile5.png",
    social: null, // No icons for this member
  },
  {
    name: "John Leboo",
    position: "Dog Trainer",
    image: "/profile6.png",
    social: null, // No icons for this member
  },
];

const Ourteam = () => {
  return (
    <div className="data-aos=zoom-out-left">
      {/* Header Section */}
      <div className="w-[1280px] mx-auto bg-[#FFFFFF] mt-[150px]">
        <h1
          className={`${roboto.className} text-[56px] font-bold flex text-center justify-center mt-9`}
        >
          Our Team
        </h1>
        <p
          className={`${roboto.className} font-normal text-[18px] leading-[27px] flex justify-center text-center`}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      {/* Team Members Section */}
      <div className="grid grid-cols-3 gap-12 mt-20 justify-items-center" data-aos="zoom-out">
        {teamMembers.map((member, index) => (
          <div key={index} className="text-center">
            <Image
              className="mx-auto w-[80px] h-[80px] object-cover"
              src={member.image}
              alt={member.name}
              width={80}
              height={80}
            />
            <h1
              className={`${roboto.className} font-semibold text-[20px] mt-4`}
            >
              {member.name}
            </h1>
            <p className={`${roboto.className} font-normal text-[18px] mt-2`}>
              {member.position}
            </p>
            {/* Icons Section */}
            {index < 3 && member.social && ( // Show icons only for the first 3 members
              <div className="flex justify-center gap-4 mt-12">
                {member.social.linkedin && (
                  <a
                    href={member.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin className="text-gray-600 text-[20px] hover:text-gray-400" />
                  </a>
                )}
                {member.social.twitter && (
                  <a
                    href={member.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaTwitter className="text-gray-600 text-[20px] hover:text-gray-400" />
                  </a>
                )}
                {member.social.dribbble && (
                  <a
                    href={member.social.dribbble}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaDribbble className="text-gray-600 text-[20px] hover:text-gray-400" />
                  </a>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ourteam;
