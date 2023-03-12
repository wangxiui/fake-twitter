/**
* @name: [username]
* @description：用户时间线页面
* @author: wkk
* @date: 2023-03-09
*/
import Timeline from '@/components/Timeline'
import { useRouter } from 'next/router';
import {Button, Popconfirm} from "antd";
import React from "react";

/*Features:
1.时间线
  - 展示所有推文（倒序）
  - 发送推文（文本）
2.注销
  - 注销账户
  - 保留推文
3.推文详情
  - 推文ID、推文文本、推文发布时间、发布者的名字
*/
function UserTimeline() {
  const router = useRouter();
  console.log('UserTimeline', router);
  const { username } = router.query;

  const confirm = () => {
    router.push('/')
  }

  return <>
    <div className='w-1/4 m-auto px-2'>
      <div className='flex justify-between items-center py-4'>
        <h1 className='text-3xl text-black'>{username}'s Timeline</h1>
        <Popconfirm
          className='w-28'
          title={'提示'}
          description={<div className='w-36'>是否确认注销？</div>}
          onConfirm={confirm}
          okText="确认"
          cancelText="取消"
        >
          <Button type="default" htmlType="submit" shape="round" size='large'>注销</Button>
        </Popconfirm>
      </div>

      {/*时间线*/}
      <Timeline />
    </div>
  </>
}

export default UserTimeline
