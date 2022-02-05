import axios from "axios";
import {
  CREATE_PROJECT_FAIL,
  CREATE_PROJECT_REQUEST,
  CREATE_PROJECT_SUCCESS,
  GET_ALL_PROJECTS_FAIL,
  GET_ALL_PROJECTS_REQUEST,
  GET_ALL_PROJECTS_SUCCESS,
} from "../constants/projectConstants";

export const createProject = (project) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_PROJECT_REQUEST });

    const config = { headers: { "Content-Type": "application/json" } };
    const { data } = await axios.post(
      `/api/v1/project/create`,
      project,
      config
    );
    dispatch({ type: CREATE_PROJECT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: CREATE_PROJECT_FAIL,
      payload: error.response.data.message,
    });
  }
};
export const getAllProjects = () => async(dispatch) => {
  try {
    dispatch({ type: GET_ALL_PROJECTS_REQUEST });
    const { data } = await axios.get(`/api/v1/project/fetch`);
    dispatch({ type: GET_ALL_PROJECTS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GET_ALL_PROJECTS_FAIL,
      payload: error.response.data.message,
    });
  }
}