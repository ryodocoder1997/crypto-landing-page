import { images } from "@/public/images";
import NavbarIndicator from "@/shared/components/Navbar/NavbarIndicator";
import { QrCode } from "lucide-react";
import React from "react";

const Page = () => {
  return (
    <div>
      <NavbarIndicator />
      <div className="px-[36em]">
        <div className="flex flex-col m-auto items-center gap-[2em] mt-[4em] mb-[2em] ">
          <div className="h-[.5rem] w-[4em] bg-project-primary" />
          <p className="uppercase text-project-primary text-5xl font-bold">
            How it works
          </p>
        </div>
        <div className="w-full flex flex-col gap-6 mb-[2em]">
          <strong className="text-2xl">Option 1: Chao Easy Delivery</strong>
          <ul className="list-disc pl-[2em] marker:text-project-primary text-xl">
            <li>
              View our menus on the website and complete your order online.
            </li>
            <li>The confirmation will be sent to you.</li>
          </ul>
          <strong className="text-2xl">
            Option 2: Chao Catering & Service Team
          </strong>
          <strong className="text-2xl">Option 3: Chao Private Chef</strong>
        </div>
        <div className="flex flex-row w-full h-full">
          <main className="w-full flex flex-col gap-2 mb-[12em] mt-[4em]">
            <ol className="relative text-gray-500 border-s-[3px] border-gray-200 dark:border-gray-700 dark:text-gray-400">
              <li className="mb-10 ms-[4em]">
                <span className="absolute flex items-center -left-8 justify-center w-16 h-16 bg-white rounded-full -start-4 ring ring-project-primary">
                  <QrCode className="text-project-primary" size="32" />
                </span>
                <h3 className="font-bold leading-tight text-3xl text-project-primary">
                  Get in Touch
                </h3>
                <p className="text-xl">
                  We receive your enquiry via phone or email.
                </p>
              </li>
            </ol>

            <ol className="relative text-gray-500 border-s-[3px] border-gray-200 dark:border-gray-700 dark:text-gray-400">
              <li className="mb-10 ms-[4em]">
                <span className="absolute flex items-center -left-8 justify-center w-16 h-16 bg-white rounded-full -start-4 ring-2 ring-project-primary">
                  <QrCode className="text-project-primary" size="32" />
                </span>
                <h3 className="font-bold leading-tight text-3xl text-project-primary">
                  Catering Confirmation
                </h3>
                <p className="text-xl">
                  Once we receive the details of your event date, time, location
                  and guest numbers, we will check our availability and confirm
                  your catering.
                </p>
              </li>
            </ol>

            <ol className="relative text-gray-500 border-s-[3px] border-gray-200 dark:border-gray-700 dark:text-gray-400">
              <li className="mb-10 ms-[4em]">
                <span className="absolute flex items-center -left-8 justify-center w-16 h-16 bg-white rounded-full -start-4 ring-2 ring-project-primary">
                  <QrCode className="text-project-primary" size="32" />
                </span>
                <h3 className="font-bold leading-tight text-3xl text-project-primary">
                  Catering Confirmation
                </h3>
                <p className="text-xl">
                  Once we receive the details of your event date, time, location
                  and guest numbers, we will check our availability and confirm
                  your catering.
                </p>
              </li>
            </ol>

            <ol className="relative text-gray-500 border-s-[3px] border-gray-200 dark:border-gray-700 dark:text-gray-400">
              <li className="mb-10 ms-[4em]">
                <span className="absolute flex items-center -left-8 justify-center w-16 h-16 bg-white rounded-full -start-4 ring-2 ring-project-primary">
                  <QrCode className="text-project-primary" size="32" />
                </span>
                <h3 className="font-bold leading-tight text-3xl text-project-primary">
                  Catering Confirmation
                </h3>
                <p className="text-xl">
                  Once we receive the details of your event date, time, location
                  and guest numbers, we will check our availability and confirm
                  your catering.
                </p>
              </li>
            </ol>

            <ol className="relative text-gray-500 border-s-[3px] border-gray-200 dark:border-gray-700 dark:text-gray-400">
              <li className="mb-10 ms-[4em]">
                <span className="absolute flex items-center -left-8 justify-center w-16 h-16 bg-white rounded-full -start-4 ring-2 ring-project-primary">
                  <QrCode className="text-project-primary" size="32" />
                </span>
                <h3 className="font-bold leading-tight text-3xl text-project-primary">
                  Catering Confirmation
                </h3>
                <p className="text-xl">
                  Once we receive the details of your event date, time, location
                  and guest numbers, we will check our availability and confirm
                  your catering.
                </p>
              </li>
            </ol>

            <ol className="relative text-gray-500 border-s-[3px] border-gray-200 dark:border-gray-700 dark:text-gray-400">
              <li className="mb-10 ms-[4em]">
                <span className="absolute flex items-center -left-8 justify-center w-16 h-16 bg-white rounded-full -start-4 ring-2 ring-project-primary">
                  <QrCode className="text-project-primary" size="32" />
                </span>
                <h3 className="font-bold leading-tight text-3xl text-project-primary">
                  Catering Confirmation
                </h3>
                <p className="text-xl">
                  Once we receive the details of your event date, time, location
                  and guest numbers, we will check our availability and confirm
                  your catering.
                </p>
              </li>
            </ol>

            <ol className="relative text-gray-500 border-s-[3px] border-gray-200 dark:border-gray-700 dark:text-gray-400">
              <li className="ms-[4em] mb-10">
                <span className="absolute flex items-center -left-8 justify-center w-16 h-16 bg-white rounded-full -start-4 ring-2 ring-project-primary">
                  <QrCode className="text-project-primary" size="32" />
                </span>
                <h3 className="font-bold leading-tight text-3xl text-project-primary">
                  Menu Selection
                </h3>
                <p className="text-xl absolute">
                  Once we have all your event information, we can send you a
                  tailor-made menu quotation based on your preferences and
                  budget including our service costs.
                </p>
              </li>
            </ol>
          </main>
          <div
            className={
              "relative text-white bg-contain bg-repeat-y w-1/2 bg-right-top"
            }
            style={{ backgroundImage: `url(${images.howItWork})` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Page;
