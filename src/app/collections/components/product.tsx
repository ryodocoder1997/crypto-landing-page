import Image from "next/image";
import React from "react";
import ProductImage from "@/public/images/product.jpg";

const data = [
  {
    items: [
      {
        title: "Signature Pho",
        description: {
          price: "$36.00",
          extra_info: "Minimum 3",
        },
      },
      {
        title: "Taste of Vietnam",
        description: {
          price: "$26.00",
          extra_info: "Minimum 3",
          diet_type: "GFGluten FREE",
        },
      },
      {
        title: "Meat Lovers",
        description: {
          price: "$32.00",
          extra_info: "Minimum 3",
          diet_type: "GFGluten FREE",
        },
      },
      {
        title: "Vegan Power",
        description: {
          price: "$32.00",
          extra_info: "Minimum 3",
          diet_type: "VEVegetarianGFGluten FREE",
        },
      },
      {
        title: "Shaking Fillets with Rice",
        description: {
          price: "$22.00",
          extra_info: "Minimum 3",
          diet_type: "GFGluten FREE",
        },
      },
      {
        title: "Crispy Chicken with Rice",
        description: {
          price: "$22.00",
          extra_info: "Minimum 3",
          diet_type: "GFGluten FREE",
        },
      },
      {
        title: "Grilled Pork Chop with Rice",
        description: {
          price: "$22.00",
          extra_info: "Minimum 3",
          diet_type: "GFGluten FREE",
        },
      },
      {
        title: "Grilled Chicken with Rice",
        description: {
          price: "$22.00",
          extra_info: "Minimum 3",
          diet_type: "GFGluten FREE",
        },
      },
      {
        title: "Fried Rice Combo",
        description: {
          price: "$22.00",
          extra_info: "Minimum 3",
        },
      },
      {
        title: "Vermicelli Combo",
        description: {
          price: "$22.00",
          extra_info: "Minimum 3",
          diet_type: "GFGluten FREE",
        },
      },
    ],
    titleMain: "Individual",
    titleSub: "Lunch Boxes",
  },
  {
    items: [
      {
        title: "Deluxe Mixed Box",
        description: {
          price: "$20.00",
          extra_info: "Minimum 3",
        },
      },
      {
        title: "Deluxe Vegan Box",
        description: {
          price: "$20.00",
          extra_info: "Minimum 3",
          diet_type: "VEVegetarian",
        },
      },
      {
        title: "Roll Combo",
        description: {
          price: "$18.00",
          extra_info: "Minimum 3",
          diet_type: "GFGluten FREE",
        },
      },
      {
        title: "Corn Soup Combo",
        description: {
          price: "$18.00",
          extra_info: "Minimum 3",
          diet_type: "GFGluten FREE",
        },
      },
    ],
    titleMain: "Tea Time",
    titleSub: "Boxes",
  },
  {
    titleMain: "Chao's",
    titleSub: "Top Picks",
    items: [
      {
        title: "Favourite Feast",
        description: {
          price: "$315.00",
          extra_info: "Serve 10$31.50 pp",
        },
      },
      {
        title: "Super Flavours",
        description: {
          price: "$315.00",
          extra_info: "Serve 10$31.50 pp",
          diet_type: "GFGluten FREE",
        },
      },
      {
        title: "The Winner",
        description: {
          price: "$370.00",
          extra_info: "Serve 10$37 pp",
        },
      },
      {
        title: "Warm Me Up",
        description: {
          price: "$310.00",
          extra_info: "Serve 10$31 pp",
          diet_type: "GFGluten FREE",
        },
      },
      {
        title: "Chao's Signature",
        description: {
          price: "$330.00",
          extra_info: "Serve 10$33 pp",
          diet_type: "GFGluten FREE",
        },
      },
      {
        title: "Shaking Fillets with Rice",
        description: {
          price: "$22.00",
          extra_info: "Minimum 3",
          diet_type: "GFGluten FREE",
        },
      },
      {
        title: "Crispy Chicken with Rice",
        description: {
          price: "$22.00",
          extra_info: "Minimum 3",
          diet_type: "GFGluten FREE",
        },
      },
      {
        title: "Grilled Pork Chop with Rice",
        description: {
          price: "$22.00",
          extra_info: "Minimum 3",
          diet_type: "GFGluten FREE",
        },
      },
      {
        title: "Grilled Chicken with Rice",
        description: {
          price: "$22.00",
          extra_info: "Minimum 3",
          diet_type: "GFGluten FREE",
        },
      },
      {
        title: "Fried Rice Combo",
        description: {
          price: "$22.00",
          extra_info: "Minimum 3",
        },
      },
      {
        title: "Vermicelli Combo",
        description: {
          price: "$22.00",
          extra_info: "Minimum 3",
          diet_type: "GFGluten FREE",
        },
      },
    ],
  },
  {
    titleMain: "Chao's",
    titleSub: "Platters",
    items: [
      {
        title: "Fresh Rice Paper Rolls",
        description: {
          price: "$50.00",
          extra_info: "Serve 10",
          diet_type: "GFGluten FREE",
        },
      },
      {
        title: "Popular Bao Buns",
        description: {
          price: "$68.00",
          extra_info: "Serve 10",
        },
      },
      {
        title: "Roasted Duck Wraps",
        description: {
          price: "$60.00",
          extra_info: "Serve 10",
        },
      },
      {
        title: "Tempura Eggplant Wraps",
        description: {
          price: "$60.00",
          extra_info: "Serve 10",
        },
      },
      {
        title: "Homemade Crispy Spring Rolls",
        description: {
          price: "$40.00",
          extra_info: "Serve 10",
          diet_type: "GFGluten FREE",
        },
      },
      {
        title: "Sugarcane Prawn Lollipops",
        description: {
          price: "$66.00",
          extra_info: "Serve 10",
          diet_type: "GFGluten FREE",
        },
      },
      {
        title: "San Choi Bao",
        description: {
          price: "$96.00",
          extra_info: "Serve 10",
        },
      },
      {
        title: "Fried Rice Combo",
        description: {
          price: "$22.00",
          extra_info: "Minimum 3",
        },
      },
      {
        title: "Vermicelli Combo",
        description: {
          price: "$22.00",
          extra_info: "Minimum 3",
          diet_type: "GFGluten FREE",
        },
      },
      {
        title: "Shaking Fillets with Rice",
        description: {
          price: "$22.00",
          extra_info: "Minimum 3",
          diet_type: "GFGluten FREE",
        },
      },
    ],
  },
  {
    titleMain: "Funeral",
    titleSub: "& Wake Catering",
    items: [
      {
        title: "Simply Delicious",
        description: {
          price: "$19.00",
          extra_info: "Minimum 5",
        },
      },
      {
        title: "Nice and Easy",
        description: {
          price: "$24.00",
          extra_info: "Minimum 5",
        },
      },
      {
        title: "Peace Harmony",
        description: {
          price: "$28.00",
          extra_info: "Minimum 5",
        },
      },
    ],
  },
  {
    titleMain: "Add",
    titleSub: "-Ons",
    items: [
      {
        title: "Fresh Rice Paper Rolls Add-On",
        description: {
          price: "$5.00",
          extra_info: "Minimum 5",
          diet_type: "GFGluten FREE",
        },
      },
      {
        title: "Popular Bao Buns Add-On",
        description: {
          price: "$6.80",
          extra_info: "Minimum 5",
        },
      },
      {
        title: "Tempura Zucchini Buns Add-On",
        description: {
          price: "$6.80",
          extra_info: "Minimum 10",
        },
      },
      {
        title: "Roasted Duck Wraps Add-On",
        description: {
          price: "$6.00",
          extra_info: "Minimum 5",
        },
      },
      {
        title: "Homemade Crispy Spring Rolls Add-On",
        description: {
          price: "$4.00",
          extra_info: "Minimum 5",
          diet_type: "GFGluten FREE",
        },
      },
      {
        title: "Sugarcane Prawn Lollipops Add-On",
        description: {
          price: "$6.60",
          extra_info: "Minimum 5",
          diet_type: "GFGluten FREE",
        },
      },
      {
        title: "Signature Salt & Pepper Add-On",
        description: {
          price: "$12.00",
          extra_info: "Minimum 5",
          diet_type: "GFGluten FREE",
        },
      },
      {
        title: "Vietnamese Pork Sausages Add-On",
        description: {
          price: "$4.00",
          extra_info: "Minimum 5",
          diet_type: "GFGluten FREE",
        },
      },
      {
        title: "Mama’s Fish Cakes Add-On",
        description: {
          price: "$5.60",
          extra_info: "Minimum 5",
          diet_type: "GFGluten FREE",
        },
      },
      {
        title: "Five Spiced Chicken Wings Add-On",
        description: {
          price: "$4.00",
          extra_info: "Minimum 5",
          diet_type: "GFGluten FREE",
        },
      },
      {
        title: "Vietnamese Salads Add-On",
        description: {
          price: "$14.00",
          extra_info: "Minimum 5",
          diet_type: "GFGluten FREE",
        },
      },
      {
        title: "Cutlery Set",
        description: {
          price: "$1.50",
          extra_info: "Set",
        },
      },
    ],
  },
  {
    titleMain: "Drinks",
    titleSub: "& Desserts",
    items: [
      {
        title: "Soft Drinks",
        description: {
          price: "$7.50",
          extra_info: "Bottle1.25L",
        },
      },
      {
        title: "Nudie Fruit Juices",
        description: {
          price: "$16.00",
          extra_info: "Bottle2L",
        },
      },
      {
        title: "H2 Coconut Juice",
        description: {
          price: "$13.00",
          extra_info: "Bottle 1L",
        },
      },
      {
        title: "Still Water",
        description: {
          price: "$5.50",
          extra_info: "Bottle1.5L",
        },
      },
      {
        title: "Sparkling Mineral Water",
        description: {
          price: "$7.50",
          extra_info: "Bottle500ml",
        },
      },
      {
        title: "Volcano Choc Pudding",
        description: {
          price: "$9.50",
          extra_info: "Each",
        },
      },
      {
        title: "Creamy Cheesecake",
        description: {
          price: "$9.50",
          extra_info: "Each",
        },
      },
      {
        title: "Apple & Berry Crumble",
        description: {
          price: "$7.50",
          extra_info: "Each",
        },
      },
      {
        title: "Vegan Bounty Protein Ball",
        description: {
          price: "$7.50",
          extra_info: "Each",
        },
      },
    ],
  },
];

