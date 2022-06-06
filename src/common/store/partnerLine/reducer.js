import { ACTION_ADD_PARTNER_LINE, ACTION_DELETE_PARTNER_LINE } from "./actions";

const INITIAL_STATE = [
    {
        id: 1,
        hrefDark: "./imagesPartnersDark/SocPull.png",
        hrefLight: "./imagesPartnersLight/SocPull.png",
        href: "https://socpull.com",
    },
    {
        id: 2,
        hrefDark: "./imagesPartnersDark/Hackernoon.png",
        hrefLight: "./imagesPartnersLight/Hackernoon.png",
        href: "https://hackernoon.com",
    },
    {
        id: 3,
        hrefDark: "./imagesPartnersDark/Everscale.png",
        hrefLight: "./imagesPartnersLight/Everscale.png",
        href: "https://everscale.network",
    },
    {
        id: 4,
        hrefDark: "./imagesPartnersDark/Portfolio.png",
        hrefLight: "./imagesPartnersLight/Portfolio.png",
        href: "https://socpull.com",
    },
    {
        id: 5,
        hrefDark: "./imagesPartnersDark/SocPull.png",
        hrefLight: "./imagesPartnersLight/SocPull.png",
        href: "https://socpull.com",
    },
    {
        id: 6,
        hrefDark: "./imagesPartnersDark/Hackernoon.png",
        hrefLight: "./imagesPartnersLight/Hackernoon.png",
        href: "https://hackernoon.com",
    },
    {
        id: 7,
        hrefDark: "./imagesPartnersDark/Everscale.png",
        hrefLight: "./imagesPartnersLight/Everscale.png",
        href: "https://everscale.network",
    },
    {
        id: 8,
        hrefDark: "./imagesPartnersDark/Portfolio.png",
        hrefLight: "./imagesPartnersLight/Portfolio.png",
        href: "https://socpull.com",
    },
]

export default function reducer(state = INITIAL_STATE, { type, payload }) {

    switch (type) {
        case ACTION_ADD_PARTNER_LINE:
            return [ ...state, {
                id: Date.now(), 
                href: payload.href,
            } ]; 
        case ACTION_DELETE_PARTNER_LINE:
            return state.filter(el => el.id !== payload ? true : false); 
        default:
            return state;
    }

}