import { images } from "@/public/images";
import Header from "@/shared/components/Header/header";
import Image from "next/image";
import React from "react";

const items = [
  {
    title: "Taste of Vietnam",
    description: {
      diet_type: ["Gluten FREE"],
      price: "$26.00",
      extra_info: "Minimum 3 ",
    },
  },
  {
    title: "Vegan Power",
    description: {
      diet_type: ["Gluten FREE", "Vegetarian"],
      price: "$32.00",
      extra_info: "Minimum 3 ",
    },
  },
  {
    title: "Light and Easy",
    description: {
      diet_type: ["Gluten FREE"],
      price: "$230.00",
      extra_info: "Minimum 3 ",
    },
  },
];

const Page = () => {
  return (
    <div className="w-full h-full">
      <Header
        imageUrl="https://chaocatering.com.au/cdn/shop/files/NewYear_Event_1400x.progressive.jpg?v=1690262273"
        title="Happy New Year"
        subTitle="Delight in the vibrant flavours of Vietnam this New Year"
        indicatorWidth="w-[2em]"
      />
      <main className="flex flex-col gap-[2em] py-[4em] mb-[4em] px-[14em] items-center">
        {/* Title */}
        <div className="flex flex-col m-auto items-center gap-[2em]">
          <div className="h-[.5rem] w-[4em] bg-project-primary" />
          <p className="uppercase text-project-primary text-4xl">
            Happy <strong className="uppercase">New Year</strong>
          </p>
          <p className="text-center max-w-4xl">
            Experience the joyous spirit of New Year as we bring the tastes of
            Vietnam to your celebrations, showcasing a diverse array of
            delicious dishes, ensuring a delightful culinary journey for you and
            your guests.
          </p>
        </div>

        {/* Card Section */}
        <div className="flex flex-row w-full max-w-5xl gap-4 justify-center border-b pb-[4em]">
          {items.map((item) => (
            <div className="w-full rounded h-full" key={`${item.title}`}>
              <div className="w-full h-auto relative overflow-hidden">
                <Image
                  src={images.product}
                  width={2000}
                  height={2000}
                  className="w-full h-auto relative z-0 scale-110 transition-all duration-300 hover:scale-100"
                  alt="Sunset in the mountains"
                />
                <div className="hover:bg-black/30 absolute z-4 left-0 top-0 w-full h-full items-center justify-center flex text-transparent cursor-pointer hover:text-white [&:hover>button]:bg-project-primary/70 transition-colors duration-300">
                  <button className="rounded-full w-[4rem] h-[4rem] font-bold text-lg text-ellipsis text-center leading-none items-center justify-center flex p-4">
                    View Me
                  </button>
                </div>
              </div>

              <div className="flex flex-col mt-4 px-4">
                <div className="flex flex-row justify-between gap-2">
                  <div className="font-bold text-[20px] mb-2 w-3/4 text-clip">
                    {item.title}
                    {item.description.diet_type.length > 0 &&
                      item.description.diet_type.map((type, index) => (
                        <span
                          key={item.title + type}
                          className="text-lg text-project-primary uppercase"
                        >
                          {(index > 0 ? " | " : " ") + type.substring(0, 2)}
                        </span>
                      ))}
                  </div>
                  <button className="border h-fit border-project-primary py-2 px-4 text-project-primary uppercase hover:bg-project-primary hover:text-white transition-all duration-500 text-nowrap">
                    + <span className="font-bold">Add</span>
                  </button>
                </div>
                <p className="text-gray-700 text-base font-bold">
                  {`${item.description.price} | `}
                  <span className="font-light">
                    {item.description.extra_info}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Page;
