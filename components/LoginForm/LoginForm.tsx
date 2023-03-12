/**
* @name: LoginForm
* @description：登录表单
* @author: wkk
* @date: 2023-03-09
*/
import React from 'react';
import { useRouter } from 'next/router'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import {Button, Form, Input, message} from 'antd';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import {userLogin} from '@/store/features/user';

const LoginForm: React.FC = () => {
  const router = useRouter()
  const dispatch = useAppDispatch();
  const usersList = useAppSelector(state => state.users.usersList)

  const onFinish = (values: any) => {
    const {username, password} = values

    // 校验：用户名&密码
    const isValidate = usersList.some(user => user.username === username && user.password === password)
    if (!isValidate) {
      message.error('账号或密码不正确！请重新输入～', 1)
      return
    }

    dispatch(userLogin(values));
    router.push(`/${username}`)
  };


  return (
    <Form
      size="large"
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[{ required: true, message: 'Please input your Username!' }]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your Password!' }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>

      <Form.Item>
        <Button block type="primary" htmlType="submit" shape="round" className="mt-12">
          登录
        </Button>
      </Form.Item>
    </Form>
  );
}

export default LoginForm
