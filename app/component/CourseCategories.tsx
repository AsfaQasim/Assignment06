import Image from "next/image";

type Props = {
  imageName: string;
  CategoryName: string;
  CoursesInCategory: string;
};

export default function CategoryCard({
  imageName,
  CategoryName,
  CoursesInCategory,
}: Props) {
  return (
    <div className="mx-3 md:mx-0 w-[350px] md:w-[380px] h-[110px] bg-[#f7f7f7] flex justify-center items-center gap-6">
      {/* Image Wrapper */}
      <div className="w-[80px] h-[80px] rounded-md bg-white flex justify-center items-center">
        <Image
          src={`/${imageName}`}
          alt={CategoryName}
          height={50}
          width={50}
          className="object-contain"
        />
      </div>

      {/* Category Details */}
      <div>
        <h2 className="font-roboto font-semibold text-lg">{CategoryName}</h2>
        <p className="font-roboto text-sm">{CoursesInCategory}</p>
      </div>
    </div>
  );
}
