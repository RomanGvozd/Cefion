import { ACTION_ADD_ROADMAP, ACTION_DELETE_ROADMAP } from "./actions";

const INITIAL_STATE = [
    {
        id: 1,
        title: "Q1 2022",
        descriptionRU: "— Запуск приложение. Доступный функционал: социальная сеть во всех его пониманиях, мессенджер, кошелёк с монетой евер, новостной блок, блок обучения, блок календаря с рабочей областью и группы",
        descriptionEN: "— Application launch. Available functionality: a social network in all its senses, a messenger, a wallet with an ever coin, a news block, a learning block, a calendar block with a workspace and groups",
    },
    {
        id: 2,
        title: "Q2 2022",
        descriptionRU: "— Запуск приложение. Доступный функционал: социальная сеть во всех его пониманиях, мессенджер, кошелёк с монетой евер, новостной блок, блок обучения, блок календаря с рабочей областью и группы",
        descriptionEN: "— Application launch. Available functionality: a social network in all its senses, a messenger, a wallet with an ever coin, a news block, a learning block, a calendar block with a workspace and groups",
    },
    {
        id: 3,
        title: "Q3 2022",
        descriptionRU: "— Запуск приложение. Доступный функционал: социальная сеть во всех его пониманиях, мессенджер, кошелёк с монетой евер, новостной блок, блок обучения, блок календаря с рабочей областью и группы",
        descriptionEN: "— Application launch. Available functionality: a social network in all its senses, a messenger, a wallet with an ever coin, a news block, a learning block, a calendar block with a workspace and groups",
    },
]

export default function reducer(state = INITIAL_STATE, { type, payload }) {

    switch (type) {
        case ACTION_ADD_ROADMAP:
            return [ ...state, {
                id: Date.now(), 
                title: payload.title, 
                descriptionRU: payload.descriptionRU, 
                descriptionEN: payload.descriptionEN,
            } ]; 
        case ACTION_DELETE_ROADMAP:
            return state.filter(el => el.id !== payload ? true : false); 
        default:
            return state;
    }

}