import { images } from "@/public/images";
import NavbarIndicator from "@/shared/components/Navbar/NavbarIndicator";
import React from "react";
import { ContactForm } from "./components/contact-form";

const Page = () => {
  return (
    <div className="w-full h-full">
      <NavbarIndicator />
      <div
        className={
          "relative h-fit min-h-lvh text-white bg-cover bg-no-repeat flex justify-end px-[24em] "
        }
        style={{ backgroundImage: `url(${images.contact})` }}
      >
        <div className="max-w-2xl p-6  bg-gray-100/30 pt-[6em]">
          <div className="flex flex-col gap-[4em] bg-white/60 py-8">
            {/* Header */}
            <div className="flex flex-col gap-8 text-center leading-7 px-4 items-center text-project-primary">
              <div className="h-[.5rem] w-[6em] bg-[#f8c307]" />
              <h1 className="text-5xl font-bold uppercase">Contact us</h1>
              <p className="text-lg text-black">
                Get a FREE customised quote for your next corporate event or
                special occasion.
              </p>
              <div className="flex flex-col">
                <p className="text-2xl">
                  Call{" "}
                  <strong className="text-project-primary">1300 11 2426</strong>
                </p>
                <strong className="text-project-primary">
                  hello@chaocatering.com.au
                </strong>
                <strong className="text-project-primary">
                  chaocatering.com.au
                </strong>
              </div>
              <div className="flex flex-col text-black">
                <p className="text-2xl text-black">
                  {"CROWS NEST | "}
                  <strong className="text-project-primary">MAP</strong>
                </p>
                <p className="text-xl">47 Willoughby Road</p>
                <p className="text-xl">Crows Nest NSW 2065</p>
              </div>
              <div className="flex flex-col text-black">
                <p className="text-2xl text-black">
                  {"RANDWICK | "}
                  <strong className="text-project-primary">MAP</strong>
                </p>
                <p className="text-xl">35 Perouse Road</p>
                <p className="text-xl">Randwick NSW 2031</p>
              </div>
            </div>

            {/* Form */}
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
