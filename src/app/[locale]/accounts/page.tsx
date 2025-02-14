import { images } from "@/public/images";
import NavbarIndicator from "@/shared/components/Navbar/NavbarIndicator";
import React from "react";

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
          <div className="flex flex-col gap-8 text-center leading-7 px-4 items-center text-project-primary">
            <h1 className="text-5xl font-bold uppercase">Client Accounts</h1>
            <p className="text-lg">
              Welcome to VietAlgoTrade.com – a pioneering platform providing
              professional and efficient account management solutions for
              traders!
            </p>
          </div>

          <div className="text-black text-lg leading-7 flex flex-col gap-4">
            <p>
              We understand that the financial market is not only a playground
              full of opportunities but also comes with significant challenges
              and risks. That’s why the Account Management Service at
              VietAlgoTrade is designed to help you:
            </p>
            <ul className="pl-12 list-disc">
              <li>
                Maximize profits through trading strategies built on advanced
                algorithms.
              </li>
              <li>
                Minimize risks by applying scientific and effective capital
                management methods.
              </li>
              <li>
                Save time – you no longer need to monitor the market daily, as
                our team of experts and technology will do it for you.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
