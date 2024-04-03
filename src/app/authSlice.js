import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: localStorage.getItem("token"),
    isConnected: !!localStorage.getItem("token"),
  },
  reducers: {
    setIsConnected: (state, action) => {
      state.token = action.payload;
      state.isConnected = true;
      localStorage.setItem("token", action.payload);
    },
    logout: (state) => {
        state.token = null;
        state.isConnected = false;
        localStorage.removeItem("token");
    }
  },
});

export const { setIsConnected, logout } = authSlice.actions;
export default authSlice.reducer;