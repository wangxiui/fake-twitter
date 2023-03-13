/**
* @name: Tweet
* @description：推文组件
* @author: wkk
* @date: 2023-03-09
*/
import React, {PropsWithChildren, useState} from 'react';
import {Avatar, Button, Dropdown, Form, Input, Space} from 'antd';
import type {MenuProps} from 'antd'
import {TweetItem, tweetDelete, tweetEdit} from "@/store/features/tweets";
import dayjs from 'dayjs';
import {EllipsisOutlined} from '@ant-design/icons';
import { useAppSelector, useAppDispatch } from '@/store/hooks';
import dynamic from "next/dynamic";

interface Props {
  data: TweetItem
  isTweetId: boolean
}

const MyModel= dynamic(() => import("@/components/MyModel"), {
  ssr: false,
});

/**
 * 编辑弹窗
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const ModelEdit = (props) => {
  const dispatch = useAppDispatch();

  const submit = (values) => {
    const params = {
      tweetId: props.tweetId,
      ...values
    }
    dispatch(tweetEdit(params));
    props.onClose(false)
  }

  return <>
    <Form
      size="large"
      initialValues={{ tweetText: props.content }}
      onFinish={submit}
    >
      <Form.Item name="tweetText" rules={[{ required: true, message: 'Please input your tweetText!' }]}>
        <Input placeholder="tweetText" />
      </Form.Item>

      <Form.Item>
        <Button block type="primary" htmlType="submit" shape="round" className="mt-12">提交</Button>
      </Form.Item>
    </Form>
  </>
}


const Tweet: React.FC<PropsWithChildren & Props> = ({data, isTweetId}) => {
  const dispatch = useAppDispatch();
  const currentUserInfo = useAppSelector((state) => state.users.currentUser);
  const [modalOpen, setModalOpen] = useState(false)

  const handleTweetEdit = (e) => {
    e.stopPropagation()
    setModalOpen(true)
  }
  const handleTweetDelete = (e) => {
    e.stopPropagation()
    dispatch(tweetDelete(data.tweetId));
  }

  const items: MenuProps['items'] = [
    {key: 'edit', label: <Button shape="round" onClick={handleTweetEdit}>编辑</Button>},
    {key: 'delete', label: <Button shape="round" onClick={handleTweetDelete}>删除</Button>},
  ];

  return (
    <div key={data.tweetId} className='flex items-start mb-6'>
      <Avatar src={`https://api.multiavatar.com/${data.username}.svg`} className='flex-shrink-0' />
      <div className='ml-2 flex-grow'>
        <div className='flex text-xl justify-between'>
          <Space wrap size={6}>
            {/*用户名称*/}
            <div className='font-bold text-black'>{data.username}</div>
            {/*时间*/}
            <div className='text-gray-500'>{dayjs(data.timestamp).format('YYYY-MM-DD HH:mm:ss')}</div>
            {/*tweetId*/}
            {isTweetId
              ? <div className='text-gray-500'>{data.tweetId}</div>
              : ''
            }
          </Space>
          {/*当前用户有权限操作推文*/}
          {currentUserInfo.username === data.username
            ? <Dropdown menu={{ items }} placement="bottom" trigger={['click', 'hover']}>
              <EllipsisOutlined />
            </Dropdown>
            : ''
          }
        </div>
        <div className='mt-2'>{data.content}</div>
      </div>

      <MyModel title='编辑推文' isOpen={modalOpen} updateIsOpen={setModalOpen} mask={true}>
        <ModelEdit tweetId={data.tweetId} content={data.content} onClose={setModalOpen} />
      </MyModel>
    </div>
  );
};

export default Tweet
