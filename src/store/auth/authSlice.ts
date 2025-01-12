import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: localStorage.getItem("email") || null,
  userId: localStorage.getItem("userId") || null,
  userDetails: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginReducer: (state, action) => {
      state.email = action.payload.email;
      state.userId = action.payload.userId;
      localStorage.setItem("email", action.payload.email);
      localStorage.setItem("userId", action.payload.userId);
    },
    logoutReducer: (state) => {
      state.email = null;
      state.userId = null;
      state.userDetails = null;
      localStorage.removeItem("email");
      localStorage.removeItem("userId");
    },
    getUserDetailsReducer: (state, action) => {
      state.userDetails = action.payload.userDetails;
    },
  },
});

// Action creators are generated for each case reducer function
export const { loginReducer, logoutReducer, getUserDetailsReducer } =
  authSlice.actions;

export default authSlice.reducer;
