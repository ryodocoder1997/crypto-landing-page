import { images } from "@/public/images";
import NavbarIndicator from "@/shared/components/Navbar/NavbarIndicator";
import { useTranslations } from "next-intl";
import React from "react";

const Page = () => {
  const t = useTranslations("clientAccounts");
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
            <h1 className="text-5xl font-bold uppercase">
              {t("general.pageHeader")}
            </h1>
            <p className="text-lg">{t("introduction.item1")}</p>
          </div>

          <div className="text-black text-lg leading-7 flex flex-col gap-4">
            <p>{t("introduction.item2.title")}</p>
            <ul className="pl-12 list-disc">
              <li>{t("introduction.item2.subItem1")}</li>
              <li>{t("introduction.item2.subItem2")}</li>
              <li>{t("introduction.item2.subItem3")}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
