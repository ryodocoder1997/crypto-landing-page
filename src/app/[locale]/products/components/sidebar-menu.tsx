import { cn } from "@/public/lib/utils";
import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";

const SidebarMenu = ({ className }: { className?: string }) => {
  const t = useTranslations("products");
  const sidebarMenuItems = [
    {
      item: t("personalFianancialAdvisory.header"),
    },
    {
      item: t("portfolioManagement.header"),
    },
    {
      item: t("tradingSystemDevelopment.header"),
    },
    {
      item: t("realTradingAccountAnalysis.header"),
    },
    {
      item: t("financialInvestmentCourses.header"),
    },
  ];
  return (
    <div className={cn(className, "relative top-4")}>
      <div className="sticky top-[calc(var(--nav-height)+2rem)]">
        <p className="uppercase border-t-8 border-project-primary text-2xl font-bold w-fit pt-6 pb-3">
          {t("general.pageSidebarHeader")}
        </p>
        <div className="flex flex-col gap-3">
          {sidebarMenuItems.map((menuItem) => (
            <Link href={`#${menuItem.item}`} key={menuItem.item}>
              <p className="hover:text-project-primary hover:no-underline text-[16px] font-bold leading-snug">
                {menuItem.item}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SidebarMenu;
