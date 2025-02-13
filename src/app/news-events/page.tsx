import React from "react";
import { images } from "@/public/images";
import NavbarIndicator from "@/shared/components/Navbar/NavbarIndicator";

const Page = () => {
  return (
    <div className="h-full w-full">
      <NavbarIndicator />
      <div
        className={
          "relative h-full text-white bg-auto pl-[18em] bg-repeat-y w-full bg-right-top"
        }
        style={{ backgroundImage: `url(${images.aboutUs})` }}
      >
        <div className="max-w-2xl p-6 flex flex-col gap-[4em] bg-white/50 pt-[6em] items-center">
          {/* Corporate Catering in Sydney */}
          <div className="flex flex-col gap-8 text-center leading-7 px-4 items-center text-project-primary">
            <div className="h-[.5rem] w-[6em] bg-[#f8c307]" />
            <h1 className="text-5xl font-bold uppercase">Event & News</h1>
            <p className="text-lg">
              Welcome to the News and Events section of VietAlgoTrade – your
              go-to source for the latest and most important updates from the
              financial markets, as well as industry events and webinars that
              keep you informed and ahead of the curve.
            </p>
            <div className="h-[.5rem] w-[6em] bg-[#f8c307]" />
          </div>

          <div className="text-black text-lg leading-7 flex flex-col gap-4">
            <p>In our News and Events section, we provide you with:</p>
            <p className="first-letter:uppercase first-letter:text-2xl first-letter:font-semibold">
              In-depth market analyses, helping you understand the factors
              influencing investment decisions. Updates on emerging trends in
              trading technologies, algorithms, and artificial intelligence (AI)
              – tools that optimize your investment strategies.
            </p>
            <p className="first-letter:uppercase first-letter:text-2xl first-letter:font-semibold">
              Information on upcoming events: conferences, webinars, training
              sessions, and networking opportunities for investors. We are
              committed to providing reliable articles, curated from trusted
              sources and offering deep insights, ensuring you stay proactive
              and confident in your investment choices.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
