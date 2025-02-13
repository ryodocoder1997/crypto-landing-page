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
                url: '/accounts/beginner',
                name: 'Account: 0 - 1,000 USD'
            },
            {
                url: '/accounts/standard',
                name: 'Account: 1,000 - 5,000 USD'
            },
            {
                url: '/accounts/premium',
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
        url: '/about-us',
        items: [
            {
                url: '/about-us/our-services',
                name: 'Market Forecast'
            },
            {
                url: '/about-us/how-it-works',
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