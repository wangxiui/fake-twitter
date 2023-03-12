/**
 * @name: user
 * @description：用户Action Creators
 * @author: wangxiui
 * @date: 2023/3/9 22:08
 */
export const registerUser = ({username, firstname, password}) => ({
  type: 'REGISTER_USER',
  username,
  firstname,
  password
})

export const loginUser = (username, password) => ({
  type: 'LOGIN_USER',
  username,
  password
})

export const logoutUser = () => ({
  type: 'LOGIN_USER'
})
