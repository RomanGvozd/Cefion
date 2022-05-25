import { createStore, combineReducers } from "redux";
import themeReducer from "./theme/reducer";
import languageReducer from "./language/reducer";

const root = combineReducers({
    theme: themeReducer,
    language: languageReducer,
});

export default createStore(root);