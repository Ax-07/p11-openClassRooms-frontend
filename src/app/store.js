import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { userApi } from '../services/apis/userApi';
import authSlice from './authSlice';

export const store = configureStore({
    reducer: {
        [userApi.reducerPath]: userApi.reducer,
        auth: authSlice
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(
            userApi.middleware
            ),
        });

setupListeners(store.dispatch);