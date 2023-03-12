/**
* @name: RegisterForm
* @description：注册表单
* @author: wkk
* @date: 2023-03-09
*/
import React from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input, message } from 'antd';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import {useRouter} from "next/router";
import {
  userRegister,
  userCurrentSet
} from '@/store/features/user';
const RegisterForm: React.FC = () => {
  const router = useRouter()
  const dispatch = useAppDispatch();
  const usersList = useAppSelector(state => state.users.usersList)

  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
    const isHadUser = usersList.some(user => user.username === values.username)

    if (isHadUser) {
      message.error('账号已存在！', 1)
      return
    }

    dispatch(userRegister(values));
    dispatch(userCurrentSet(values));
    message.success('恭喜～注册成功！', 1)
    router.push(`/${values.username}`)
    console.log('usersList', usersList);
  };

  return (
    <Form
      size="large"
      name="normal_login"
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <Form.Item name="username" rules={[{ required: true, message: 'Please input your Username!' }]}>
        <Input prefix={<UserOutlined />} placeholder="Username" />
      </Form.Item>

      <Form.Item name="firstname" rules={[{ required: true, message: 'Please input your Firstname!' }]}>
        <Input
          prefix={<UserOutlined />}
          placeholder="Firstname"
        />
      </Form.Item>

      <Form.Item name="password" rules={[{ required: true, message: 'Please input your Password!' }]}>
        <Input
          prefix={<LockOutlined />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>

      <Form.Item>
        <Button block type="primary" htmlType="submit" shape="round" className="mt-12">注册</Button>
      </Form.Item>
    </Form>
  );
}

export default RegisterForm
