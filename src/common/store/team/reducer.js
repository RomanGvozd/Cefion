import { ACTION_ADD_USER_TEAM, ACTION_DELETE_USER_TEAM} from "./actions";

const INITIAL_STATE = [
    {
        id: 1,
        nameRU: "Имя Фамилия",
        nameEN: "Name Surname",
        specialization: "CEO",
    },
    {
        id: 2,
        nameRU: "Имя Фамилия",
        nameEN: "Name Surname",
        specialization: "CEO",
    },
    {
        id: 3,
        nameRU: "Имя Фамилия",
        nameEN: "Name Surname",
        specialization: "CEO",
    },
    {
        id: 4,
        nameRU: "Имя Фамилия",
        nameEN: "Name Surname",
        specialization: "CEO",
    },
    {
        id: 5,
        nameRU: "Имя Фамилия",
        nameEN: "Name Surname",
        specialization: "CEO",
    },
    {
        id: 6,
        nameRU: "Имя Фамилия",
        nameEN: "Name Surname",
        specialization: "CEO",
    },
    {
        id: 7,
        nameRU: "Имя Фамилия",
        nameEN: "Name Surname",
        specialization: "CEO",
    },
    {
        id: 8,
        nameRU: "Имя Фамилия",
        nameEN: "Name Surname",
        specialization: "CEO",
    },
]

export default function reducer(state = INITIAL_STATE, { type, payload }) {

    switch (type) {
        case ACTION_ADD_USER_TEAM:
            return [ ...state, {
                id: Date.now(), 
                nameRU: payload.nameRU, 
                nameEN: payload.nameEN, 
                specialization: payload.specialization,
            } ]; 
        case ACTION_DELETE_USER_TEAM:
            return state.filter(el => el.id !== payload ? true : false); 
        default:
            return state;
    }

}