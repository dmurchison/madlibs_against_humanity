import { combineReducers } from "redux";

import MadlibsReducer from "./madlibs_reducer";
import usersReducer from './users_reducer';

const entitiesReducer = combineReducers({
    madlibs: MadlibsReducer,
    users: usersReducer
});

export default entitiesReducer; 