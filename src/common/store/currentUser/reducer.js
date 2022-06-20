import { ACTION_ADD_CURRENT_USER,ACTION_CHANGE_IS_LOGGED } from "./actions";

const INITIAL_STATE = {
    isLogged: !!localStorage.getItem("tokens")
}

export default function reducer(state = INITIAL_STATE, { type, payload }) {

    switch (type) {
        case ACTION_ADD_CURRENT_USER:
            return {
                username: payload.username, 
                tagName: payload.tagName, 
                roles: payload.roles,
                isLogged:true
            }; 
            case ACTION_CHANGE_IS_LOGGED:
                return {...state, isLogged:payload}
        default:
            return state;
    }

}