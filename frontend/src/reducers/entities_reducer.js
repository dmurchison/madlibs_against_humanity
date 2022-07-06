import { combineReducers } from "redux";
import MadlibsReducer from "./madlibs_reducer";

const entitiesReducer = combineReducers({
    madlibs: MadlibsReducer
});

export default entitiesReducer;