const Product = ({ className }: { className?: string }) => {
  return (
    <div className={"flex flex-col " + className}>
      {data.map((menu) => (
        <div
          key={`${menu.titleMain}${menu.titleSub}-product`}
          id={`${menu.titleMain} ${menu.titleSub}`}
          className="border-b pb-[4em] mb-[6em] w-full"
        >
          <div className="w-full flex items-center justify-center mb-[2em]">
            <h1 className="text-4xl font-bold text-shadow-md uppercase flex flex-col items-center border-project-primary leading-relaxed">
              <div className="h-[.5rem] w-[2em] bg-[#bcce34]" />
              <p className="text-project-primary font-bold">
                {menu.titleMain}{" "}
                <span className="font-medium">{menu.titleSub}</span>
              </p>
            </h1>
          </div>
          <div className="flex flex-row flex-wrap w-full px-[8em]">
            {menu.items.map((item) => (
              <div
                className="w-1/3 rounded h-full"
                key={`${item.title}-${menu.titleMain} ${menu.titleSub}`}
              >
                <div className="w-full h-auto relative overflow-hidden">
                  <Image
                    src={ProductImage}
                    width={2000}
                    height={2000}
                    className="w-full h-auto relative z-0 scale-110 transition-all duration-300 hover:scale-100"
                    alt="Sunset in the mountains"
                  />
                  <div className="hover:bg-black/30 absolute z-4 left-0 top-0 w-full h-full items-center justify-center flex text-transparent cursor-pointer hover:text-white [&:hover>button]:bg-project-primary/70 transition-colors duration-300">
                    <button className="rounded-full w-[4rem] h-[4rem] font-bold text-lg text-ellipsis text-center leading-none items-center justify-center flex p-4">
                      View Me
                    </button>
                  </div>
                </div>

                <div className="px-6 py-4 flex flex-col">
                  <div className="flex flex-row justify-between gap-2">
                    <div className="font-bold text-[20px] mb-2 w-3/4 text-clip">
                      {item.title}
                      {item.description.diet_type && (
                        <span className="text-lg text-project-primary">
                          {" " + item.description.diet_type.substring(0, 2)}
                        </span>
                      )}
                    </div>
                    <button className="border h-fit border-project-primary py-2 px-4 text-project-primary uppercase hover:bg-project-primary hover:text-white transition-all duration-500 text-nowrap">
                      + <span className="font-bold">Add</span>
                    </button>
                  </div>
                  <p className="text-gray-700 text-base font-bold">
                    {`${item.description.price} | `}
                    <span className="font-light">
                      {item.description.extra_info}
                    </span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
