# fake-twitter

## 启动
请确保电脑上已经安装了最新版的 pnpm、yarn 或者 npm。

### 安装依赖
```
pnpm install
```
### 启动服务
```
pnpm dev
```

## 技术栈
- NextJS
- ReactJS
- TypeScript
- AntD
- TailwindCSS
- dayjs

## Features
- [x]  Register an account (store data in LocalStorage)
- [x]  Login
- [x]  CRUD tweets
- [ ]  Load more tweets via scroll down
- [ ]  Switch theme
- [x]  1 column in iPhone screen size, 2 columns in iPad screen size

## Introduce
```
fake-twitter
├── components
│   ├── Header.tsx // 网站标题和导航菜单
│   ├── LoginForm // 登录表单
│   ├── MyModel // 对话框组件
│   ├── RegisterForm // 注册表单
│   ├── Timeline // 时间线组件
│   ├── Tweet // 推文组件
│   └── UserTimeline.tsx // 用户时间线组件
├── pages
│   ├── [username].tsx // 时间线页面
│   ├── _app.tsx
│   ├── index.tsx // 主页
│   ├── login.tsx // 登录页面
│   ├── register.tsx // 注册页面
│   └── tweet // 推文详细信息页面
│       └── [tweetId].tsx
├── public
├── store
│   ├── features
│   │   ├── tweets.ts // 推文store
│   │   └── user.ts // 用户store
│   ├── hooks.ts
│   └── index.ts
├── styles
│   └── global.scss // 全局样式文件
├── README.md
├── next-env.d.ts
├── next.config.js
├── package.json
├── pnpm-lock.yaml
├── postcss.config.js
├── tailwind.config.js // tailwind配置
├── tsconfig.json // TS配置
└── vercel.json // vercel配置

14 directories, 37 files

```
