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
import Image from "next/image";

export default function Home() {
  return (
    <>
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
      <div
        className="w-full bg-right bg-contain bg-no-repeat pl-[1rem] pr-[1rem]"
        style={{ backgroundImage: `url(${images.home2})` }}
      >
        <div className="w-1/2 flex flex-col justify-center items-center pt-[3.75rem] pb-[3.75rem]">
          <div className="h-[.5rem] w-[4.375em] mt-[2.5rem] bg-[#bcce34] mb-[3.125rem]" />
          <h1 className="text-[2.75rem] leading-[3.75rem] font-normal mb-[0.625rem] text-project-primary uppercase">
            New Way of <strong>CATERING</strong>
          </h1>
          <h2 className="mb-[1rem] text-[1.875rem] font-normal leading-[2.25rem]">
            Vietnamese Cuisine @Home and @Work
          </h2>
          <div className="mt-[1.875rem] mb-[2.8125rem] pt-[1.25rem]">
            <p className="text-center">
              Chao Catering offers authentic and handmade food by a team of
              talented chefs. Our menus are fresh, nutritious and very
              well-priced. We source high quality ingredients from local
              produces and sustainable practices. Our food is cooked fresh,
              presented with flair to impress your guests. We go above and
              beyond your expectations.
            </p>
          </div>
          <Link
            href={"/collections"}
            className="pl-[3.4375rem] pr-[3.4375rem] text-[1.25rem] font-bold leading-[3.75rem] bg-project-primary text-white [&:hover]:text-[#333] transition-colors duration-[0.3s] uppercase"
          >
            Order Now
          </Link>
        </div>
      </div>

      {/* Chaos Collection */}
      <div className="flex flex-col justify-center items-center text-black bg-gray-50/80 gap-4 text-lg py-[8em]">
        <h1 className="uppercase text-project-primary text-3xl">
          Chao <strong>Selections</strong>
        </h1>
        <p className="font-bold">
          Ready for a wickedly healthy take on your favourites?
        </p>
        <p>
          At Chao Catering, we provide innovative menus with more special diet
          options. Our selections is healthy, gluten-free and vegan friendly.
        </p>
        <div className="flex flex-row justify-between max-w-6xl mt-8">
          <div className="flex flex-col justify-center items-center gap-4 text-center">
            <Image
              className="rounded-full"
              src={images.home3}
              width={280}
              height={280}
              alt="home1"
            />
            <div className="h-[.5rem] w-[4.375em] mt-[2.5rem] bg-[#bcce34] mb-[1.5625rem]" />
            <strong>Individual Packs</strong>
            <p className="w-2/3">
              We have all-your-favourites packed in a box, ready for Corporate
              Catering, everything from easy-to-eat finger food to delicious
              main meals.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-4 text-center">
            <Image
              className="rounded-full"
              src={images.home4}
              width={280}
              height={280}
              alt="home1"
            />
            <div className="h-[.5rem] w-[4.375em] mt-[2.5rem] bg-[#bcce34] mb-[1.5625rem]" />
            <strong>Gourmet Platters</strong>
            <p className="w-2/3">
              Impress your guests and satisfy your team members with our
              exciting ranges of entrée, canapé, hot food, rice, noodle and
              salad platters.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-4 text-center">
            <Image
              className="rounded-full"
              src={images.home5}
              width={280}
              height={280}
              alt="home1"
            />
            <div className="h-[.5rem] w-[4.375em] mt-[2.5rem] bg-[#bcce34] mb-[1.5625rem]" />
            <strong>Vegan Options</strong>
            <p className="w-2/3">
              Our popular Vietnamese meals are fresh and healthy. We have many
              delicious choices of vegan and gluten-free dishes for you to
              choose from.
            </p>
          </div>
        </div>
      </div>

      {/* Why Chao Catering */}
      <div
        className="w-full bg-right bg-contain bg-no-repeat pl-[1rem] pr-[1rem]"
        style={{ backgroundImage: `url(${images.home2})` }}
      >
        <div className="w-1/2 flex flex-col justify-center items-center pt-[3.75rem] pb-[3.75rem]">
          <div className="h-[.5rem] w-[4.375em] mt-[2.5rem] bg-[#bcce34] mb-[3.125rem]" />
          <h1 className="text-[2.75rem] leading-[3.75rem] font-normal mb-[0.625rem] text-project-primary uppercase">
            WHY CHAO <strong>CATERING</strong>
          </h1>
          <h2 className="mb-[1rem] text-xl font-normal leading-[2.25rem]">
            Enjoy Excellent Experience
          </h2>
          <p className="w-2/3 mt-[1.875rem] mb-[2.8125rem] pt-[1.25rem] text-lg  text-center">
            Chao Catering is all about culture, quality and sustainability. We
            strive for continuous improvement – innovating new catering menus,
            developing delicious ranges for special dietary requirements and
            finding new ways to lessen our impact on the environment. We are
            committed to consistently delivering excellence on our customer
            experience every time. Your satisfaction is what we ultimately
            serve.
          </p>
        </div>
      </div>

      {/* CHAO SERVICES */}
      <div className="flex flex-col justify-center items-center text-black bg-gray-50/80 gap-4 text-lg py-[8em]">
        <h1 className="uppercase text-project-primary text-3xl">
          Chao <strong>SERVICES</strong>
        </h1>
        <p className="font-bold">Fresh and Fun @Your Event</p>
        <p className="text-center w-2/3">
          We provide personalised and professional catering service – small to
          large corporate and private events in Sydney and the surrounds. Our
          restaurants are based in Crows Nest and Randwick. We specialise in
          exceptional Vietnamese cuisine for your events. Whether it’s a
          relaxing lunch with your family and friends or a corporate event,
          entertaining your clients, Chao Catering has something to offer and
          our services include:
        </p>
        <div className="flex flex-row justify-between max-w-6xl mt-8">
          <div className="flex flex-col justify-center items-center gap-4 text-center">
            <Image
              className="rounded-full"
              src={images.home6}
              width={280}
              height={280}
              alt="home1"
            />
            <div className="h-[.5rem] w-[4.375em] mt-[2.5rem] bg-[#bcce34] mb-[1.5625rem]" />
            <strong>Easy Delivery</strong>
            <p className="w-2/3">
              View our menus, complete your order online and your delicious food
              will be delivered to your location and set-up for you.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-4 text-center">
            <Image
              className="rounded-full"
              src={images.home7}
              width={280}
              height={280}
              alt="home1"
            />
            <div className="h-[.5rem] w-[4.375em] mt-[2.5rem] bg-[#bcce34] mb-[1.5625rem]" />
            <strong>Catering & Service Team</strong>
            <p className="w-2/3">
              We deliver, manage the set-up and provide a serving team to help
              ensure all guests’ catering needs are seamlessly met.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-4 text-center">
            <Image
              className="rounded-full"
              src={images.home5}
              width={280}
              height={280}
              alt="home1"
            />
            <div className="h-[.5rem] w-[4.375em] mt-[2.5rem] bg-[#bcce34] mb-[1.5625rem]" />
            <strong>Private Chef</strong>
            <p className="w-2/3">
              Our friendly chefs can do live cooking on site. It’s fresh, fun
              and engaging. We clean up after and you simply enjoy your event.
            </p>
          </div>
        </div>
      </div>

      {/* Healthy Meals & INDIVIDUAL LUNCH BOXS */}
      <div className="flex flex-col justify-center items-center gap-[2em] pb-[12em]">
        <div className="h-[.5rem] w-[4.375em] mt-[8em] bg-[#bcce34]" />
        <h1 className="uppercase text-project-primary text-3xl">
          <strong>Healthy </strong> meals
        </h1>
        <div className="flex flex-row justify-between gap-8 max-w-8xl">
          <div className="max-w-[26.25rem] cursor-pointer [&:hover>div]:flex [&:hover>div]:bg-black/60 relative">
            <Image
              width={2000}
              height={2000}
              className="object-cover h-[38.75rem] w-full"
              src={images.home9}
              alt="home3"
            />
            <div
              className="absolute animate-fade animate-duration-700 animate-ease-out
 hidden left-0 top-0 w-full h-full bg-white flex-col gap-4 justify-center items-center"
            >
              <p className="animate-fade-down animate-duration-300 animate-ease-in uppercase tracking-widest font-bold text-xl text-white w-1/2 text-center">
                Favourite Feast
              </p>
              <div className="animate-fade-down animate-duration-300 animate-ease-in h-[.5rem] w-[4.375em] mt-[2.5rem] bg-[#bcce34] mb-[1.5625rem]" />
              <button className="animate-fade-up animate-duration-300 animate-ease-in uppercase w-12 h-12 p-12 bg-project-primary rounded-full flex justify-center items-center font-bold text-white hover:text-black transition-colors duration-300">
                Quick View
              </button>
            </div>
          </div>

          <div className="max-w-[26.25rem] [&:hover>div]:flex [&:hover>div]:bg-black/60 relative cursor-pointer">
            <Image
              width={2000}
              height={2000}
              className="object-cover h-[38.75rem] w-full"
              src={images.home10}
              alt="home3"
            />
            <div
              className="absolute animate-fade animate-duration-700 animate-ease-out
 hidden left-0 top-0 w-full h-full bg-white flex-col gap-4 justify-center items-center"
            >
              <p className="animate-fade-down animate-duration-300 animate-ease-in uppercase tracking-widest font-bold text-xl text-white w-1/2 text-center">
                Super Flavours
              </p>
              <div className="animate-fade-down animate-duration-300 animate-ease-in h-[.5rem] w-[4.375em] mt-[2.5rem] bg-[#bcce34] mb-[1.5625rem]" />
              <button className="animate-fade-up animate-duration-300 animate-ease-in uppercase w-12 h-12 p-12 bg-project-primary rounded-full flex justify-center items-center font-bold text-white hover:text-black transition-colors duration-300">
                Quick View
              </button>
            </div>
          </div>

          <div className="max-w-[26.25rem] [&:hover>div]:flex [&:hover>div]:bg-black/60 relative cursor-pointer">
            <Image
              width={2000}
              height={2000}
              className="object-cover h-[38.75rem] w-full"
              src={images.home11}
              alt="home3"
            />
            <div
              className="absolute animate-fade animate-duration-700 animate-ease-out
 hidden left-0 top-0 w-full h-full bg-white flex-col gap-4 justify-center items-center"
            >
              <p className="animate-fade-down animate-duration-300 animate-ease-in uppercase tracking-widest font-bold text-xl text-white w-1/2 text-center">
                The Winner
              </p>
              <div className="animate-fade-down animate-duration-300 animate-ease-in h-[.5rem] w-[4.375em] mt-[2.5rem] bg-[#bcce34] mb-[1.5625rem]" />
              <button className="animate-fade-up animate-duration-300 animate-ease-in uppercase w-12 h-12 p-12 bg-project-primary rounded-full flex justify-center items-center font-bold text-white hover:text-black transition-colors duration-300">
                Quick View
              </button>
            </div>
          </div>
        </div>

        {/* INDIVIDUAL LUNCH BOXS */}
        <div className="h-[.5rem] w-[4.375em] mt-[8em] bg-[#bcce34]" />
        <h1 className="uppercase text-project-primary text-3xl">
          INDIVIDUAL <strong>LUNCH BOXS </strong>
        </h1>
        <div className="flex flex-row justify-between gap-8 max-w-8xl">
          <div className="max-w-[26.25rem] [&:hover>div]:flex [&:hover>div]:bg-black/60 relative cursor-pointer">
            <Image
              width={2000}
              height={2000}
              className="object-cover h-[38.75rem] w-full"
              src={images.home12}
              alt="home3"
            />
            <div
              className="absolute animate-fade animate-duration-700 animate-ease-out
 hidden left-0 top-0 w-full h-full bg-white flex-col gap-4 justify-center items-center"
            >
              <p className="animate-fade-down animate-duration-300 animate-ease-in uppercase tracking-widest font-bold text-xl text-white w-1/2 text-center">
                Shaking Fillets with Rice
              </p>
              <div className="animate-fade-down animate-duration-300 animate-ease-in h-[.5rem] w-[4.375em] mt-[2.5rem] bg-[#bcce34] mb-[1.5625rem]" />
              <button className="animate-fade-up animate-duration-300 animate-ease-in uppercase w-12 h-12 p-12 bg-project-primary rounded-full flex justify-center items-center font-bold text-white hover:text-black transition-colors duration-300">
                Quick View
              </button>
            </div>
          </div>

          <div className="max-w-[26.25rem] [&:hover>div]:flex [&:hover>div]:bg-black/60 relative cursor-pointer">
            <Image
              width={2000}
              height={2000}
              className="object-cover h-[38.75rem] w-full"
              src={images.home13}
              alt="home3"
            />
            <div
              className="absolute animate-fade animate-duration-700 animate-ease-out
 hidden left-0 top-0 w-full h-full bg-white flex-col gap-4 justify-center items-center"
            >
              <p className="animate-fade-down animate-duration-300 animate-ease-in uppercase tracking-widest font-bold text-xl text-white w-1/2 text-center">
                Fried Rice Combo
              </p>
              <div className="animate-fade-down animate-duration-300 animate-ease-in h-[.5rem] w-[4.375em] mt-[2.5rem] bg-[#bcce34] mb-[1.5625rem]" />
              <button className="animate-fade-up animate-duration-300 animate-ease-in uppercase w-12 h-12 p-12 bg-project-primary rounded-full flex justify-center items-center font-bold text-white hover:text-black transition-colors duration-300">
                Quick View
              </button>
            </div>
          </div>

          <div className="max-w-[26.25rem] [&:hover>div]:flex [&:hover>div]:bg-black/60 relative cursor-pointer">
            <Image
              width={2000}
              height={2000}
              className="object-cover h-[38.75rem] w-full"
              src={images.home14}
              alt="home3"
            />
            <div
              className="absolute animate-fade animate-duration-700 animate-ease-out
 hidden left-0 top-0 w-full h-full bg-white flex-col gap-4 justify-center items-center"
            >
              <p className="animate-fade-down animate-duration-300 animate-ease-in uppercase tracking-widest font-bold text-xl text-white w-1/2 text-center">
                Grilled Pork Chop with Rice
              </p>
              <div className="animate-fade-down animate-duration-300 animate-ease-in h-[.5rem] w-[4.375em] mt-[2.5rem] bg-[#bcce34] mb-[1.5625rem]" />
              <button className="animate-fade-up animate-duration-300 animate-ease-in uppercase w-12 h-12 p-12 bg-project-primary rounded-full flex justify-center items-center font-bold text-white hover:text-black transition-colors duration-300">
                Quick View
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
