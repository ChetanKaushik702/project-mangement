import {
  CREATE_PROJECT_FAIL,
  CREATE_PROJECT_REQUEST,
  CREATE_PROJECT_RESET,
  CREATE_PROJECT_SUCCESS,
  GET_ALL_PROJECTS_FAIL,
  GET_ALL_PROJECTS_REQUEST,
  GET_ALL_PROJECTS_RESET,
  GET_ALL_PROJECTS_SUCCESS,
} from "../constants/projectConstants";

export const projectReducer = (state = { projects: [] }, action) => {
  switch (action.type) {
    case GET_ALL_PROJECTS_REQUEST:
      return {
        success: false,
        ...state,
      };
    case GET_ALL_PROJECTS_SUCCESS:
      return {
        success: true,
        projects: action.payload.projects,
      };
    
    case GET_ALL_PROJECTS_FAIL:
      return {
        success: false,
        ...state,
        error: action.payload,
      };
    case GET_ALL_PROJECTS_RESET:
        return {
            projects: []
        }
    default:
      return state;
  }
};

export const createProjectReducer = (state = { project: [] }, action) => {
    switch (action.type) {
        case CREATE_PROJECT_REQUEST:
            return {
                isCreated: false,
                ...state,
            }
        case CREATE_PROJECT_SUCCESS:
            return {
                isCreated: true,
                project: action.payload.project,
            }
        case CREATE_PROJECT_FAIL:
            return {
                isCreated: false,
                ...state,
                error: action.payload
            }
        case CREATE_PROJECT_RESET: {
            return {
                project: []
            }
        }
        default:
            return state;
    }
}
