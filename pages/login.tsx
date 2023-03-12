/**
* @name: login
* @description：登录页面
* @author: wkk
* @date: 2023-03-09
*/
import LoginForm from '@/components/LoginForm'
import dynamic from "next/dynamic";

const MyModel= dynamic(() => import("@/components/MyModel"), {
  ssr: false,
});

function LoginPage() {
  return <>
    <MyModel title='登录你的账号'>
      <LoginForm />
    </MyModel>
  </>
}

export default LoginPage
