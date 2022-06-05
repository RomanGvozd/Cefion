import { ACTION_ADD_MEDIA, ACTION_DELETE_MEDIA } from "./actions";

const INITIAL_STATE = [
    {
        id: 1,
        titleRU: "Выведение крипторынка «на свет» не решает проблемы правоприменения: председатель CFTC",
        titleEN: "Bringing crypto market 'into the light' doesn’t address enforcement: CFTC chair",
        descriptionRU: "Выведение крипторынка «на свет» не решает проблемы правоприменения: председатель CFTC",
        descriptionEN: "Bringing crypto market 'into the light' doesn’t address enforcement: CFTC chair",
        href: "https://socpull.com/",
    },
    {
        id: 2,
        titleRU: "Выведение крипторынка «на свет» не решает проблемы правоприменения: председатель CFTC",
        titleEN: "Bringing crypto market 'into the light' doesn’t address enforcement: CFTC chair",
        descriptionRU: "Выведение крипторынка «на свет» не решает проблемы правоприменения: председатель CFTC",
        descriptionEN: "Bringing crypto market 'into the light' doesn’t address enforcement: CFTC chair",
        href: "https://socpull.com/",
    },
]

export default function reducer(state = INITIAL_STATE, { type, payload }) {

    switch (type) {
        case ACTION_ADD_MEDIA:
            return [ ...state, {
                id: Date.now(), 
                titleRU: payload.titleRU, 
                titleEN: payload.titleEN, 
                descriptionRU: payload.descriptionRU,
                descriptionEN: payload.descriptionEN,
            } ]; 
        case ACTION_DELETE_MEDIA:
            return state.filter(el => el.id !== payload ? true : false); 
        default:
            return state;
    }

}