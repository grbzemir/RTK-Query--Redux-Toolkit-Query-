import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const jsonPlaceholderApi = createApi({
    reducerPath: 'jsonPlaceholder',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.org' }),
    endpoints: (builder) => ({
        getPostById: builder.query({
            /*builder query ile veri çekme işlemleri yapılır*/
            /*mutation var ise post işlemi yapabilirsin*/
            query: (id) => `posts/${id}`,
            /* önbellek yapısı ile ilgilenen ön bellekte sakla verileri ama post her değiştiğinde o verileri siler */
            providesTags: (result, error, id) => [{ type: "Post", id: id }]
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


/* Yeni bir endpoint olusturdum injectEndpoints ile */
jsonPlaceholderApi.injectEndpoints({
    endpoints: (builder) =>
    ({
        getUserById: builder.query({
            query: (userId) => `users/${userId}`
        }),
        getPostById: builder.query({
            query: (id) => `posts/test/${id}`,
            providesTags: (result, error, id) => [{ type: "Post", id: id }]
        })
    })
})


export const { useGetPostByIdQuery, useCreatePostMutation, useGetPostsQuery } = jsonPlaceholderApi