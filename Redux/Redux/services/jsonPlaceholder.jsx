import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


// Define a service using a base URL and expected endpoints
export const jsonPlaceholderApi = createApi({
    reducerPath: 'jsonPlaceholder',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.org' }),
    endpoints: (builder) => ({
        getPostById: builder.query({
            /*builder query ile veri çekme işlemleri yapılır*/
            /*mutation var ise post işlemi yapabilirsin*/
            query: (id) => `posts/${id}`,
        }),
        createPost: builder.mutation({
            query: (newPost) => (
                {
                    url: `posts`,
                    method: 'POST',
                    body: newPost
                }
            )
        }),
        getPosts: builder.query({
            query: (page = 1) => `posts?_pages$(page)&_limit=10`
        })
    }),
    /*Kullanılmayan verileri saklama işlemi yapar*/
    keepUnusedDataFor: 30,
    /*Saniyede bir yeniden sorgulama işlemi 5 saniyede bir sorgulama yapar*/
    refetchOnMountOrArgChange: 5
})


export const { useGetPostByIdQuery, useCreatePostMutation, useGetPostsQuery } = jsonPlaceholderApi