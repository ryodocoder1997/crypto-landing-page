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
                url: '/collections/chaos-lunch-box',
                name: 'Individual Lunch Boxes'
            },
            {
                url: '/collections/tea-time-boxes',
                name: 'Tea Time Boxes'
            },
            {
                url: '/collections/chao-top-picks',
                name: 'Chao\'s Top Picks'
            },
            {
                url: '/collections/chaos-platters',
                name: 'Chao\'s Platters'
            },
            {
                url: '/collections/funeral-and-wake-catering',
                name: 'Funeral & Wake Catering',
            },
            {
                url: '/collections/chaos-add-ons',
                name: 'Add-Ons'
            },
            {
                url: '/collections/drinks-desserts',
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
    }
]