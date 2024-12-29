import { images } from "@/public/images";
import NavbarIndicator from "@/shared/components/Navbar/NavbarIndicator";
import Link from "next/link";
import React from "react";

const classes = {
  link: "font-bold text-project-primary hover:text-black",
};

const Page = () => {
  return (
    <div className="h-full w-full">
      <NavbarIndicator />
      <div
        className={
          "relative h-full text-white bg-auto pl-[18em] bg-repeat-y w-full bg-right-top"
        }
        style={{ backgroundImage: `url(${images.events})` }}
      >
        <div className="max-w-2xl p-6 flex flex-col gap-[4em] bg-white/50 pt-[6em] items-center">
          {/* Corporate Catering in Sydney */}
          <div className="flex flex-col gap-8 text-center leading-7 px-4 items-center text-project-primary">
            <div className="h-[.5rem] w-[6em] bg-[#bcce34]" />
            <h1 className="text-5xl font-bold uppercase">
              Sydney Events Catering
            </h1>
            <p className="text-lg">
              Be the talk of the town with out-of-this-world Vietnamese catering
              at your next event. We&apos;re the connoisseurs of Yum.
            </p>
            <div className="h-[.5rem] w-[6em] bg-[#bcce34]" />
          </div>

          <div className="text-black text-lg leading-7 flex flex-col gap-4">
            <p>
              Weddings, parties, anything. We cater for events and happenings
              across Sydney with head-turning, finger-licking
              <Link
                href="/collections"
                target="_blank"
                className={classes.link}
              >
                {" "}
                Vietnamese dishes{" "}
              </Link>
              made with the freshest quality produce and local herbs. enjoyable.
            </p>
            <p>We are wickedly healthy and simply sensational.</p>
            <p>
              Our friendly team aims to make the whole process from ordering to
              delivery super simple, and
            </p>
          </div>
          <Link
            className="uppercase text-xl bg-project-primary text-white hover:bg-gray-700 font-bold p-6 w-1/2 text-center"
            href="/quote"
            target="_blank"
          >
            I&apos;d like a free quote
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
