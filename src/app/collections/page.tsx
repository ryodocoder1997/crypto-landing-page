"use server";

import React from "react";
import Header from "./components/header";
import SidebarMenu from "./components/sidebar-menu";
import Product from "./components/product";

const page = async () => {
  return (
    <div className="w-full h-full">
      <Header
        className="w-full"
        imageUrl="https://chaocatering.com.au/cdn/shop/files/Web3_1400x.progressive.jpg?v=1614790576"
        title="our menu"
      />
      <main className="w-full flex px-[12em] pt-[6em] gap-8">
        <SidebarMenu className="w-1/4 border-r-2 pr-8" />
        <Product className="w-full" />
      </main>
    </div>
  );
};

export default page;
