import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  idUser : null,
  username: null,
  token: null,
  role: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    sigIn: (state, action) => {
      const {idUser, username, token, role } = action.payload;

      if (!token) {
        console.error("Error not token");
        return;
      }

      Object.assign(state, { isAuthenticated: true, idUser, username, token, role });

      // save in localStorage
      localStorage.setItem("authState", JSON.stringify(state));
    },

    signUp: (state) => {
      Object.assign(state, initialState);
      localStorage.removeItem("authState");
    },

    restoreSession: (state) => {
      const savedAuth = JSON.parse(localStorage.getItem("authState"));
      savedAuth?.token && Object.assign(state, savedAuth);
    },
  },
});

export const {sigIn, signUp, restoreSession} = authSlice.actions;
export default authSlice.reducer;
