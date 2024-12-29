import NavbarIndicator from "@/shared/components/Navbar/NavbarIndicator";
import React from "react";

const data = [
  {
    title: "Chao Easy Delivery",
    describeDetails: [
      "View our menus on the website, complete your order online and your food will be delivered to your location and set-up for you.",
      "All food will be gorgeously presented and ready for your guests to enjoy! They will be labelled according to special dietary requirements eg. meat, seafood, vegetarian, vegan, gluten-free and/or Halal, together with the complementary sauces and condiments.",
    ],
    describe: ["Delivery", "Set-up"],
  },
  {
    title: "Chao Catering & Service Team",
    describeDetails: [
      "View our menus on the website, complete your order online and your food will be delivered to your location and set-up for you.",
      "All food will be gorgeously presented and ready for your guests to enjoy! They will be labelled according to special dietary requirements eg. meat, seafood, vegetarian, vegan, gluten-free and/or Halal, together with the complementary sauces and condiments.",
    ],
    describe: ["Delivery", "Set-up"],
  },
  {
    title: "Chao Private Chef",
    describeDetails: [
      "View our menus on the website, complete your order online and your food will be delivered to your location and set-up for you.",
      "All food will be gorgeously presented and ready for your guests to enjoy! They will be labelled according to special dietary requirements eg. meat, seafood, vegetarian, vegan, gluten-free and/or Halal, together with the complementary sauces and condiments.",
    ],
    describe: ["Delivery", "Set-up"],
  },
];

const Page = () => {
  return (
    <div>
      <NavbarIndicator />
      <div className="flex flex-col m-auto items-center gap-[2em] my-[4em]">
        <div className="h-[.5rem] w-[4em] bg-project-primary" />
        <p className="uppercase text-project-primary text-5xl font-bold">
          Our Services
        </p>
        <p className="text-start text-2xl max-w-4xl">
          To make catering at your event a breeze, choose from one of our three
          bespoke catering options:
        </p>
      </div>
      <main className="flex flex-col gap-[4em] items-center justify-center mb-[8rem]">
        {data.map((item, index) => (
          <div
            key={item.title + "-" + index}
            className="flex flex-row gap-[2em] max-w-4xl"
          >
            <div className="text-project-primary font-bold text-2xl h-fit border-r-2 border-project-primary pr-4">
              {index + 1}
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="text-project-primary text-2xl font-bold">
                {item.title}
              </h1>
              <div className="flex flex-row gap-4">
                {item.describe.map((describeItem, index) => (
                  <p
                    key={item.title + "-describe-item-" + index}
                    className="text-project-secondary"
                  >
                    {describeItem}
                  </p>
                ))}
              </div>
              {item.describeDetails.map((describeDetailsItem, index) => (
                <p key={item.title + "-describe-details-item-" + index}>
                  {describeDetailsItem}
                </p>
              ))}
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default Page;
