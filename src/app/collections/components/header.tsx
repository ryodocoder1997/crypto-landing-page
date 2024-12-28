import React from "react";

const Header = ({
  className,
  imageUrl,
  title,
}: {
  className?: string;
  imageUrl: string;
  title: string;
}) => {
  return (
    <div
      className={
        "relative h-[600px] flex items-center justify-center text-center text-white bg-cover bg-center " +
        className
      }
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-gradient-to-b from-gray-800/20 via-transparent to-gray-800/20">
        <h1 className="animate-fade-down animate-duration-[1000ms] text-7xl font-bold text-shadow-md uppercase flex flex-col items-center border-project-primary leading-relaxed">
          <p>{title}</p>
          <div className="h-[.5rem] w-[2em] bg-[#bcce34]" />
        </h1>
      </div>
    </div>
  );
};

export default Header;
