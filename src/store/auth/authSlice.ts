import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: localStorage.getItem("email") || null,
  userId: localStorage.getItem("userId") || null,
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
      localStorage.removeItem("email");
      localStorage.removeItem("userId");
    },
  },
});

// Action creators are generated for each case reducer function
export const { loginReducer, logoutReducer } = authSlice.actions;

export default authSlice.reducer;
