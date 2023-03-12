/**
* @name: register
* @description：注册页面
* @author: wkk
* @date: 2023-03-09
*/
import RegisterForm from '@/components/RegisterForm'
import dynamic from "next/dynamic";

const MyModel= dynamic(() => import("@/components/MyModel"), {
  ssr: false,
});

function RegisterPage() {
  return <>
    <MyModel title='创建你的账号'>
      <RegisterForm />
    </MyModel>
  </>
}

export default RegisterPage
