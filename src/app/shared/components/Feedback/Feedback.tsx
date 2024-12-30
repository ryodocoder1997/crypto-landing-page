"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { images } from "@/public/images";
import Autoplay from "embla-carousel-autoplay";

import "./Feedback.scss";

const Feedback = () => {
  return (
    <Carousel
      className="w-full feedback-container"
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
            className="feedback-content-container"
            style={{ backgroundImage: `url(${images.feedback1})` }}
          >
            <div className="h-[.5rem] w-[4.375em] bg-[#bcce34] mb-[1.5625rem]" />
            <div className="feedback-content animate-fade-down animate-duration-[1000ms]">
              <div className="feedback-slogun">
                “Thank you for your amazing customer service and for delivering
                quality food to our home.”
              </div>
              <div className="feedback-review">
                “We&apos;ve been ordering lots of Vietnamese food during the
                lockdown. The food from Chao Catering was the highlight. They
                were well prepared and packaged. The instructions were
                thoughtful and easy to follow. The food were truly delicious,
                especially the crispy skin chicken, it lived up to its names
                with the air fryer. We look forward to ordering more soon.”
              </div>
              <div className="feedback-author">David Tran</div>
            </div>
            <div className="h-[.5rem] w-[4.375em] bg-[#bcce34] mb-[1.5625rem]" />
          </div>
        </CarouselItem>
        <CarouselItem>
          <div
            className="feedback-content-container"
            style={{ backgroundImage: `url(${images.feedback2})` }}
          >
            <div className="h-[.5rem] w-[4.375em] bg-[#bcce34] mb-[1.5625rem]" />
            <div className="feedback-content animate-fade-down animate-duration-[1000ms] animate-delay-[5000ms]">
              <div className="feedback-slogun">
                “Thank you for your amazing customer service and for delivering
                quality food to our home.”
              </div>
              <div className="feedback-review">
                “We&apos;ve been ordering lots of Vietnamese food during the
                lockdown. The food from Chao Catering was the highlight. They
                were well prepared and packaged. The instructions were
                thoughtful and easy to follow. The food were truly delicious,
                especially the crispy skin chicken, it lived up to its names
                with the air fryer. We look forward to ordering more soon.”
              </div>
              <div className="feedback-author">David Tran</div>
            </div>
            <div className="h-[.5rem] w-[4.375em] bg-[#bcce34] mb-[1.5625rem]" />
          </div>
        </CarouselItem>
        <CarouselItem>
          <div
            className="feedback-content-container"
            style={{ backgroundImage: `url(${images.feedback3})` }}
          >
            <div className="h-[.5rem] w-[4.375em] bg-[#bcce34] mb-[1.5625rem]" />
            <div className="feedback-content animate-fade-down animate-duration-[1000ms] animate-delay-[9000ms]">
              <div className="feedback-slogun">
                “Thank you for your amazing customer service and for delivering
                quality food to our home.”
              </div>
              <div className="feedback-review">
                “We&apos;ve been ordering lots of Vietnamese food during the
                lockdown. The food from Chao Catering was the highlight. They
                were well prepared and packaged. The instructions were
                thoughtful and easy to follow. The food were truly delicious,
                especially the crispy skin chicken, it lived up to its names
                with the air fryer. We look forward to ordering more soon.”
              </div>
              <div className="feedback-author">David Tran</div>
            </div>
            <div className="h-[.5rem] w-[4.375em] bg-[#bcce34] mb-[1.5625rem]" />
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious className="btn-previous" />
      <CarouselNext className="btn-next" />
    </Carousel>
  );
};

export default Feedback;
