import React from "react";

const data = [
  {
    header: "Personal Financial Adisory",
    title: "Personal Financial Advisory at VietAlgoTrade",
    items: [
      "At VietAlgoTrade, we understand that each individual has unique financial goals and different investment paths. Our Personal Financial Advisory service is designed to help you optimize investment decisions, especially in the dynamic financial market. We apply advanced trading algorithms and in-depth data analysis methods to develop strategies that are accurate and tailored to your financial capacity and risk appetite.",
      "By combining expert advice with automated trading technology (algorithmic trading), we not only help you build a solid financial plan but also support you in seizing potential investment opportunities with confidence and high efficiency. Whether you're a beginner or an experienced investor, our services are committed to providing the most suitable financial solutions to help you achieve your long-term financial goals.",
      "VietAlgoTrade – Where trading strategies turn into successful financial decisions.",
    ],
  },
  {
    header: "Portfolio Management",
    title: "Portfolio Management at VietAlgoTrade",
    items: [
      "At VietAlgoTrade, our Portfolio Management service helps you build and maintain an efficient investment portfolio, optimizing returns and minimizing risks in a constantly fluctuating financial market. We combine artificial intelligence and advanced trading algorithms to analyze and monitor investment opportunities regularly, adjusting your portfolio in a flexible and intelligent manner.",
      "We understand that each investor has unique financial goals, so our portfolio management service is personalized to meet your specific needs and risk appetite. By utilizing big data analysis tools and automated trading algorithms, you will always receive accurate investment decisions, helping you optimize long-term profits.",
      "Whether you're investing in stocks, forex, or other financial assets, VietAlgoTrade is committed to supporting you in managing and growing your portfolio in a professional, efficient, and sustainable manner.",
    ],
  },
  {
    header: "Trading System Development",
    title: "Trading System Development Service at VietAlgoTrade",
    items: [
      "At VietAlgoTrade, we offer a specialized algorithmic trading system development service, designed to optimize trading strategies and performance in the financial markets. Based on a solid data foundation and advanced algorithms, we help investors automate their trading processes, minimize risks, and enhance decision-making speed and accuracy.",
      "Our services include:",
      "With a team of experts experienced in both finance and technology, VietAlgoTrade is committed to delivering powerful algorithmic trading solutions, helping investors enhance their trading efficiency under all market conditions.",
    ],
    subItems: [
      {
        index: 1,
        items: [
          "Custom Trading Strategy Development: Analyzing and developing strategies that align with investment goals and the characteristics of the financial markets.",
          "Trading System Optimization: Utilizing analytical algorithms to optimize profits and minimize losses under changing market conditions.",
          "Integration of Trading Systems into Real Platforms: We support the integration of trading systems into popular online trading platforms, ensuring high practicality and feasibility.",
        ],
      },
    ],
  },
  {
    header: "Real Trading Account Analysis",
    title: "Real Trading Account Analysis Service at VietAlgoTrade",
    items: [
      "At VietAlgoTrade, we offer a real trading account analysis service that helps investors assess and optimize their trading performance in the financial markets. By leveraging powerful algorithmic analysis tools, we provide detailed insights into executed trading strategies, offering improvement suggestions and helping investors identify both opportunities and risks during their trading process.",
      "Our services include:",
      "With a team of experts experienced in finance and data analysis, VietAlgoTrade is committed to providing in-depth analysis and practical solutions that help improve your trading results in the financial markets.",
    ],
    subItems: [
      {
        index: 1,
        items: [
          "Trading Performance Analysis: Evaluating the trading performance of real accounts, highlighting strengths and weaknesses in trading strategies.",
          "Risk Identification and Minimization: Analyzing the risk factors in trading strategies and offering optimal solutions to minimize risk.",
          "Strategy Optimization Recommendations: Based on real data, we provide specific recommendations on how to optimize trading strategies to improve profitability and overall performance.",
        ],
      },
    ],
  },
  {
    header: "Financial Investment Courses",
    title: "Financial Investment Course at VietAlgoTrade",
    items: [
      "At VietAlgoTrade, we offer in-depth financial investment courses specifically designed to help investors in Vietnam master the essential knowledge of the financial markets and algorithmic trading. Our courses are not just theoretical; they also cover practical strategies tailored to the characteristics and trends of the financial market.",
      "Our course services include:",
      "With the motto 'Learning by doing', VietAlgoTrade is committed to providing a practical and effective learning environment, helping you build a solid foundation to become a successful investor in the financial market.",
    ],
    subItems: [
      {
        index: 1,
        items: [
          "Solid foundational knowledge: Students will be equipped with basic knowledge of financial markets, types of assets, and financial analysis methods.",
          "Practical investment strategies: Detailed guidance on effective investment strategies, from market trend analysis to using algorithmic tools to optimize returns.",
          "Algorithmic trading application: Skills for applying algorithmic trading to automate investment strategies and maximize trading efficiency.",
          "Learn from experts: The course is taught by experts with rich experience in finance and technology, ensuring that you gain the most insightful and practical knowledge.",
        ],
      },
    ],
  },
];

const Product = ({ className }: { className?: string }) => {
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
