import { ACTION_ADD_USER, ACTION_DELETE_USER } from "./actions";

const INITIAL_STATE = [
    {
        id: 1,
        name: "Arnold Kirimi",
        tagName: `@arnoldkirimi`,
        password: "111222333",
        roles: ["admin"],
    },
    {
        id: 2,
        name: "Marcelos Alomao",
        tagName: "@marcelosalomao",
        password: "111222333",
        roles: ["user"],
    },
    {
        id: 3,
        name: "Arnold Kirimi",
        tagName: `@arnoldkirimi`,
        password: "111222333",
        roles: ["user"],
    },
    {
        id: 4,
        name: "Antonio Kirimi",
        tagName: `@antoniokirimi`,
        password: "111222333",
        roles: ["user"],
    },
    {
        id: 5,
        name: "Antonio Kirimi",
        tagName: `@antoniokirimi`,
        password: "111222333",
        roles: [ "copywriter"],
    },
    {
        id: 6,
        name: "Antonio Kirimi",
        tagName: `@antoniokirimi`,
        password: "111222333",
        roles: [ "copywriter"],
    },
]

export default function reducer(state = INITIAL_STATE, { type, payload }) {

    switch (type) {
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