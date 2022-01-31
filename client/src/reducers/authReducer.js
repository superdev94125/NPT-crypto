// import * as actions from "../actions/types";

// const initialState = {
//   authData: null,
//   autherror: null,
//   isAuthenticated: false,
// };

// export const authReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case actions.AUTH:
//       localStorage.setItem("profile", JSON.stringify({ ...action?.data }));
//       return {
//         ...state,
//         authData: action.data,
//         autherror: null,
//         isAuthenticated: true,
//       };
//     case actions.LOGIN_FAIL:
//       return {
//         ...state,
//         autherror: action.error,
//       };
//     case actions.LOGOUT:
//       localStorage.clear();
//       return {
//         ...state,
//         authData: null,
//         autherror: null,
//         isAuthenticated: false,
//       };
//     default:
//       return state;
//   }
// };

import { createSlice } from "@reduxjs/toolkit";
import * as api from "../api/index";

export const slice = createSlice({
  name: 'auth',
  initialState: {
    authData: null,
    authError: null,
    isAuthenticated: false,
  },
  reducers: {
    signinSuccess: (state, action) => {
      localStorage.setItem("profile", JSON.stringify(action.payload));
      state.authData = action.payload;
      state.isAuthenticated = true;
    },
    siginError: (state, action) => {
      state.authError = action.payload;
    }
  }
});

export const { signinSuccess, signinError } = slice.actions;

export const signin = (formData, history) => async dispatch => {
  try {
    console.log(formData);return;
    const { data } = await api.signIn(formData);
    dispatch(signinSuccess(data));
    history.push("/panel");
  } catch (err) {
    const error = err.response.data.msg;
    if (error) {
      dispatch(signinError(error))
    }
  }
}

export const { authData, AuthError, isAuthenticated } = state => state.auth;

export default slice.reducer;
