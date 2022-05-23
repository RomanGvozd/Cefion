import { CHANGE_LANGUAGE } from "./actions";

const INITIAL_STATE = {
    language: "RU",
}

export default function reducer(state = INITIAL_STATE, { type, payload}) {

    switch (type) {
        case CHANGE_LANGUAGE:
            return { ...state, language: payload };      
        default:
            return state;
    }
}