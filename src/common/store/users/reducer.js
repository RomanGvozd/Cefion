import { ACTION_ADD_USER, ACTION_DELETE_USER, ACTION_GET_USERS } from "./actions";

const INITIAL_STATE = []

export default function reducer(state = INITIAL_STATE, { type, payload }) {

    switch (type) {
        case ACTION_GET_USERS:
            console.log(payload)
            return payload
        case ACTION_ADD_USER:
            return [ ...state, {
                id: Date.now(), 
                name: payload.name,
                tegName: payload.tegName,
                password: payload.password,
                roles: payload.roles,
            } ]; 
        case ACTION_DELETE_USER:
            return state.filter(el => el.id !== payload ? true : false);
        default:
            return state;
    }

}