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
        style={{ backgroundImage: `url(${images.aboutUs})` }}
      >
        <div className="max-w-2xl p-6 flex flex-col gap-[4em] bg-white/50 pt-[6em] items-center">
          {/* Corporate Catering in Sydney */}
          <div className="flex flex-col gap-8 text-center leading-7 px-4 items-center text-project-primary">
            <div className="h-[.5rem] w-[6em] bg-[#f8c307]" />
            <h1 className="text-5xl font-bold uppercase">About us</h1>
            <p className="text-lg">
              What do you get when you mix two dynamo sisters, crazy good
              Vietnamese cooking with a whole lot of love? The answer is Chao.
            </p>
            <div className="h-[.5rem] w-[6em] bg-[#f8c307]" />
          </div>

          <div className="text-black text-lg leading-7 flex flex-col gap-4">
            <p>
              Chao Catering is a sister act to be reckoned with. The creation of
              powerhouse duo, sisters Emma Nguyen of I Love Pho and Jessica
              Nguyen of La Sen Restaurant acclaim, Chao is on a mission to
              elevate all the exquisite flavours of{" "}
              <Link href="/products" target="_blank" className={classes.link}>
                {" "}
                authentic Vietnamese cuisine{" "}
              </Link>{" "}
              while throwing in a super healthy twist
            </p>
            <p>
              The result is a menu that blends all the mouth-watering favourites
              you&apos;d expect from Vietnam&apos;s vibrant street hawker
              stalls. We focus on using straight-from-market local herbs for
              added zing and health benefits.
            </p>
            <p>
              Not just about food, Chao is an act of love. It&apos;s about
              sharing the wonders of Vietnamese culture with others. It&apos;s
              the happiness that bubbles up when we see customers enjoy what we
              offer
            </p>
            <p>
              Together, we have a vision to grow and welcome other Vietnamese
              restaurants into the Chao community.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
