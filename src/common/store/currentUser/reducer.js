import { ACTION_ADD_CURRENT_USER } from "./actions";

const INITIAL_STATE = {
    id: 1,
    username: "Arnold Kirimi", 
    tagName: "@arnoldkirimi", 
    roles: ["superadmin"],
}

export default function reducer(state = INITIAL_STATE, { type, payload }) {

    switch (type) {
        case ACTION_ADD_CURRENT_USER:
            return {
                username: payload.username, 
                tagName: `@${payload.username.toLowerCase()}`, 
                roles: ["superadmin"],
                // tagName: payload.tagName, 
                // roles: payload.roles,
            }; 
        default:
            return state;
    }

}