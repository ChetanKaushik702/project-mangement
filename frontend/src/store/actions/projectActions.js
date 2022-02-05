import { CREATE_PROJECT } from '../constants/projectConstants';
 
export const createProject = (project) => (dispatch, getState) => {
    // make async calls to the database
    dispatch({ type: CREATE_PROJECT,  project});
}