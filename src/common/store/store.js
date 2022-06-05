import { createStore, combineReducers } from "redux";
import themeReducer from "./theme/reducer";
import languageReducer from "./language/reducer";
import roadmapReducer from './roadmap/reducer';
import mediaReducer from './media/reducer';
import faqsReducer from './faqs/reducer';


const root = combineReducers({
    theme: themeReducer,
    language: languageReducer,
    roadmap: roadmapReducer,
    media: mediaReducer,
    faqs: faqsReducer,
});

export default createStore(root);