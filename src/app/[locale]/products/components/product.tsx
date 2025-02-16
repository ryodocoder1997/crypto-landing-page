import { useTranslations } from "next-intl";
import React from "react";

const Product = ({ className }: { className?: string }) => {
  const t = useTranslations("products");

  const data = [
    {
      header: t("personalFianancialAdvisory.header"),
      title: t("personalFianancialAdvisory.title"),
      items: [
        t("personalFianancialAdvisory.item1"),
        t("personalFianancialAdvisory.item2"),
        t("personalFianancialAdvisory.item3"),
      ],
    },
    {
      header: t("portfolioManagement.header"),
      title: t("portfolioManagement.title"),
      items: [
        t("portfolioManagement.item1"),
        t("portfolioManagement.item2"),
        t("portfolioManagement.item3"),
      ],
    },
    {
      header: t("tradingSystemDevelopment.header"),
      title: t("tradingSystemDevelopment.title"),
      items: [
        t("tradingSystemDevelopment.item1"),
        t("tradingSystemDevelopment.item2.title"),
      ],
      subItems: [
        {
          index: 1,
          items: [
            t("tradingSystemDevelopment.item2.subItem1"),
            t("tradingSystemDevelopment.item2.subItem2"),
            t("tradingSystemDevelopment.item2.subItem3"),
          ],
        },
      ],
    },
    {
      header: t("realTradingAccountAnalysis.header"),
      title: t("realTradingAccountAnalysis.title"),
      items: [
        t("realTradingAccountAnalysis.item1"),
        t("realTradingAccountAnalysis.item2.title"),
      ],
      subItems: [
        {
          index: 1,
          items: [
            t("realTradingAccountAnalysis.item2.subItem1"),
            t("realTradingAccountAnalysis.item2.subItem2"),
            t("realTradingAccountAnalysis.item2.subItem3"),
          ],
        },
      ],
    },
    {
      header: t("financialInvestmentCourses.header"),
      title: t("financialInvestmentCourses.title"),
      items: [
        t("financialInvestmentCourses.item1"),
        t("financialInvestmentCourses.item2.title"),
      ],
      subItems: [
        {
          index: 1,
          items: [
            t("financialInvestmentCourses.item2.subItem1"),
            t("financialInvestmentCourses.item2.subItem2"),
            t("financialInvestmentCourses.item2.subItem3"),
            t("financialInvestmentCourses.item2.subItem4"),
          ],
        },
      ],
    },
  ];

  return (
    <div className={"flex flex-col " + className}>
      {data.map((menu) => (
        <div
          key={`${menu.header}-product`}
          id={menu.header}
          className="border-b pb-[4em] pt-[calc(var(--nav-height)+2em)] w-full"
        >
          <div className="w-full flex items-center justify-center mb-[2em]">
            <h1 className="text-4xl font-bold text-shadow-md uppercase flex flex-col items-center border-project-primary leading-relaxed">
              <div className="h-[.5rem] w-[2em] bg-[#f8c307]" />
              <p className="text-project-primary font-bold">{menu.header}</p>
            </h1>
          </div>
          <div className="flex flex-row gap-3 flex-wrap w-full pl-6">
            <h1 className="text-[1.5rem] font-bold">{menu.title}</h1>
            <ul key={`${menu.title}-product`} className="list-disc">
              {menu.items.map((item, index) => {
                const subItems = menu.subItems?.find(
                  (subItem) => subItem.index === index
                )?.items;
                return (
                  <>
                    <li key={item}>
                      <p>{item}</p>
                      {subItems && (
                        <ul className="pl-12 list-[circle]">
                          {subItems?.map((subItem, subItemIndex) => (
                            <li key={`${menu.title} - subItem ${subItemIndex}`}>
                              {subItem}
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  </>
                );
              })}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
