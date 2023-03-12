/**
 * @name: store
 * @description：Redux store
 * @author: wangxiui
 * @date: 2023/3/9 22:06
 */
import { configureStore } from '@reduxjs/toolkit'
import usersReducer from './features/user'
import tweetsReducer from "./features/tweets";

const store = configureStore({
  reducer: {
    users: usersReducer,
    tweets: tweetsReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store
