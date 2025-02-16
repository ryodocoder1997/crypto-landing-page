import { MenuGroup } from "../model.ts/public";

export const NAVBAR_LINK_MENU: MenuGroup[] = [
    {
        name: "Home",
        url: '/',
        items: []
    },
    {
        name: "Products",
        url: '/products',
        items: [
            {
                url: '/products#Personal Financial Adisory',
                name: 'Personal Financial Adisory'
            },
            {
                url: '/products#Portfolio Management',
                name: 'Portfolio Management'
            },
            {
                url: "/products#Trading System Development",
                name: 'Trading System Development'
            },
            {
                url: "/products#Real Trading Account Analysis",
                name: 'Real Trading Account Analysis'
            },
            {
                url: '/products#Financial Investment Courses',
                name: 'Financial Investment Courses',
            }
        ]
    },
    {
        name: "Client Accounts",
        url: '/accounts',
        items: [
            {
                url: '/accounts/type1',
                name: 'Account: 0 - 1,000 USD'
            },
            {
                url: '/accounts/type2',
                name: 'Account: 1,000 - 5,000 USD'
            },
            {
                url: '/accounts/type3',
                name: 'Account: ≥ 5,000 USD'
            }
        ]
    },
    {
        name: "News & Events",
        url: '/news-events',
        items: [
            {
                url: '/news-events/events',
                name: 'Events'
            },
            {
                url: '/news-events/news',
                name: 'Market News'
            },
        ]
    },
    {
        name: "Community",
        url: '/community',
        items: [
            {
                url: '/community/market-forecast',
                name: 'Market Forecast'
            },
            {
                url: '/community/financial-trading-research',
                name: 'Financial Trading Research'
            },
        ]
    },
    {
        name: "Contact",
        url: '/contact',
        items: [
        ]
    }
]

export const locales = ["en", "vi"];