import React from "react";
import { images } from "@/public/images/index";
import NavbarIndicator from "@/shared/components/Navbar/NavbarIndicator";
import Link from "next/link";

const classes = {
  link: "font-bold text-project-primary hover:text-black",
};

const Page = () => {
  return (
    <div className="h-full w-full">
      <NavbarIndicator />
      <div
        className={
          "relative h-full text-white bg-auto pl-[18em] bg-repeat-y w-full bg-right-top"
        }
        style={{ backgroundImage: `url(${images.corporate})` }}
      >
        <div className="max-w-2xl p-6 flex flex-col gap-[8em] bg-white/50 pt-[6em]">
          {/* Corporate Catering in Sydney */}
          <div className="flex flex-col gap-8 text-center leading-7 px-4 items-center text-project-primary">
            <div className="h-[.5rem] w-[6em] bg-[#bcce34]" />
            <h1 className="text-5xl font-bold uppercase">
              Corporate Catering in Sydney
            </h1>
            <p className="text-lg">
              Say good-bye to sandwiches. And hello to something more exotic.
              Here&apos;s to celebrating the fantastic flavours of Vietnam, the
              Chao way.
            </p>
            <div className="h-[.5rem] w-[6em] bg-[#bcce34]" />
          </div>

          {/* Catering Services for Your Corporate Event */}
          <div className="w-full text-black">
            <h2 className="text-3xl leading-9 font-normal uppercase text-center w-full mb-4">
              Catering Services for Your Corporate Event
            </h2>
            <div className="text-start flex flex-col gap-3">
              <p>
                We specialise in catering for corporate functions across Sydney.
              </p>
              <p>
                Using only the freshest quality produce, we offer a range of
                beautifully crafted and presented packages to spice up your next
                occasion:
              </p>
              <ul className="list-disc pl-[3em] marker:text-project-primary">
                <li>Meetings</li>
                <li>Presentations</li>
                <li>Networking events</li>
                <li>Conferences</li>
                <li>Trade shows</li>
                <li>Celebrations</li>
              </ul>
              <p className="leading-8">
                Our authentic, delicious{" "}
                <Link
                  className={classes.link}
                  href="/collections"
                  target="_blank"
                >
                  Vietnamese dishes
                </Link>{" "}
                are of restaurant quality and delivered straight to your door.
              </p>
              <strong>Enjoy our service with a smile!</strong>
              <p className="leading-8">
                If you have the task of planning the food and drinks for a
                corporate event, you have many options. Finding new and
                innovative possibilities can set your occasion apart from all
                the other corporate events serving up traditional fare.
                Arranging corporate catering in Sydney is a bit different from
                planning catering for a wedding, as corporate events tend to be
                more casual, although corporate functions do range from very
                casual to formal depending on the purpose of the affair. Here
                are some tips to help you plan great food for your next
                gathering.
              </p>
              <strong>Consider Your Guests</strong>
              <p className="leading-8">
                Make an effort to know who’s coming to your event. Learn as much
                as you can about your guests such as how often they attend
                events such as yours, where most of them live, their ethnic
                backgrounds, and their professional level; this type of
                information can save you from serving inappropriate or unpopular
                items. If possible, also try to find out about any food
                allergies among your guests. Then, you can pass this information
                on to your caterer for the best results.
              </p>
              <strong>Make the Space Comfortable</strong>
              <p className="leading-8">
                Consider the objectives of your event and choose the size of the
                room accordingly. If your guests will have pens and notepads,
                make sure there is room for these on the table along with the
                tableware. Depending on the size of your tables, you’ll probably
                want to cap the number of chairs at each table at eight or so to
                avoid crowding.
              </p>
              <strong>Pay Attention to Presentation</strong>
              <p className="leading-8">
                An excellent{" "}
                <Link href="/about-us" className={classes.link} target="_blank">
                  corporate caterer in Sydney
                </Link>{" "}
                will make sure that the food and drinks are presented
                attractively and functionally. The selection of food should be
                colourful and fragrant, and the presentation should be creative
                and fun. Whether the food is served by the plate or
                buffet-style, you want plenty of options and an aesthetically
                pleasing setup. The linens and any other décor should align with
                the meal and the theme of the event.
              </p>
              <strong>Provide Plenty of Options</strong>
              <p className="leading-8">
                People at corporate events often find themselves stuck with the
                same menu options everyone tends to serve. However, most people
                prefer some variety and more control over what they eat. It’s
                best to have a few options available as well as vegetarian and
                gluten-free options for your diet-conscious guests. You can also
                choose something different and unique to give guests a break
                from the same old meal they eat at every event they attend.
              </p>
            </div>
          </div>

          {/* Sydney Corporate Catering by Chao Catering */}
          <div className="mb-[8em] flex flex-col gap-6 py-4 items-center">
            <h2 className="text-3xl font-bold leading-9 text-project-primary uppercase text-center w-full">
              Catering Services for Your Corporate Event
            </h2>
            <p className="leading-8 text-black">
              Corporate catering is popular because it provides both tasty food,
              drinks and entertainment for your attendees. You can treat
              yourself and your guests to wonderful service and have your every
              need met when you work with Chao Catering. Chao Catering is the
              creation of two popular Vietnamese restaurants: I Love Pho in
              Crows Nest and LaSen in Randwick. We offer delicious,
              restaurant-quality Vietnamese cuisine that’s healthy, fresh, and
              gluten-free. We also have lots of vegetarian options. If you’re
              looking for something unique for your corporate event, consider
              Chao Catering. Your guests will love the Authentic Asian cuisine,
              and we’ll love making sure everyone is fed and enjoys a great
              meal.{" "}
              <Link className={classes.link} href="/contact-us" target="_blank">
                Contact Chao Catering
              </Link>{" "}
              today to book.
            </p>
            <Link
              className="uppercase text-xl bg-project-primary text-white hover:bg-gray-700 font-bold p-6 w-1/2 text-center"
              href="/quote"
              target="_blank"
            >
              I&apos;d like a free quote
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
