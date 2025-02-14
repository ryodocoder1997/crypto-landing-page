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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("rootLayout");

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
              className="relative flex justify-center items-center bg-[#666] h-[40rem] bg-cover bg-no-repeat z-[1]"
              style={{ backgroundImage: `url(${images.home1})` }}
            >
              <div className="flex flex-col justify-center items-center animate-fade-down animate-duration-[1000ms]">
                <div className="text-center text-[5.625rem] uppercase font-extrabold leading-[4.375rem] text-white">
                  {t("title-carousel")}
                </div>
                <div className="h-[.5rem] w-[4.375em] mt-[2.5rem] bg-[#f8c307] mb-[1.5625rem]" />
                <p className="text-[1.375rem] leading-[1.625rem] mt-[1rem] mb-[2.5rem] text-white">
                  {t("description-carousel")}
                </p>
                <Link
                  href="/events/happy-new-year"
                  className="flex items-center justify-center bg-project-primary text-white uppercase rounded-full w-[5.0625rem] h-[5rem] px-5 font-bold text-center hover:text-[#333] transition-colors duration-300"
                >
                  {t("cta-carousel")}
                </Link>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div
              className="relative flex justify-center items-center bg-[#666] h-[40rem] bg-cover bg-no-repeat z-[1]"
              style={{ backgroundImage: `url(${images.home1})` }}
            >
              <div className="flex flex-col justify-center items-center animate-fade-down animate-duration-[1000ms]">
                <div className="text-center text-[5.625rem] uppercase font-extrabold leading-[4.375rem] text-white">
                  {t("title-carousel-2")}
                </div>
                <div className="h-[.5rem] w-[4.375em] mt-[2.5rem] bg-[#f8c307] mb-[1.5625rem]" />
                <p className="text-[1.375rem] leading-[1.625rem] mt-[1rem] mb-[2.5rem] text-white">
                  {t("description-carousel-2")}
                </p>
                <Link
                  href="/events/happy-new-year"
                  className="flex items-center justify-center bg-project-primary text-white uppercase rounded-full w-[5.0625rem] h-[5rem] px-5 font-bold text-center hover:text-[#333] transition-colors duration-300"
                >
                  {t("cta-carousel-2")}
                </Link>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div
              className="relative flex justify-center items-center bg-[#666] h-[40rem] bg-cover bg-no-repeat z-[1]"
              style={{ backgroundImage: `url(${images.home1})` }}
            >
              <div className="flex flex-col justify-center items-center animate-fade-down animate-duration-[1000ms]">
                <div className="text-center text-[5.625rem] uppercase font-extrabold leading-[4.375rem] text-white">
                  {t("title-carousel-3")}
                </div>
                <div className="h-[.5rem] w-[4.375em] mt-[2.5rem] bg-[#f8c307] mb-[1.5625rem]" />
                <p className="text-[1.375rem] leading-[1.625rem] mt-[1rem] mb-[2.5rem] text-white">
                  {t("description-carousel-3")}
                </p>
                <Link
                  href="/events/happy-new-year"
                  className="flex items-center justify-center bg-project-primary text-white uppercase rounded-full w-[5.0625rem] h-[5rem] px-5 font-bold text-center hover:text-[#333] transition-colors duration-300"
                >
                  {t("cta-carousel-3")}
                </Link>
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="absolute top-1/2 left-0 [&::before]:left-0" />
        <CarouselNext className="absolute top-1/2 right-0 [&::before]:right-0" />
      </Carousel>
      <div className="w-full flex flex-row gap-3">
        <div className="w-2/3">
          {/* A New Way of TRADING */}
          <div
            className="w-full bg-right bg-contain bg-no-repeat pl-[1rem] pr-[1rem]"
            style={{ backgroundImage: `url(${images.home2})` }}
          >
            <div className="w-1/2 bg-white/50 flex flex-col justify-center items-center pt-[3.75rem] pb-[3.75rem]">
              <div className="h-[.5rem] w-[4.375em] mt-[2.5rem] bg-[#f8c307] mb-[3.125rem]" />
              <h1 className="text-[2.75rem] leading-[3.75rem] font-normal mb-[0.625rem] text-project-primary uppercase">
                {t.rich(`new-way-of-trading.title`, {
                  strong: (chunks) => <strong>{chunks}</strong>,
                })}
              </h1>
              <div className="mt-[1.875rem] mb-[2.8125rem] pt-[1.25rem]">
                <p className="text-center">
                  {t("new-way-of-trading.description")}
                </p>
              </div>
              <Link
                href={"/products"}
                className="pl-[3.4375rem] pr-[3.4375rem] text-[1.25rem] font-bold leading-[3.75rem] bg-project-primary text-white [&:hover]:text-[#333] transition-colors duration-[0.3s] uppercase"
              >
                {t("new-way-of-trading.cta")}
              </Link>
            </div>
          </div>

          {/* Why VietAlgoTrade */}
          <div
            className="w-full bg-left bg-contain bg-no-repeat pl-[1rem] pr-[1rem] flex justify-end"
            style={{ backgroundImage: `url(${images.home2})` }}
          >
            <div className="w-1/2 flex flex-col bg-white/50 justify-center items-center pt-[3.75rem] pb-[3.75rem]">
              <div className="h-[.5rem] w-[4.375em] mt-[2.5rem] bg-[#f8c307] mb-[3.125rem]" />
              <h1 className="text-[2.75rem] leading-[3.75rem] font-normal mb-[0.625rem] text-project-primary uppercase">
                WHY <strong>VIETALGOTRADE</strong>
              </h1>
              <p className="w-2/3 mt-[1.875rem] mb-[2.8125rem] pt-[1.25rem] text-lg  text-center">
                {t("why-viet-algo-trade.description")}
              </p>
            </div>
          </div>

          {/* VietAlgoTrade Product */}
          <div className="flex flex-col justify-center items-center text-black bg-gray-50/80 gap-4 text-lg py-[8em]">
            <h1 className="uppercase text-project-primary text-3xl">
              VietAlgoTrade <strong>PRODUCTS</strong>
            </h1>
            <p className="font-bold">Trust and Responsibility</p>
            <div className="flex flex-row justify-around flex-wrap max-w-6xl mt-8">
              {/* personal-financial-consulting */}
              <div className="flex flex-col self-start justify-center items-center gap-4 text-center w-1/3">
                <Image
                  className="rounded-full"
                  src={images.home6}
                  width={280}
                  height={280}
                  alt="home1"
                />
                <div className="h-[.5rem] w-[4.375em] mt-[2.5rem] bg-[#f8c307] mb-[1.5625rem]" />
                <strong>
                  {t(
                    "viet-algo-trade-products.personal-financial-consulting.title"
                  )}
                </strong>
                <p className="w-2/3">
                  {t(
                    "viet-algo-trade-products.personal-financial-consulting.description"
                  )}
                </p>
              </div>

              {/* portfolio-managing */}
              <div className="flex flex-col self-start justify-center items-center gap-4 text-center w-1/3">
                <Image
                  className="rounded-full"
                  src={images.home7}
                  width={280}
                  height={280}
                  alt="home1"
                />
                <div className="h-[.5rem] w-[4.375em] mt-[2.5rem] bg-[#f8c307] mb-[1.5625rem]" />
                <strong>
                  {t("viet-algo-trade-products.portfolio-managing.title")}
                </strong>
                <p className="w-2/3">
                  {t("viet-algo-trade-products.portfolio-managing.description")}
                </p>
              </div>

              {/* trading-system-building */}
              <div className="flex flex-col self-start justify-center items-center gap-4 text-center w-1/3">
                <Image
                  className="rounded-full"
                  src={images.home5}
                  width={280}
                  height={280}
                  alt="home1"
                />
                <div className="h-[.5rem] w-[4.375em] mt-[2.5rem] bg-[#f8c307] mb-[1.5625rem]" />
                <strong>
                  {t("viet-algo-trade-products.trading-system-building.title")}
                </strong>
                <p className="w-2/3">
                  {t(
                    "viet-algo-trade-products.trading-system-building.description"
                  )}
                </p>
              </div>

              {/* real-trading-account-analysing */}
              <div className="flex flex-col self-start justify-center items-center gap-4 text-center w-1/3">
                <Image
                  className="rounded-full"
                  src={images.home5}
                  width={280}
                  height={280}
                  alt="home1"
                />
                <div className="h-[.5rem] w-[4.375em] mt-[2.5rem] bg-[#f8c307] mb-[1.5625rem]" />
                <strong>
                  {t(
                    "viet-algo-trade-products.real-trading-account-analysing.title"
                  )}
                </strong>
                <p className="w-2/3">
                  {t(
                    "viet-algo-trade-products.real-trading-account-analysing.description"
                  )}
                </p>
              </div>
              <div className="flex flex-col self-start justify-center items-center gap-4 text-center w-1/3">
                <Image
                  className="rounded-full"
                  src={images.home5}
                  width={280}
                  height={280}
                  alt="home1"
                />
                <div className="h-[.5rem] w-[4.375em] mt-[2.5rem] bg-[#f8c307] mb-[1.5625rem]" />
                <strong>
                  {t(
                    "viet-algo-trade-products.financial-investment-courses.title"
                  )}
                </strong>
                <p className="w-2/3">
                  {t(
                    "viet-algo-trade-products.financial-investment-courses.description"
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/3 pl-[1rem] pr-[1rem]">
          {/* Latest Post */}
          <div className="w-full flex flex-col">
            <h1 className="p-2 mb-3 border-b-2 border-dashed border-project-primary text-[2.75rem] text-project-primary">
              LATEST POST
            </h1>

            {/* Post */}
            <div className="flex flex-col gap-3">
              <div className="flex flex-col">
                <div className="flex flex-row gap-2">
                  <Image
                    alt="post-thumbnail"
                    src={images.home3}
                    width={75}
                    height={87}
                  />
                  <div className="flex flex-col">
                    <p className="font-bold">Sample Post 1</p>
                    <p className="italic">01/01/2025</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col">
                <div className="flex flex-row gap-2">
                  <Image
                    alt="post-thumbnail"
                    src={images.home4}
                    width={75}
                    height={87}
                  />
                  <div className="flex flex-col">
                    <p className="font-bold">Sample Post 2</p>
                    <p className="italic">01/02/2025</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Top Views */}
            <div className="w-full flex flex-col">
              <h1 className="p-2 mb-3 border-b-2 border-dashed border-project-primary text-[2.75rem] text-project-primary">
                TOP VIEWS
              </h1>

              {/* List */}
              <div className="flex flex-col">
                <Tabs defaultValue="day">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="day">Day</TabsTrigger>
                    <TabsTrigger value="week">Week</TabsTrigger>
                    <TabsTrigger value="year">Year</TabsTrigger>
                  </TabsList>
                  <TabsContent value="day">
                    <div className="flex flex-col">
                      <p className="font-bold">Sample Post 1</p>
                      <p className="italic">1 interested</p>
                    </div>
                    <div className="flex flex-col">
                      <p className="font-bold">Sample Post 2</p>
                      <p className="italic">1 interested</p>
                    </div>
                    <div className="flex flex-col">
                      <p className="font-bold">Sample Post 3</p>
                      <p className="italic">1 interested</p>
                    </div>
                  </TabsContent>
                  <TabsContent value="week">
                    <div className="flex flex-col">
                      <p className="font-bold">Sample Post 4</p>
                      <p className="italic">1 interested</p>
                    </div>
                    <div className="flex flex-col">
                      <p className="font-bold">Sample Post 5</p>
                      <p className="italic">1 interested</p>
                    </div>
                    <div className="flex flex-col">
                      <p className="font-bold">Sample Post 6</p>
                      <p className="italic">1 interested</p>
                    </div>
                  </TabsContent>
                  <TabsContent value="year">
                    <div className="flex flex-col">
                      <p className="font-bold">Sample Post 7</p>
                      <p className="italic">1 interested</p>
                    </div>
                    <div className="flex flex-col">
                      <p className="font-bold">Sample Post 8</p>
                      <p className="italic">1 interested</p>
                    </div>
                    <div className="flex flex-col">
                      <p className="font-bold">Sample Post 9</p>
                      <p className="italic">1 interested</p>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>

            {/* Hot Producs */}
            <div className="w-full flex flex-col">
              <h1 className="p-2 mb-3 border-b-2 border-dashed border-project-primary text-[2.75rem] text-project-primary">
                HOT PRODUCTS
              </h1>

              {/* List */}
              <div className="flex flex-col">
                <Tabs defaultValue="day">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="day">Day</TabsTrigger>
                    <TabsTrigger value="week">Week</TabsTrigger>
                    <TabsTrigger value="year">Year</TabsTrigger>
                  </TabsList>
                  <TabsContent value="day">
                    <div className="flex flex-col">
                      <p className="font-bold">Sample Product 1</p>
                      <p className="italic">1 interested</p>
                    </div>
                    <div className="flex flex-col">
                      <p className="font-bold">Sample Product 2</p>
                      <p className="italic">1 interested</p>
                    </div>
                    <div className="flex flex-col">
                      <p className="font-bold">Sample Product 3</p>
                      <p className="italic">1 interested</p>
                    </div>
                  </TabsContent>
                  <TabsContent value="week">
                    <div className="flex flex-col">
                      <p className="font-bold">Sample Product 4</p>
                      <p className="italic">1 interested</p>
                    </div>
                    <div className="flex flex-col">
                      <p className="font-bold">Sample Product 5</p>
                      <p className="italic">1 interested</p>
                    </div>
                    <div className="flex flex-col">
                      <p className="font-bold">Sample Product 6</p>
                      <p className="italic">1 interested</p>
                    </div>
                  </TabsContent>
                  <TabsContent value="year">
                    <div className="flex flex-col">
                      <p className="font-bold">Sample Product 7</p>
                      <p className="italic">1 interested</p>
                    </div>
                    <div className="flex flex-col">
                      <p className="font-bold">Sample Product 8</p>
                      <p className="italic">1 interested</p>
                    </div>
                    <div className="flex flex-col">
                      <p className="font-bold">Sample Product 9</p>
                      <p className="italic">1 interested</p>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
