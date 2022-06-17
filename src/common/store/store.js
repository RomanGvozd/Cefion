import { createStore, combineReducers } from "redux";
import themeReducer from "./theme/reducer";
import languageReducer from "./language/reducer";
import roadmapReducer from './roadmap/reducer';
import mediaReducer from './media/reducer';
import faqsReducer from './faqs/reducer';
import teamReducer from './team/reducer';
import groupsReducer from './groups/reducer';
import newsDraftsReducer from './newsDrafts/reducer';
import newsReviewReducer from './newsReview/reducer';
import newsPublishReducer from './newsPublish/reducer';
import usersReducer from './users/reducer';

const root = combineReducers({
    theme: themeReducer,
    language: languageReducer,
    roadmap: roadmapReducer,
    media: mediaReducer,
    faqs: faqsReducer,
    team: teamReducer,
    groups: groupsReducer,
    newsDrafts: newsDraftsReducer,
    newsReview: newsReviewReducer,
    newsPublish: newsPublishReducer,
    users: usersReducer,
});

export default createStore(root);