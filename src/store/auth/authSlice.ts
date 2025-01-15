import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userId: localStorage.getItem("userId") || null,
  userDetails: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginReducer: (state, action) => {
      state.userId = action.payload.userId;
      localStorage.setItem("userId", action.payload.userId);
    },
    logoutReducer: (state) => {
      state.userId = null;
      state.userDetails = null;
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
