import { images } from "@/public/images";
import NavbarIndicator from "@/shared/components/Navbar/NavbarIndicator";
import React from "react";

const classes = {
  content: "first-letter:uppercase first-letter:text-2xl",
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
            <h1 className="text-5xl font-bold uppercase">Community</h1>
            <p className="text-lg">
              Welcome to the VietAlgoTrade Community – a space where finance
              enthusiasts and experts come together to share knowledge, analyze
              the markets, and learn effective trading strategies.
            </p>
            <div className="h-[.5rem] w-[6em] bg-[#f8c307]" />
          </div>

          <div className="text-black text-lg leading-7 flex flex-col gap-4 bg-white/50">
            <p className={classes.content}>
              In our Community section, we offer two main parts:
            </p>
            <p className={classes.content}>
              Market Forecasting: Here, we provide detailed analysis and
              forecasts on market trends in the near future. You’ll get regular
              updates on factors impacting asset values, helping you identify
              investment opportunities and make informed decisions.
            </p>
            <p className={classes.content}>
              Financial Trading Research: This section provides knowledge
              ranging from basic to advanced trading techniques. In addition to
              trading strategies, we share practical experiences from seasoned
              investors, along with lessons on probability and statistics –
              essential tools for optimizing your trading strategies.
            </p>
            <p className={classes.content}>
              We believe that a strong community will help you grow not only in
              knowledge but also in making smarter investment decisions. Join
              the VietAlgoTrade Community to receive support and learn from
              experienced traders, as we navigate the financial markets
              together.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
