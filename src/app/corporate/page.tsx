import React from "react";
import { images } from "@/public/images/index";
import NavbarIndicator from "@/shared/components/Navbar/NavbarIndicator";

const Page = () => {
  return (
    <>
      <NavbarIndicator />
      <div
        className={
          "relative h-[50em] flex items-center justify-center text-center text-white bg-cover bg-center "
        }
        style={{ backgroundImage: `url(${images.corporate})` }}
      ></div>
    </>
  );
};

export default Page;
