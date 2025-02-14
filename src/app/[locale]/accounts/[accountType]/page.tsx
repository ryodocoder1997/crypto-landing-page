import { images } from "@/public/images";
import NavbarIndicator from "@/shared/components/Navbar/NavbarIndicator";
import Image from "next/image";
import { redirect } from "next/navigation";
import React from "react";

const items = [
  {
    key: "beginner",
    type: "Tài khoản: 0 - 1,000 USD",
    account: {
      name: "Nguyen Van A",
      capital: 500,
      openDate: new Date().toLocaleDateString("en-GB"),
      tradingMarket: "EUR/USD (Euro/US Dollar)",
      broker: "Exness",
      expectedMonthlyProfit: {
        min: 2,
        max: 5,
      },
      maximumDrawdown: {
        min: 5,
        max: 10,
      },
    },
    src: images.home9,
  },
  {
    key: "standard",
    type: "Tài khoản: 1,000 - 5,000 USD",
    account: {
      name: "Nguyen Van B",
      capital: 3_000,
      openDate: new Date().toLocaleDateString("en-GB"),
      tradingMarket: "XAU/USD (Gold/US Dollar)",
      broker: "IC Markets",
      expectedMonthlyProfit: {
        min: 5,
        max: 15,
      },
      maximumDrawdown: {
        min: 10,
        max: 20,
      },
    },
    src: images.home10,
  },
  {
    key: "premium",
    type: "Tài khoản: >= 5000 USD",
    account: {
      name: "Nguyen Van C",
      capital: 10_000,
      openDate: new Date().toLocaleDateString("en-GB"),
      tradingMarket: "NASDAQ 100",
      broker: "Interactive Brokers",
      expectedMonthlyProfit: {
        min: 10,
        max: 30,
      },
      maximumDrawdown: {
        min: 20,
        max: 40,
      },
    },
    src: images.home11,
  },
];

const Page = async ({ params }) => {
  const { accountType } = await params;
  const data = items.find((item) => item.key === accountType);

  if (!data) {
    redirect("/404");
  }

  return (
    <div className="w-screen">
      <NavbarIndicator />
      <div className="w-2/3 flex justify-between mx-auto my-8 gap-4">
        <div className="w-1/2">
          <Image
            src={data.src}
            alt="account-type-image"
            width={1000}
            height={1000}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-1/2">
          <p className="text-project uppercase text-base font-bold">
            {data.type}
          </p>
          <h1 className="text-3xl font-semibold border-b-2 pb-4">{`${
            data.account.name
          } (${data.account.capital.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
            minimumFractionDigits: 0,
          })} USD)`}</h1>
          <div className="flex items-center mt-4">
            <p className=" font-semibold pr-2 text-2xl">
              {data.account.openDate}
            </p>
            <p className="border-l-black border-l pl-2 h-fit text-base font-light">
              {data.account.tradingMarket}
            </p>
          </div>
          <ul className="mt-4 list-disc list-inside font-light">
            <li>Broker: {data.account.broker}</li>
            <li>
              Expected Monthly Profit:{" "}
              {`${data.account.expectedMonthlyProfit.min}% - ${data.account.expectedMonthlyProfit.max}%`}
            </li>
            <li>
              Maximum Drawdown:{" "}
              {`${data.account.maximumDrawdown.min}% - ${data.account.maximumDrawdown.max}%`}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Page;
