import { configureStore } from '@reduxjs/toolkit'
import { jsonPlaceholderApi } from './services/jsonplaceholder'
import { setupListeners } from '@reduxjs/toolkit/query'

export const store = configureStore({
    reducer: {
        [jsonPlaceholderApi.reducerPath]: jsonPlaceholderApi.reducer,
    },

    /*Ara katman ön bellek yapısıyla ilgilenir*/
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(jsonPlaceholderApi.middleware)
})

setupListeners(store.dispatch)