/**
 * @name: user
 * @description：用户Reducer
 * @author: wangxiui
 * @date: 2023/3/9 22:07
 */
import {createSlice} from '@reduxjs/toolkit'

export interface UserItem {
  username: string
  firstname: string
  password: string
  loggedIn: boolean
}
const usersSlice = createSlice({
  name: 'users',
  initialState: {
    currentUser: {} as UserItem,
    usersList: [] as UserItem[]
  },
  reducers: {
    /**
     * 注册账号
     * @param state
     * @param action
     */
    userRegister(state, action) {
      const {username, firstname, password} = action.payload
      const userItem = {
        username,
        firstname,
        password,
        loggedIn: false
      }
      state.usersList.push(userItem)
    },
    /**
     * 登录账号
     * @param state
     * @param action
     */
    userLogin(state, action) {
      const {username} = action.payload
      const findUserItem = state.usersList.find(user => user.username === username)
      if (!findUserItem) return
      // 设置当前用户
      state.currentUser = findUserItem
    },
    userLogout(state, action) {
      const {username} = action.payload
      const findIndex = state.usersList.findIndex(user => user.username === username)
      state.usersList.splice(findIndex, 1)
    },
    userCurrentSet(state, action) {
      const {username, firstname, password} = action.payload
      state.currentUser = {
        username,
        firstname,
        password,
        loggedIn: true
      }
    }
  },
  extraReducers: builder => {
    // builder.addCase(fetchUserById.pending, (state, action) => {
    //   // both `state` and `action` are now correctly typed
    //   // based on the slice state and the `pending` action creator
    // })
  }
})

export const { userRegister, userCurrentSet, userLogin, userLogout } = usersSlice.actions
export default usersSlice.reducer
