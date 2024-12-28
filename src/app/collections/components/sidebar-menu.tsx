"use server";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/accordion";
import Link from "next/link";
import React from "react";

const sidebarMenuItems = [
  {
    category: "Individual Lunch Boxes",
    items: [
      { name: "Signature Pho", url: "/products/signature-pho" },
      { name: "Taste of Vietnam", url: "/products/taste-of-vietnam" },
      { name: "Meat Lovers", url: "/products/meat-lovers" },
      { name: "Vegan Power", url: "/products/vegan-power" },
      {
        name: "Shaking Fillets with Rice",
        url: "/products/shaking-fillets-with-rice",
      },
      {
        name: "Crispy Chicken with Rice",
        url: "/products/crispy-chicken-with-rice",
      },
      {
        name: "Grilled Pork Chop with Rice",
        url: "/products/grilled-pork-chop-with-rice",
      },
      {
        name: "Grilled Chicken with Rice",
        url: "/products/grilled-chicken-with-rice",
      },
      { name: "Fried Rice Combo", url: "/products/fried-rice-combo" },
      { name: "Vermicelli Combo", url: "/products/vermicelli-combo" },
    ],
  },
  {
    category: "Tea Time Boxes",
    items: [
      { name: "Deluxe Mixed Box", url: "/products/deluxe-mixed-box" },
      { name: "Deluxe Vegan Box", url: "/products/deluxe-vegan-box" },
      { name: "Roll Combo", url: "/products/roll-combo" },
      { name: "Corn Soup Combo", url: "/products/corn-soup-combo" },
    ],
  },
  {
    category: "Chao’s Top Picks",
    items: [
      { name: "Favourite Feast", url: "/products/favourite-feast" },
      { name: "Super Flavours", url: "/products/super-flavours" },
      { name: "The Winner", url: "/products/the-winner" },
      { name: "Warm Me Up", url: "/products/warm-me-up" },
      { name: "Chao's Signature", url: "/products/chaos-signature" },
      { name: "Noodle Soup Combo", url: "/products/noodle-soup-combo" },
      { name: "Light and Easy", url: "/products/light-and-easy" },
    ],
  },
  {
    category: "Chao's Platters",
    items: [
      {
        name: "Fresh Rice Paper Rolls",
        url: "/products/fresh-rice-paper-rolls",
      },
      { name: "Popular Bao Buns", url: "/products/popular-bao-buns" },
      { name: "Roasted Duck Wraps", url: "/products/roasted-duck-wraps" },
      {
        name: "Tempura Eggplant Wraps",
        url: "/products/tempura-eggplant-wraps",
      },
      {
        name: "Homemade Crispy Spring Rolls",
        url: "/products/homemade-crispy-spring-rolls",
      },
      {
        name: "Sugarcane Prawn Lollipops",
        url: "/products/sugarcane-prawn-lollipops",
      },
      { name: "San Choi Bao", url: "/products/san-choi-bao" },
      { name: "Sizzling Skewers", url: "/products/sizzling-skewers" },
      {
        name: "Vietnamese Pork Sausages",
        url: "/products/vietnamese-pork-sausages",
      },
      { name: "Mama’s Fish Cakes", url: "/products/mama-s-fish-cakes" },
      {
        name: "Five Spiced Chicken Wings",
        url: "/products/five-spiced-chicken-wings",
      },
      { name: "Floral Rolls", url: "/products/floral-rolls-1" },
      { name: "Vietnamese Salads", url: "/products/vietnamese-salads" },
      {
        name: "Signature Salt & Pepper",
        url: "/products/signature-salt-pepper",
      },
      { name: "Grilled Pork Chop", url: "/products/grilled-pork-chop" },
      { name: "Crispy Chicken", url: "/products/crispy-chicken" },
      { name: "Grilled Chicken", url: "/products/grilled-chicken" },
      {
        name: "Stir-fried Mix Veggies",
        url: "/products/stir-fried-mix-veggies",
      },
      {
        name: "Seafood XO with Egg Noodle",
        url: "/products/seafood-xo-with-egg-noodle",
      },
      {
        name: "Veggies with Egg Noodle",
        url: "/products/veggies-with-egg-noodle",
      },
      { name: "Classic Fried Rice", url: "/products/classic-fried-rice" },
      { name: "Jasmine Rice", url: "/products/jasmine-rice" },
      { name: "Tomato Rice", url: "/products/tomato-rice" },
      { name: "Prawn Crackers", url: "/products/prawn-crackers" },
    ],
  },
  {
    category: "Funeral & Wake Catering",
    items: [
      { name: "Simply Delicious", url: "/products/simply-delicious" },
      { name: "Nice and Easy", url: "/products/nice-and-easy" },
      { name: "Peace Harmony", url: "/products/peace-harmony" },
      { name: "The Divine", url: "/products/the-divine" },
      {
        name: "Fresh Rice Paper Rolls",
        url: "/products/fresh-rice-paper-rolls",
      },
      {
        name: "Homemade Crispy Spring Rolls",
        url: "/products/homemade-crispy-spring-rolls",
      },
      { name: "Popular Bao Buns", url: "/products/popular-bao-buns" },
      { name: "Sizzling Skewers", url: "/products/sizzling-skewers" },
      { name: "Roasted Duck Wraps", url: "/products/roasted-duck-wraps" },
    ],
  },
  {
    category: "Add-Ons",
    items: [
      {
        name: "Fresh Rice Paper Rolls Add-On",
        url: "/products/fresh-rice-paper-rolls-add-on",
      },
      {
        name: "Popular Bao Buns Add-On",
        url: "/products/popular-bao-buns-ind",
      },
      {
        name: "Tempura Zucchini Buns Add-On",
        url: "/products/tempura-zucchini-buns-add-on",
      },
      {
        name: "Roasted Duck Wraps Add-On",
        url: "/products/roasted-duck-wraps-add-on",
      },
      {
        name: "Tempura Eggplant Wraps Add-On",
        url: "/products/tempura-eggplant-wraps-add-on",
      },
      {
        name: "Homemade Crispy Spring Rolls Add-On",
        url: "/products/homemade-crispy-spring-rolls-ind",
      },
      {
        name: "Sugarcane Prawn Lollipops Add-On",
        url: "/products/sugarcane-prawn-lollipops-ind",
      },
      { name: "San Choi Bao Add-On", url: "/products/san-choi-bao-add-on" },
      {
        name: "Sizzling Skewers Add-On",
        url: "/products/sizzling-skewers-ind",
      },
      {
        name: "Vietnamese Pork Sausages Add-On",
        url: "/products/vietnamese-pork-sausages-ind",
      },
      {
        name: "Mama’s Fish Cakes Add-On",
        url: "/products/mama-s-fish-cakes-ind",
      },
      {
        name: "Five Spiced Chicken Wings Add-On",
        url: "/products/five-spiced-chicken-wings-ind",
      },
      { name: "Floral Rolls Add-On", url: "/products/floral-rolls-add-on" },
      {
        name: "Signature Salt & Pepper Add-On",
        url: "/products/signature-salt-pepper-ind",
      },
      {
        name: "Classic Fried Rice Add-On",
        url: "/products/classic-fried-rice-ind",
      },
      {
        name: "Signature Noodle Soup Add-On",
        url: "/products/signature-noodle-soup-add-on",
      },
      {
        name: "Seafood XO with Egg Noodle Add-On",
        url: "/products/seafood-xo-with-egg-noodle-add-on",
      },
      {
        name: "Veggies with Egg Noodle Add-On",
        url: "/products/veggies-with-egg-noodle-add-on",
      },
      {
        name: "Vermicelli Noodles Add-On",
        url: "/products/vermicelli-noodle-add-on",
      },
      {
        name: "Vietnamese Salad Add-On",
        url: "/products/vietnamese-salad-add-on",
      },
      { name: "Cutlery Set", url: "/products/cutlery-set" },
    ],
  },
  {
    category: "Drinks & Desserts",
    items: [
      { name: "Soft Drinks", url: "/products/soft-drinks" },
      { name: "Nudie Fruit Juices", url: "/products/nudie-fruit-juices" },
      { name: "H2 Coconut Juice", url: "/products/h2-coconut-juice" },
      { name: "Still Water", url: "/products/still-water" },
      {
        name: "Sparkling Mineral Water",
        url: "/products/sparkling-mineral-water",
      },
      { name: "Fresh Fruits", url: "/products/fresh-fruit-platter" },
      { name: "Volcano Choc Pudding", url: "/products/volcano-choc-pudding" },
      { name: "Creamy Cheesecake", url: "/products/creamy-cheesecake" },
      { name: "Apple & Berry Crumble", url: "/products/apple-berry-crumble" },
      {
        name: "Vegan Bounty Protein Ball",
        url: "/products/vegan-bounty-protein-ball",
      },
    ],
  },
];

const SidebarMenu = ({ className }: { className?: string }) => {
  return (
    <div className={className}>
      <p className="uppercase border-t-8 border-project-primary text-2xl font-bold w-fit pt-6">
        Menus
      </p>
      <Accordion type="single" collapsible>
        {sidebarMenuItems.map((menuItem, index) => (
          <AccordionItem
            key={menuItem.category}
            value={`item-${index}`}
            className="border-none"
          >
            <Link href={`#${menuItem.category}`}>
              <AccordionTrigger className="hover:text-project-primary hover:no-underline text-[16px] font-bold leading-snug">
                {menuItem.category}
              </AccordionTrigger>
            </Link>
            <AccordionContent className="flex flex-col gap-4">
              {menuItem.items.map((item) => (
                <Link
                  key={item.url}
                  href={item.url}
                  className="uppercase font-light text-sm hover:text-project-primary"
                >
                  {item.name}
                </Link>
              ))}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default SidebarMenu;
