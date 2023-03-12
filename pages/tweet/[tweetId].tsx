/**
* @name: [tweetId]
* @description：推文详细信息页面
* @author: wkk
* @date: 2023-03-09
*/
import Tweet from "@/components/Tweet";
import React from "react";
import {useAppSelector} from "@/store/hooks";
import {useRouter} from "next/router";
import {Button} from "antd";
/*Features:
1.推文详情
  - 推文ID、推文文本、推文发布时间、发布者的名字
*/
const TweetIdPage = () => {
  const router = useRouter();
  const { tweetId } = router.query;
  // 所有推文数据
  const tweetsAllList = useAppSelector((state) => state.tweets.tweetsAllList);
  const tweetInfo = tweetsAllList.find(tweet => String(tweet.tweetId) === String(tweetId))
  console.log('TweetIdPage', tweetInfo, tweetId, tweetsAllList);

  const handleBack = () => {
    router.back()
  }

  return <>
    <div className='w-1/4 m-auto px-2 pt-2'>
      <Button className='mb-6' type="default" htmlType="submit" shape="round" onClick={handleBack}>返回</Button>

      {tweetInfo
        ? <Tweet data={tweetInfo} isTweetId={true} />
        : ''
      }
    </div>
  </>
}

export default TweetIdPage
