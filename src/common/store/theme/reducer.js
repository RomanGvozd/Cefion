import { CHANGE_THEME } from "./actions";

const INITIAL_STATE = {
    theme: "dark",
}

export default function reducer(state = INITIAL_STATE, { type, payload}) {

    switch (type) {
        case CHANGE_THEME:
            return { ...state, theme: payload };      
        default:
            return state;
    }
}