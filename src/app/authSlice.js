import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: localStorage.getItem("token") || sessionStorage.getItem("token"),
    isConnected: !!localStorage.getItem("token") || !!sessionStorage.getItem("token"),
  },
  reducers: {
    setIsConnected: (state, action) => {
      state.token = action.payload.token;
      state.isConnected = true;
      if (action.payload.rememberMe) {
        localStorage.setItem("token", action.payload.token);
      } else {
        sessionStorage.setItem("token", action.payload.token);
      }
    },
    logout: (state) => {
        state.token = null;
        state.isConnected = false;
        localStorage.removeItem("token");
        sessionStorage.removeItem("token");
    }
  },
});

export const { setIsConnected, logout } = authSlice.actions;
export default authSlice.reducer;