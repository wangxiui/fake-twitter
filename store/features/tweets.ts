/**
 * @name: tweets
 * @description：推文Reducer
 * @author: wangxiui
 * @date: 2023/3/9 22:08
 */
import { createSlice } from '@reduxjs/toolkit'

export interface TweetItem {
  username: string;
  content: string;
  timestamp: string|number;
  tweetId: string|number;
}
const tweetsSlice = createSlice({
  name: 'tweets',
  initialState: {
    tweetsAllList: [] as TweetItem[] // 所有用户的tweets
  },
  reducers: {
    /**
     * 发推
     * @param state
     * @param action
     */
    tweetPost(state, action) {
      const {content, username} = action.payload
      const tweetItem = {
        username,
        content,
        timestamp: Date.now(),
        tweetId: state.tweetsAllList.length,
      }
      state.tweetsAllList.unshift(tweetItem)
      // console.log('tweetPost--', action, state.tweetsAllList, tweetItem);
    },
    /**
     * 编辑推文
     * @param state
     * @param action
     */
    tweetEdit(state, action) {
      const {tweetText, tweetId} = action.payload
      state.tweetsAllList.forEach(tweet => {
        if (tweetId !== tweet.tweetId) return
        tweet.content = tweetText
      })
    },
    /**
     * 删推
     * @param state
     * @param action
     */
    tweetDelete(state, action) {
      const tweetId = action.payload
      const findTweetIndex = state.tweetsAllList.findIndex(tweet => tweetId === tweet.tweetId)
      state.tweetsAllList.splice(findTweetIndex, 1)
    },
  }
})

export const { tweetPost, tweetEdit, tweetDelete } = tweetsSlice.actions
export default tweetsSlice.reducer
