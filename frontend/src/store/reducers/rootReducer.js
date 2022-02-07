import authReducer from "./authReducer";
import {createProjectReducer, projectReducer} from "./projectReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    auth: authReducer,
    loadProjects: projectReducer,
    createProject: createProjectReducer
})

export default rootReducer;