import tweetId from "../../pages/tweet/[tweetId]";

/**
 * @name: tweets
 * @description：推文Action Creators
 * @author: wangxiui
 * @date: 2023/3/9 22:09
 */
export const postTweet = (tweetText, username) => ({
  type: 'POST_TWEEt',
  tweetText,
  username
})

export const deleteTweet = (tweetId) => ({
  type: 'DELETE_Tweet',
  tweetId
})

export const editTweet = (tweetId, newTweetText) => ({
  type: 'EDIT_TWEET',
  tweetId,
  newTweetText
})
