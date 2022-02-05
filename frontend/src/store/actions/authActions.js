import axios from "axios";
import {
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_USER_FAIL,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
} from "../constants/authConstants";
export const registerUser = (userData) => async (dispatch) => {
  try {
    dispatch({ type: REGISTER_USER_REQUEST });

    const config = { headers: { "Content-Type": "application/json" } };
    const { data } = await axios.post(
      `/api/v1/user/register`,
      userData,
      config
    );

    dispatch({ type: REGISTER_USER_SUCCESS, payload: data.user });
  } catch (error) {
    dispatch({
      type: REGISTER_USER_FAIL,
      payload: error.response.data.message,
    });
  }
};
export const logout = () => async (dispatch) => {
  try {
    await axios.get(`/api/v1/user/logout`);
    dispatch({ type: LOGOUT_SUCCESS })
  } catch(error) {
    dispatch({
      type: LOGOUT_FAIL,
      payload: error.response.data.message
    })
  }
}
export const login = (userData) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });

    const config = { headers: { "Content-Type": "application/json" } };
    const { data } = await axios.post(`/api/v1/user/login`, userData, config);

    dispatch({ type: LOGIN_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,
      payload: error.response.data.message
    })
  }
}