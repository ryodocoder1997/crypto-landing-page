import { MenuGroup } from "../model.ts/public";

export const NAVBAR_LINK_MENU: MenuGroup[] = [
    {
        name: "Home",
        url: '/',
        items: []
    },
    {
        name: "Menu",
        url: '/collections',
        items: [
            {
                url: '/collections#Individual Lunch Boxes',
                name: 'Individual Lunch Boxes'
            },
            {
                url: '/collections#Tea Time Boxes',
                name: 'Tea Time Boxes'
            },
            {
                url: "/collections#Chao's Top Picks",
                name: 'Chao\'s Top Picks'
            },
            {
                url: "/collections#Chao's Platters",
                name: 'Chao\'s Platters'
            },
            {
                url: '/collections#Funeral & Wake Catering',
                name: 'Funeral & Wake Catering',
            },
            {
                url: '/collections#Add -Ons',
                name: 'Add-Ons'
            },
            {
                url: '/collections#Drinks & Desserts',
                name: 'Drinks & Desserts'
            }
        ]
    },
    {
        name: "Corporate",
        url: '/corporate',
        items: []
    },
    {
        name: "Events",
        url: '/events',
        items: [
            {
                url: '/events/happy-new-year',
                name: 'Happy New Year'
            },
            {
                url: '/events/international-women-day',
                name: 'International Women’s Day'
            },
            {
                url: '/events/easter-catering',
                name: 'Easter Catering'
            },
            {
                url: '/events/melbourne-cup',
                name: 'Melbourne Cup'
            },
            {
                url: '/events/merry-christmas',
                name: 'Merry Christmas'
            },
            {
                url: '/events/corporate-catering',
                name: 'Corporate Events'
            },
            {
                url: '/events/event-the-wake',
                name: 'The Wake'
            },
        ]
    },
    {
        name: "About us",
        url: '/about-us',
        items: [
            {
                url: '/about-us/our-services',
                name: 'Our Services'
            },
            {
                url: '/about-us/how-it-works',
                name: 'How It Works'
            },
            {
                url: '/about-us/faqs',
                name: 'FAQs'
            },
        ]
    },
    {
        name: "Contact",
        url: '/contact',
        items: []
    }
]