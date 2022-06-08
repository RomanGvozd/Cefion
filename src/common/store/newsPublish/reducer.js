import { ACTION_ADD_NEWS_PUBLISH, ACTION_DELETE_NEWS_PUBLISH, ACTION_EDIT_NEWS_PUBLISH } from "./actions";

const INITIAL_STATE = [
    {
        id: 111,
        titleRU: "Выведение крипторынка «на свет» не решает проблемы правоприменения: председатель CFTC",
        titleEN: "Bringing crypto market 'into the light' doesn’t address enforcement: CFTC chair",
        descriptionRU: "Выведение крипторынка «на свет» не решает проблемы правоприменения: председатель CFTC",
        descriptionEN: "Bringing crypto market 'into the light' doesn’t address enforcement: CFTC chair",
        author: "Yashu Gola",
    },
    {
        id: 222,
        titleRU: "Выведение крипторынка «на свет» не решает проблемы правоприменения: председатель CFTC",
        titleEN: "Bringing crypto market 'into the light' doesn’t address enforcement: CFTC chair",
        descriptionRU: "Выведение крипторынка «на свет» не решает проблемы правоприменения: председатель CFTC",
        descriptionEN: "Bringing crypto market 'into the light' doesn’t address enforcement: CFTC chair",
        author: "Yashu Gola",
    },
    {
        id: 333,
        titleRU: "Выведение крипторынка «на свет» не решает проблемы правоприменения: председатель CFTC",
        titleEN: "Bringing crypto market 'into the light' doesn’t address enforcement: CFTC chair",
        descriptionRU: "Выведение крипторынка «на свет» не решает проблемы правоприменения: председатель CFTC",
        descriptionEN: "Bringing crypto market 'into the light' doesn’t address enforcement: CFTC chair",
        author: "Yashu Gola",
    },
    {
        id: 444,
        titleRU: "Выведение крипторынка «на свет» не решает проблемы правоприменения: председатель CFTC",
        titleEN: "Bringing crypto market 'into the light' doesn’t address enforcement: CFTC chair",
        descriptionRU: "Выведение крипторынка «на свет» не решает проблемы правоприменения: председатель CFTC",
        descriptionEN: "Bringing crypto market 'into the light' doesn’t address enforcement: CFTC chair",
        author: "Yashu Gola",
    },
    {
        id: 555,
        titleRU: "Выведение крипторынка «на свет» не решает проблемы правоприменения: председатель CFTC",
        titleEN: "Bringing crypto market 'into the light' doesn’t address enforcement: CFTC chair",
        descriptionRU: "Выведение крипторынка «на свет» не решает проблемы правоприменения: председатель CFTC",
        descriptionEN: "Bringing crypto market 'into the light' doesn’t address enforcement: CFTC chair",
        author: "Yashu Gola",
    },
    {
        id: 666,
        titleRU: "Выведение крипторынка «на свет» не решает проблемы правоприменения: председатель CFTC",
        titleEN: "Bringing crypto market 'into the light' doesn’t address enforcement: CFTC chair",
        descriptionRU: "Выведение крипторынка «на свет» не решает проблемы правоприменения: председатель CFTC",
        descriptionEN: "Bringing crypto market 'into the light' doesn’t address enforcement: CFTC chair",
        author: "Yashu Gola",
    },
    {
        id: 777,
        titleRU: "Выведение крипторынка «на свет» не решает проблемы правоприменения: председатель CFTC",
        titleEN: "Bringing crypto market 'into the light' doesn’t address enforcement: CFTC chair",
        descriptionRU: "Выведение крипторынка «на свет» не решает проблемы правоприменения: председатель CFTC",
        descriptionEN: "Bringing crypto market 'into the light' doesn’t address enforcement: CFTC chair",
        author: "Yashu Gola",
    },
]

export default function reducer(state = INITIAL_STATE, { type, payload }) {

    switch (type) {
        case ACTION_ADD_NEWS_PUBLISH:
            return [ ...state, {
                id: Date.now(), 
                titleRU: payload.titleRU, 
                titleEN: payload.titleEN, 
                descriptionRU: payload.descriptionRU,
                descriptionEN: payload.descriptionEN,
            } ]; 
        case ACTION_DELETE_NEWS_PUBLISH:
            return state.filter(el => el.id !== payload ? true : false); 
        case ACTION_EDIT_NEWS_PUBLISH:
            return state.map(item => {
                if (item.id === payload.id) {
                    item.titleRU = payload.titleRU
                    item.titleEN = payload.titleEN
                    item.descriptionRU = payload.descriptionRU
                    item.descriptionEN = payload.descriptionEN
                }
                return item
            })
        default:
            return state;
    }

}