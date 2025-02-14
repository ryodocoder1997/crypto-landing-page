import { cn } from "@/public/lib/utils";
import React from "react";

const Header = ({
  className,
  imageUrl,
  title,
  subTitle,
  indicatorWidth,
}: {
  className?: string;
  imageUrl: string;
  title: string;
  subTitle?: string;
  indicatorWidth: string;
}) => {
  return (
    <div
      className={
        "relative h-[50em] flex items-center justify-center text-center text-white bg-cover bg-center " +
        className
      }
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-gradient-to-b from-black/60 via-transparent to-gray-800/20">
        <h1 className="animate-fade-down animate-duration-[1000ms] text-7xl font-bold text-shadow-md uppercase flex flex-col items-center border-project-primary leading-relaxed">
          <p>{title}</p>
          <div className={cn(indicatorWidth, "h-[.5rem] bg-[#f8c307]")} />
          {subTitle && (
            <div className="font-normal text-2xl normal-case mt-[2em]">
              {subTitle}
            </div>
          )}
        </h1>
      </div>
    </div>
  );
};

export default Header;
