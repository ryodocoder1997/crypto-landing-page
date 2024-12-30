import NavbarIndicator from "@/shared/components/Navbar/NavbarIndicator";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/accordion";

const Page = () => {
  return (
    <div>
      <NavbarIndicator />
      <div className="flex flex-col m-auto items-center gap-[2em] mt-[4em] mb-[2em] ">
        <div className="h-[.5rem] w-[4em] bg-project-primary" />
        <p className="uppercase text-project-primary text-5xl font-bold">
          FAQs
        </p>
      </div>
      <Accordion
        type="single"
        collapsible
        className="max-w-4xl m-auto flex flex-col gap-6 mb-[8em]"
      >
        <AccordionItem value="item-1" className="border rounded-lg shadow-md">
          <AccordionTrigger className="px-[2em] hover:text-project-primary">
            <strong className="text-xl">
              What kind of special dietary requirements do you cater for?
            </strong>
          </AccordionTrigger>
          <AccordionContent className="border-t pt-[1em] px-[1.5em] text-xl">
            <p>
              Chao Catering can accommodate most special dietary requirements if
              we are given advance notice including Meat, Seafood, Vegetarian,
              Vegan, Gluten-free, Halal etc.{" "}
            </p>{" "}
            <br />
            <p>
              All dietary requirements are to be provided in writing prior to
              your catering event so that we can determine if we can accommodate
              your request.{" "}
            </p>{" "}
            <br />
            <p>
              All dietary-specific items will be plated separately and labelled
              accordingly. If you have any questions, please speak to our
              Catering Manager about your specific dietary needs.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2" className="border rounded-lg shadow-md">
          <AccordionTrigger className="px-[2em] hover:text-project-primary">
            <strong className="text-xl">
              Do you have Private Chef and Service Team we can hire for our
              event?
            </strong>
          </AccordionTrigger>
          <AccordionContent className="border-t pt-[1em] px-[1.5em] text-xl">
            <p>
              If you would like your function to be serviced, we have highly
              trained and experienced chefs and wait staffs available. Please
              see Our Services and let us know your preferred option for your
              event.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3" className="border rounded-lg shadow-md">
          <AccordionTrigger className="px-[2em] hover:text-project-primary">
            <strong className="text-xl">
              Do you have Private Chef and Service Team we can hire for our
              event?
            </strong>
          </AccordionTrigger>
          <AccordionContent className="border-t pt-[1em] px-[1.5em] text-xl">
            <p>
              If you would like your function to be serviced, we have highly
              trained and experienced chefs and wait staffs available. Please
              see Our Services and let us know your preferred option for your
              event.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4" className="border rounded-lg shadow-md">
          <AccordionTrigger className="px-[2em] hover:text-project-primary">
            <strong className="text-xl">
              Do you have Private Chef and Service Team we can hire for our
              event?
            </strong>
          </AccordionTrigger>
          <AccordionContent className="border-t pt-[1em] px-[1.5em] text-xl">
            <p>
              If you would like your function to be serviced, we have highly
              trained and experienced chefs and wait staffs available. Please
              see Our Services and let us know your preferred option for your
              event.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5" className="border rounded-lg shadow-md">
          <AccordionTrigger className="px-[2em] hover:text-project-primary">
            <strong className="text-xl">
              Do you have Private Chef and Service Team we can hire for our
              event?
            </strong>
          </AccordionTrigger>
          <AccordionContent className="border-t pt-[1em] px-[1.5em] text-xl">
            <p>
              If you would like your function to be serviced, we have highly
              trained and experienced chefs and wait staffs available. Please
              see Our Services and let us know your preferred option for your
              event.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-6" className="border rounded-lg shadow-md">
          <AccordionTrigger className="px-[2em] hover:text-project-primary">
            <strong className="text-xl">
              Do you have Private Chef and Service Team we can hire for our
              event?
            </strong>
          </AccordionTrigger>
          <AccordionContent className="border-t pt-[1em] px-[1.5em] text-xl">
            <p>
              If you would like your function to be serviced, we have highly
              trained and experienced chefs and wait staffs available. Please
              see Our Services and let us know your preferred option for your
              event.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-7" className="border rounded-lg shadow-md">
          <AccordionTrigger className="px-[2em] hover:text-project-primary">
            <strong className="text-xl">
              Do you have Private Chef and Service Team we can hire for our
              event?
            </strong>
          </AccordionTrigger>
          <AccordionContent className="border-t pt-[1em] px-[1.5em] text-xl">
            <p>
              If you would like your function to be serviced, we have highly
              trained and experienced chefs and wait staffs available. Please
              see Our Services and let us know your preferred option for your
              event.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-8" className="border rounded-lg shadow-md">
          <AccordionTrigger className="px-[2em] hover:text-project-primary">
            <strong className="text-xl">
              Do you have Private Chef and Service Team we can hire for our
              event?
            </strong>
          </AccordionTrigger>
          <AccordionContent className="border-t pt-[1em] px-[1.5em] text-xl">
            <p>
              If you would like your function to be serviced, we have highly
              trained and experienced chefs and wait staffs available. Please
              see Our Services and let us know your preferred option for your
              event.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-9" className="border rounded-lg shadow-md">
          <AccordionTrigger className="px-[2em] hover:text-project-primary">
            <strong className="text-xl">
              Do you have Private Chef and Service Team we can hire for our
              event?
            </strong>
          </AccordionTrigger>
          <AccordionContent className="border-t pt-[1em] px-[1.5em] text-xl">
            <p>
              If you would like your function to be serviced, we have highly
              trained and experienced chefs and wait staffs available. Please
              see Our Services and let us know your preferred option for your
              event.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Page;
