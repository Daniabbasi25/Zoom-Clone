import Image from "next/image";
import React, { FC } from "react";

interface Props {
  title: string;
  image: string;
  description: string;
  handleClick: () => void;
  className: string;
}
const HomeCard: FC<Props> = ({
  className,
  description,
  handleClick,
  image,
  title,
}) => {
  return (
    <div
      className={`${className} px-5 py-6 flex flex-col justify-between w-full xl:mx-w-[270px] 
  min-h-[260px] rounded-[14px] cursor-pointer
  `}
      onClick={handleClick}
    >
      <div className="flex-center glassmorphism size-12 rounded-[10px]">
        <Image src={image} alt="Meeting" width={27} height={27} />
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-base font-normal">{description}</p>
      </div>
    </div>
  );
};

export default HomeCard;
