/**
* @name: index
* @description：主页
* @author: wkk
* @date: 2023-03-09
*/
import Link from 'next/link';
import { Button, Space } from 'antd';

/*features
1.注册
2.登录
*/
const Home = () => {
  return (
    <div className="w-full h-full flex justify-center items-center flex-col">
      <h1 className='text-6xl'>Welcome to Twitter Lite!</h1>
      <p className="mt-6 mb-12 text-gray-400 text-2xl">Please login or register to get started.</p>

      <Space wrap size={42}>
        <Link href="/login">
          <Button type="primary" shape="round" size='large' className="w-44">Login</Button>
        </Link>
        <Link href="/register">
          <Button type="default" shape="round" size='large' className="w-44">Register</Button>
        </Link>
      </Space>
    </div>
  );
};

export default Home;
