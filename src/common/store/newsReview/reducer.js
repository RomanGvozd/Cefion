import { ACTION_ADD_NEWS_REVIEW, ACTION_DELETE_NEWS_REVIEW, ACTION_EDIT_NEWS_REVIEW } from "./actions";

const INITIAL_STATE = [
    {
        id: 11,
        titleRU: "Выведение крипторынка «на свет» не решает проблемы правоприменения: председатель CFTC",
        titleEN: "Bringing crypto market 'into the light' doesn’t address enforcement: CFTC chair",
        descriptionRU: "Выведение крипторынка «на свет» не решает проблемы правоприменения: председатель CFTC",
        descriptionEN: "Bringing crypto market 'into the light' doesn’t address enforcement: CFTC chair",
        author: "Yashu Gola",
        date: "2022-03-06 10:08",
        type: "Blockchain",
        hashtags: ["#data", "#microsoft", "#excel", "#python"],
    },
    {
        id: 22,
        titleRU: "Выведение крипторынка «на свет» не решает проблемы правоприменения: председатель CFTC",
        titleEN: "Bringing crypto market 'into the light' doesn’t address enforcement: CFTC chair",
        descriptionRU: "Выведение крипторынка «на свет» не решает проблемы правоприменения: председатель CFTC",
        descriptionEN: "Bringing crypto market 'into the light' doesn’t address enforcement: CFTC chair",
        author: "Yashu Gola",
        date: "2022-04-06 10:08",
        type: "Blockchain",
        hashtags: ["#data", "#microsoft", "#excel", "#python"],
    },
    {
        id: 33,
        titleRU: "Выведение крипторынка «на свет» не решает проблемы правоприменения: председатель CFTC",
        titleEN: "Bringing crypto market 'into the light' doesn’t address enforcement: CFTC chair",
        descriptionRU: "Выведение крипторынка «на свет» не решает проблемы правоприменения: председатель CFTC",
        descriptionEN: "Bringing crypto market 'into the light' doesn’t address enforcement: CFTC chair",
        author: "Yashu Gola",
        date: "2022-01-06 10:08",
        type: "Blockchain",
        hashtags: ["#data", "#microsoft", "#excel", "#python"],
    },
    {
        id: 44,
        titleRU: "Выведение крипторынка «на свет» не решает проблемы правоприменения: председатель CFTC",
        titleEN: "Bringing crypto market 'into the light' doesn’t address enforcement: CFTC chair",
        descriptionRU: "Выведение крипторынка «на свет» не решает проблемы правоприменения: председатель CFTC",
        descriptionEN: "Bringing crypto market 'into the light' doesn’t address enforcement: CFTC chair",
        author: "Yashu Gola",
        date: "2022-05-06 10:08",
        type: "Blockchain",
        hashtags: ["#data", "#microsoft", "#excel", "#python"],
    },
    {
        id: 55,
        titleRU: "Выведение крипторынка «на свет» не решает проблемы правоприменения: председатель CFTC",
        titleEN: "Bringing crypto market 'into the light' doesn’t address enforcement: CFTC chair",
        descriptionRU: "Выведение крипторынка «на свет» не решает проблемы правоприменения: председатель CFTC",
        descriptionEN: "Bringing crypto market 'into the light' doesn’t address enforcement: CFTC chair",
        author: "Yashu Gola",
        date: "2022-06-06 10:08",
        type: "Blockchain",
        hashtags: ["#data", "#microsoft", "#excel", "#python"],
    },
    {
        id: 66,
        titleRU: "Выведение крипторынка «на свет» не решает проблемы правоприменения: председатель CFTC",
        titleEN: "Bringing crypto market 'into the light' doesn’t address enforcement: CFTC chair",
        descriptionRU: "Выведение крипторынка «на свет» не решает проблемы правоприменения: председатель CFTC",
        descriptionEN: "Bringing crypto market 'into the light' doesn’t address enforcement: CFTC chair",
        author: "Yashu Gola",
        date: "2022-06-06 10:08",
        type: "Blockchain",
        hashtags: ["#data", "#microsoft", "#excel", "#python"],
    },
    {
        id: 77,
        titleRU: "Выведение крипторынка «на свет» не решает проблемы правоприменения: председатель CFTC",
        titleEN: "Bringing crypto market 'into the light' doesn’t address enforcement: CFTC chair",
        descriptionRU: "Выведение крипторынка «на свет» не решает проблемы правоприменения: председатель CFTC",
        descriptionEN: "Bringing crypto market 'into the light' doesn’t address enforcement: CFTC chair",
        author: "Yashu Gola",
        date: "2022-06-06 10:08",
        type: "Blockchain",
        hashtags: ["#data", "#microsoft", "#excel", "#python"],
    },
    {
        id: 88,
        titleRU: "Выведение крипторынка «на свет» не решает проблемы правоприменения: председатель CFTC",
        titleEN: "Bringing crypto market 'into the light' doesn’t address enforcement: CFTC chair",
        descriptionRU: "Выведение крипторынка «на свет» не решает проблемы правоприменения: председатель CFTC",
        descriptionEN: "Bringing crypto market 'into the light' doesn’t address enforcement: CFTC chair",
        author: "Yashu Gola",
        date: "2022-06-10 14:30",
        type: "Blockchain",
        hashtags: ["#data", "#microsoft", "#excel", "#python"],
    },
]

export default function reducer(state = INITIAL_STATE, { type, payload }) {

    switch (type) {
        case ACTION_ADD_NEWS_REVIEW:
            return [ ...state, {
                id: Date.now(), 
                titleRU: payload.titleRU, 
                titleEN: payload.titleEN, 
                descriptionRU: payload.descriptionRU,
                descriptionEN: payload.descriptionEN,
                date: payload.date,
                type: payload.type,
                hashtags: payload.hashtags,
            } ]; 
        case ACTION_DELETE_NEWS_REVIEW:
            return state.filter(el => el.id !== payload ? true : false); 
        case ACTION_EDIT_NEWS_REVIEW:
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