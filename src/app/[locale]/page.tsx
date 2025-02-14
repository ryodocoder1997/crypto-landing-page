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
                  Welcome to VietAlgoTrade
                </div>
                <div className="h-[.5rem] w-[4.375em] mt-[2.5rem] bg-[#f8c307] mb-[1.5625rem]" />
                <p className="text-[1.375rem] leading-[1.625rem] mt-[1rem] mb-[2.5rem] text-white">
                  RISK IS WHEN YOU DON&apos;T KNOW WHAT YOU ARE DOING
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
              className="relative flex justify-center items-center bg-[#666] h-[40rem] bg-cover bg-no-repeat z-[1]"
              style={{ backgroundImage: `url(${images.home1})` }}
            >
              <div className="flex flex-col justify-center items-center animate-fade-down animate-duration-[1000ms]">
                <div className="text-center text-[5.625rem] uppercase font-extrabold leading-[4.375rem] text-white">
                  Welcome to VietAlgoTrade
                </div>
                <div className="h-[.5rem] w-[4.375em] mt-[2.5rem] bg-[#f8c307] mb-[1.5625rem]" />
                <p className="text-[1.375rem] leading-[1.625rem] mt-[1rem] mb-[2.5rem] text-white">
                  INVESTING IS A GAME OF STATISTICAL PROBABILITIES
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
      <div className="w-full flex flex-row gap-3">
        <div className="w-2/3">
          <div
            className="w-full bg-right bg-contain bg-no-repeat pl-[1rem] pr-[1rem]"
            style={{ backgroundImage: `url(${images.home2})` }}
          >
            <div className="w-1/2 bg-white/50 flex flex-col justify-center items-center pt-[3.75rem] pb-[3.75rem]">
              <div className="h-[.5rem] w-[4.375em] mt-[2.5rem] bg-[#f8c307] mb-[3.125rem]" />
              <h1 className="text-[2.75rem] leading-[3.75rem] font-normal mb-[0.625rem] text-project-primary uppercase">
                A New Way of <strong>TRADING</strong>
              </h1>
              <div className="mt-[1.875rem] mb-[2.8125rem] pt-[1.25rem]">
                <p className="text-center">
                  VietAlgoTrade provides many useful tools to help investors
                  understand the risks of the financial products they trade,
                  allowing them to develop specific capital management
                  strategies. By utilising a specially developed algorithm, we
                  believe that we can help investors save primarily time and
                  subsequently the opportunity costs from the market.
                </p>
              </div>
              <Link
                href={"/products"}
                className="pl-[3.4375rem] pr-[3.4375rem] text-[1.25rem] font-bold leading-[3.75rem] bg-project-primary text-white [&:hover]:text-[#333] transition-colors duration-[0.3s] uppercase"
              >
                Trade Now
              </Link>
            </div>
          </div>

          {/* Chaos Collection
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
            <div className="h-[.5rem] w-[4.375em] mt-[2.5rem] bg-[#f8c307] mb-[1.5625rem]" />
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
            <div className="h-[.5rem] w-[4.375em] mt-[2.5rem] bg-[#f8c307] mb-[1.5625rem]" />
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
            <div className="h-[.5rem] w-[4.375em] mt-[2.5rem] bg-[#f8c307] mb-[1.5625rem]" />
            <strong>Vegan Options</strong>
            <p className="w-2/3">
              Our popular Vietnamese meals are fresh and healthy. We have many
              delicious choices of vegan and gluten-free dishes for you to
              choose from.
            </p>
          </div>
        </div>
      </div> */}

          {/* Why Chao Catering */}
          <div
            className="w-full bg-left bg-contain bg-no-repeat pl-[1rem] pr-[1rem] flex justify-end"
            style={{ backgroundImage: `url(${images.home2})` }}
          >
            <div className="w-1/2 flex flex-col bg-white/50 justify-center items-center pt-[3.75rem] pb-[3.75rem]">
              <div className="h-[.5rem] w-[4.375em] mt-[2.5rem] bg-[#f8c307] mb-[3.125rem]" />
              <h1 className="text-[2.75rem] leading-[3.75rem] font-normal mb-[0.625rem] text-project-primary uppercase">
                WHY <strong>VIETALGOTRADE</strong>
              </h1>
              <h2 className="mb-[1rem] text-xl font-normal leading-[2.25rem]">
                Enjoy Excellent Experience
              </h2>
              <p className="w-2/3 mt-[1.875rem] mb-[2.8125rem] pt-[1.25rem] text-lg  text-center">
                We are financial traders with a deep understanding of the
                products we trade. With over 5 years of experience in the
                market, from investing in Dragon Capital and the Vietnamese
                stock market to higher-risk channels such as cryptocurrency and
                forex markets, we believe we can help investors achieve returns
                that exceed bank interest rates or after-tax profits of
                companies, with a level of risk that can be calculated based on
                algorithms.
              </p>
            </div>
          </div>

          {/* Healthy Meals & INDIVIDUAL LUNCH BOXS
      <div className="flex flex-col justify-center items-center gap-[2em] pb-[12em]">
        <div className="h-[.5rem] w-[4.375em] mt-[8em] bg-[#f8c307]" />
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
              className="absolute animate-fade animate-duration-700 animate-ease-out hidden left-0 top-0 w-full h-full bg-white flex-col gap-4 justify-center items-center"
            >
              <p className="animate-fade-down animate-duration-300 animate-ease-in uppercase tracking-widest font-bold text-xl text-white w-1/2 text-center">
                Favourite Feast
              </p>
              <div className="animate-fade-down animate-duration-300 animate-ease-in h-[.5rem] w-[4.375em] mt-[2.5rem] bg-[#f8c307] mb-[1.5625rem]" />
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
              <div className="animate-fade-down animate-duration-300 animate-ease-in h-[.5rem] w-[4.375em] mt-[2.5rem] bg-[#f8c307] mb-[1.5625rem]" />
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
              className="absolute animate-fade animate-duration-700 animate-ease-out hidden left-0 top-0 w-full h-full bg-white flex-col gap-4 justify-center items-center"
            >
              <p className="animate-fade-down animate-duration-300 animate-ease-in uppercase tracking-widest font-bold text-xl text-white w-1/2 text-center">
                The Winner
              </p>
              <div className="animate-fade-down animate-duration-300 animate-ease-in h-[.5rem] w-[4.375em] mt-[2.5rem] bg-[#f8c307] mb-[1.5625rem]" />
              <button className="animate-fade-up animate-duration-300 animate-ease-in uppercase w-12 h-12 p-12 bg-project-primary rounded-full flex justify-center items-center font-bold text-white hover:text-black transition-colors duration-300">
                Quick View
              </button>
            </div>
          </div>
        </div>

        // INDIVIDUAL LUNCH BOXS 
       <div className="h-[.5rem] w-[4.375em] mt-[8em] bg-[#f8c307]" />
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
              className="absolute animate-fade animate-duration-700 animate-ease-out hidden left-0 top-0 w-full h-full bg-white flex-col gap-4 justify-center items-center"
            >
              <p className="animate-fade-down animate-duration-300 animate-ease-in uppercase tracking-widest font-bold text-xl text-white w-1/2 text-center">
                Shaking Fillets with Rice
              </p>
              <div className="animate-fade-down animate-duration-300 animate-ease-in h-[.5rem] w-[4.375em] mt-[2.5rem] bg-[#f8c307] mb-[1.5625rem]" />
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
              <div className="animate-fade-down animate-duration-300 animate-ease-in h-[.5rem] w-[4.375em] mt-[2.5rem] bg-[#f8c307] mb-[1.5625rem]" />
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
              <div className="animate-fade-down animate-duration-300 animate-ease-in h-[.5rem] w-[4.375em] mt-[2.5rem] bg-[#f8c307] mb-[1.5625rem]" />
              <button className="animate-fade-up animate-duration-300 animate-ease-in uppercase w-12 h-12 p-12 bg-project-primary rounded-full flex justify-center items-center font-bold text-white hover:text-black transition-colors duration-300">
                Quick View
              </button>
            </div>
          </div>
        </div> 
      </div>  */}

          {/* CHAO SERVICES */}
          <div className="flex flex-col justify-center items-center text-black bg-gray-50/80 gap-4 text-lg py-[8em]">
            <h1 className="uppercase text-project-primary text-3xl">
              VietAlgoTrade <strong>PRODUCTS</strong>
            </h1>
            <p className="font-bold">Trust and Responsibility</p>
            <div className="flex flex-row justify-around flex-wrap max-w-6xl mt-8">
              <div className="flex flex-col self-start justify-center items-center gap-4 text-center w-1/3">
                <Image
                  className="rounded-full"
                  src={images.home6}
                  width={280}
                  height={280}
                  alt="home1"
                />
                <div className="h-[.5rem] w-[4.375em] mt-[2.5rem] bg-[#f8c307] mb-[1.5625rem]" />
                <strong>Personal Financial Consulting</strong>
                <p className="w-2/3">
                  Depending on the client&apos;s risk appetite, we will advise
                  on investment packages that align with their expected return
                  and desired risk level.
                </p>
              </div>
              <div className="flex flex-col self-start justify-center items-center gap-4 text-center w-1/3">
                <Image
                  className="rounded-full"
                  src={images.home7}
                  width={280}
                  height={280}
                  alt="home1"
                />
                <div className="h-[.5rem] w-[4.375em] mt-[2.5rem] bg-[#f8c307] mb-[1.5625rem]" />
                <strong>Portfolio Managing</strong>
                <p className="w-2/3">
                  We will build sample investment portfolios that have been
                  tested in the real market, allowing clients to make informed
                  decisions about their investment trust based on their
                  investment capital. We only manage the trading accounts and
                  will never ask clients to provide exchange accounts or bank
                  accounts; clients will have full control over their own cash
                  flow.
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
                <strong>Trading System Building</strong>
                <p className="w-2/3">
                  With our proprietary data analysis tools, we can evaluate
                  whether our clients&apos; trading portfolios are effective. We
                  will then propose specific solution packages to improve our
                  clients&apos; trading results.
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
                <strong>Real Trading Account Analysing</strong>
                <p className="w-2/3">
                  We assist clients in verifying any real trading account to
                  assess whether it has truly generated profits in the past,
                  evaluate its profitability potential, and determine the level
                  of risk for the future. Currently, depending on the market and
                  trading platform, some individuals may link with exchanges to
                  create fake accounts or use various tricks to deceive
                  investors.
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
                <strong>Financial Investment Courses</strong>
                <p className="w-2/3">
                  There are many courses on various topics at VietAlgoTrade,
                  ranging from Probability and Statistics Theory, Financial
                  Market Structure, to Portfolio Construction, Trading
                  Psychology, Investment Algorithms, and Trading Bots.
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
