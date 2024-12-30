"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";
import { images } from "@/public/images";
import Autoplay from "embla-carousel-autoplay";

export default function Home() {
  return (
    <Carousel
      className="w-full"
      opts={{
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 4000,
          stopOnInteraction: false,
        }),
      ]}
    >
      <CarouselContent>
        <CarouselItem>
          <div
            className="relative flex justify-center items-center bg-[#666] h-[79.3125rem] bg-cover bg-no-repeat z-[1]"
            style={{ backgroundImage: `url(${images.home1})` }}
          >
            <div className="flex flex-col justify-center items-center animate-fade-down animate-duration-[1000ms]">
              <div className="text-center text-[5.625rem] uppercase font-extrabold leading-[4.375rem] text-white">
                HAPPY NEW YEAR
              </div>
              <div className="h-[.5rem] w-[4.375em] mt-[2.5rem] bg-[#bcce34] mb-[1.5625rem]" />
              <p className="text-[1.375rem] leading-[1.625rem] mt-[1rem] mb-[2.5rem] text-white">
                Perfect for celebrating the New Year in style
              </p>
              <Link
                href="/events/happy-new-year"
                className="flex items-center justify-center bg-project-primary text-white uppercase rounded-full w-[5.0625rem] h-[5rem] px-5 font-bold text-center hover:text-[#333] transition-colors duration-300"
              >
                Order Now
              </Link>
            </div>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div
            className="relative flex justify-center items-center bg-[#666] h-[79.3125rem] bg-cover bg-no-repeat z-[1]"
            style={{ backgroundImage: `url(${images.home1})` }}
          >
            <div className="flex flex-col justify-center items-center animate-fade-down animate-duration-[1000ms]">
              <div className="text-center text-[5.625rem] uppercase font-extrabold leading-[4.375rem] text-white">
                HAPPY NEW YEAR
              </div>
              <div className="h-[.5rem] w-[4.375em] mt-[2.5rem] bg-[#bcce34] mb-[1.5625rem]" />
              <p className="text-[1.375rem] leading-[1.625rem] mt-[1rem] mb-[2.5rem] text-white">
                Perfect for celebrating the New Year in style
              </p>
              <Link
                href="/events/happy-new-year"
                className="flex items-center justify-center bg-project-primary text-white uppercase rounded-full w-[5.0625rem] h-[5rem] px-5 font-bold text-center hover:text-[#333] transition-colors duration-300"
              >
                Order Now
              </Link>
            </div>
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious className="absolute top-1/2 left-0 [&::before]:left-0" />
      <CarouselNext className="absolute top-1/2 right-0 [&::before]:right-0" />
    </Carousel>
  );
}
