import Image from "next/image";
import profile3 from "../../public/profile3.png";
import profile1 from "../../public/profile1.png";
import profile6 from "../../public/profile6.png";

const CustomerTestimonial = () => {
  const testimonials = [
    {
      image: profile3,
      name: "Joseph Ngumbau",
      role: "Software Developer",
      testimonial:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
    },
    {
      image: profile1,
      name: "Erick Kipkemboi",
      role: "Scrum Master",
      testimonial:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
    },
    {
      image: profile6,
      name: "Stephen Kerubo",
      role: "UI/UX Designer",
      testimonial:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
    },
  ];

  return (
    <section className="mx-auto px-4 py-16 bg-[#F7F7F7]" data-aos="zoom-out-up">
      <div className="mb-12 text-center">
        <h2 className="text-[36px] sm:text-[48px] font-bold text-[#000000] px-4 sm:px-8">
          Customer Testimonials
        </h2>
        <p className="text-[16px] sm:text-[20px] text-[#000000] mt-4 px-4 sm:px-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-8 lg:px-10">
        {testimonials.map((customer, index) => (
          <div
            key={index}
            className="border border-black p-6 rounded-lg bg-white shadow-md"
          >
            <div className="flex mb-4 text-[20px] sm:text-[24px] text-black py-2">
              ★★★★★
            </div>
            <p className="text-[14px] sm:text-[16px] text-[#000000] mb-4">
              {customer.testimonial}
            </p>
            <div className="flex items-center gap-4 py-4">
              <Image
                src={customer.image}
                alt={customer.name}
                width={80}
                height={80}
                className="rounded-full"
              />
              <div>
                <h3 className="text-[16px] sm:text-[18px] font-bold text-[#000000]">
                  {customer.name}
                </h3>
                <p className="text-[14px] sm:text-[16px] text-[#000000]">
                  {customer.role}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination and Navigation */}
      <div className="flex justify-between items-center mt-8 px-4 sm:px-8">
        {/* Left slider */}
        <Image
          src="/slider.png"
          alt="slider"
          width={50}
          height={50}
          className="cursor-pointer"
        />
        {/* Right Arrow */}
        <Image
            
          src="/sliderbutton.png"
          alt="arrow"
          width={50}
          height={50}
          className="cursor-pointer"
        />
      </div>
    </section>
  );
};

export default CustomerTestimonial;
