import { ACTION_ADD_GROUPS, ACTION_DELETE_GROUPS, ACTION_SHOW_GROUPS_MODAL } from "./actions";

const INITIAL_STATE = [
    {
        id: 1,
        title: "Название группы",
        description: "Краткое описание данной группы",
        showModal: false,
    },
    {
        id: 2,
        title: "Название группы",
        description: "Краткое описание данной группы",
        showModal: false,
    },
    {
        id: 3,
        title: "Название группы",
        description: "Краткое описание данной группы",
        showModal: false,
    },
]

export default function reducer(state = INITIAL_STATE, { type, payload }) {

    switch (type) {
        case ACTION_ADD_GROUPS:
            return [ ...state, {
                id: Date.now(), 
                title: payload.title, 
                description: payload.description,
            } ]; 
        case ACTION_DELETE_GROUPS:
            return state.filter(el => el.id !== payload ? true : false);
        default:
            return state;
    }

}