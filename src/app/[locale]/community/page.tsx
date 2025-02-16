import { images } from "@/public/images";
import NavbarIndicator from "@/shared/components/Navbar/NavbarIndicator";
import { useTranslations } from "next-intl";
import React from "react";

const classes = {
  content: "first-letter:uppercase first-letter:text-2xl",
};

const Page = () => {
  const t = useTranslations("community");
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
            <h1 className="text-5xl font-bold uppercase">
              {t("general.pageHeader")}
            </h1>
            <p className="text-lg">{t("introduction.item1")}</p>
            <div className="h-[.5rem] w-[6em] bg-[#f8c307]" />
          </div>

          <div className="text-black text-lg leading-7 flex flex-col gap-4 bg-white/50">
            <p className={classes.content}>{t("introduction.item2.title")}</p>
            <p className={classes.content}>
              {t("introduction.item2.subItem1")}
            </p>
            <p className={classes.content}>
              {t("introduction.item2.subItem2")}
            </p>
          </div>
          <div className="text-black text-lg leading-7 flex flex-col gap-4 bg-white/50">
            <p className={classes.content}>{t("introduction.item3")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
