import { CREATE_PROJECT_FAIL, CREATE_PROJECT_REQUEST, CREATE_PROJECT_SUCCESS } from "../constants/projectConstants";

const projectReducer = (state = { projects: [] }, action) => {
    switch(action.type) {
        case CREATE_PROJECT_REQUEST:
            return {
                success: false,
                ...state
            }
        case CREATE_PROJECT_SUCCESS:
            return {
                success: true,
                projects: action.payload.projects
            }
        case CREATE_PROJECT_FAIL:
            return {
                success: false,
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}

export default projectReducer;