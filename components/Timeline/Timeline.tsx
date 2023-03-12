/**
* @name: Timeline
* @description：时间线组件
* @author: wkk
* @date: 2023-03-09
*/
import React, { useState } from 'react';
import { Button, Divider, Form, Input } from 'antd';
import Tweet from "@/components//Tweet";
import { useAppSelector, useAppDispatch } from '@/store/hooks';
import {TweetItem, tweetPost} from "@/store/features/tweets";
import Link from "next/link";
import {useRouter} from "next/router";

const Timeline: React.FC = () => {
  // 当前用户
  const router = useRouter();
  const { username } = router.query;
  // 所有推文数据
  const tweetsAllList = useAppSelector((state) => state.tweets.tweetsAllList);
  const [disabled, setDisabled] = useState(true)
  const dispatch = useAppDispatch();
  const [form] = Form.useForm();

  /**
   * 处理发送图文
   * @param values
   */
  const handlePostTweet = (values) => {
    const params = {
      content: values.tweetText,
      username,
    }
    dispatch(tweetPost(params));
    form.resetFields();
    setDisabled(true)
  };
  /**
   * 监听设置【发送】按钮禁用状态
   * @param event
   */
  const handleInputChange = (event) => {
    const value = event.target.value
    console.log('handleInputChange', value);
    value
      ? setDisabled(false)
      : setDisabled(true)
  }

  return <>
    {/*发推表单*/}
    <Form
      size="large"
      form={form}
      initialValues={{ remember: true }}
      onFinish={handlePostTweet}
    >
      <div className='text-gray-400 text-2xl mb-2'>Post a tweet：</div>
      <Form.Item name="tweetText" className='mb-0'>
        <Input.TextArea autoSize={{ minRows: 2, maxRows: 5 }} placeholder="有什么新鲜事～" onChange={handleInputChange} />
      </Form.Item>

      <Form.Item className='text-right mt-2'>
        <Button type="primary" htmlType="submit" shape="round" disabled={disabled}>发推</Button>
      </Form.Item>
    </Form>

    {/*分割线*/}
    {tweetsAllList.length
      ? <Divider />
      : ''
    }

    {/*时间线列表*/}
    {tweetsAllList.map((tweet) => (
      <Link key={tweet.tweetId} href={`/tweet/${tweet.tweetId}`} className='no-underline text-black'>
        <Tweet data={tweet} isTweetId={false} />
      </Link>
    ))}
  </>
};

export default Timeline
