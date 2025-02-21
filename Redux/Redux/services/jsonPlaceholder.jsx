import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


// Define a service using a base URL and expected endpoints
export const jsonPlaceholderApi = createApi({
    reducerPath: 'jsonPlaceholder',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.org' }),
    endpoints: (builder) => ({
        getPostById: builder.query({
            /*builder query ile veri çekme işlemleri yapılır*/
            query: (id) => `posts/${id}`,
        }),
    }),
})


export const { useGetPostById } = jsonPlaceholderApi