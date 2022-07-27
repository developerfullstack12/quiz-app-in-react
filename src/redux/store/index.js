
import {  configureStore } from '@reduxjs/toolkit'
import data from '../../utils/data'
import { persistedReducer, counterSlice } from '../reducers'
import {persistStore} from 'redux-persist'

 export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
  devTools: process.env.NODE_ENV !== 'development'
})

export const persistor = persistStore(store)
