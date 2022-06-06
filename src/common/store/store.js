import { createStore, combineReducers } from "redux";
import themeReducer from "./theme/reducer";
import languageReducer from "./language/reducer";
import roadmapReducer from './roadmap/reducer';
import mediaReducer from './media/reducer';
import faqsReducer from './faqs/reducer';
import teamReducer from './team/reducer';
import partnerLineReducer from './partnerLine/reducer';


const root = combineReducers({
    theme: themeReducer,
    language: languageReducer,
    roadmap: roadmapReducer,
    media: mediaReducer,
    faqs: faqsReducer,
    team: teamReducer,
    partnerLine: partnerLineReducer,
});

export default createStore(root);