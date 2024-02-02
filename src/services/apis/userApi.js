import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/api/v1/user' }),
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (body) => ({
                url: '/login',
                method: 'POST',
                body
            }),
        }),
        signup: builder.mutation({
            query: (body) => ({
                url: '/signup',
                method: 'POST',
                body: body
            }),
        }),
        getUserProfile: builder.query({
            query: ({token}) => ({
                url: '/profile',
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }),
        }),

        updateUserProfile: builder.mutation({
            query: ({token, data}) => ({
                url: '/profile',
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${token}`
                },
                body: data
            }),
        }),
    }),
})

export const { 
    useLoginMutation, 
    useSignupMutation, 
    useGetUserProfileQuery,
    useUpdateUserProfileMutation 
} = userApi;

