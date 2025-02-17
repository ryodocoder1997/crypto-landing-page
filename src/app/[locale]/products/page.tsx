"use server";

import React from "react";
import Header from "../shared/components/Header/header";
import SidebarMenu from "./components/sidebar-menu";
import Product from "./components/product";
import { useTranslations } from "next-intl";

const Page = () => {
  const t = useTranslations("products");
  return (
    <div className="w-full h-full">
      <Header
        className="w-full"
        indicatorWidth="w-[2em]"
        imageUrl="https://chaocatering.com.au/cdn/shop/files/Web3_1400x.progressive.jpg?v=1614790576"
        title={t("general.pageHeader")}
      />
      <main className="w-full flex px-[12em] gap-8">
        <SidebarMenu className="w-1/4 border-r-2 pr-8" />
        <Product className="w-full" />
      </main>
    </div>
  );
};

export default Page;
