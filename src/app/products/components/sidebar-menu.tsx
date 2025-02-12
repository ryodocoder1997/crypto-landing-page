import { cn } from "@/public/lib/utils";
import Link from "next/link";
import React from "react";

const sidebarMenuItems = [
  {
    item: "Personal Financial Adisory",
  },
  {
    item: "Portfolio Management",
  },
  {
    item: "Trading System Development",
  },
  {
    item: "Real Trading Account Analysis",
  },
  {
    item: "Financial Investment Courses",
  },
];

const SidebarMenu = ({ className }: { className?: string }) => {
  return (
    <div className={cn(className, "relative top-4")}>
      <div className="sticky top-[calc(var(--nav-height)+2rem)]">
        <p className="uppercase border-t-8 border-project-primary text-2xl font-bold w-fit pt-6 pb-3">
          Products
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
