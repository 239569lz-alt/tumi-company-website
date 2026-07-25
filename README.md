# TUMI Studio Website

Roblox 游戏工作室企业官网，技术栈：

- Next.js 14
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React

## 本地运行

安装 Node.js 18.17 或更高版本，然后在项目目录执行：

```bash
npm install
npm run dev
```

浏览器打开：

```text
http://localhost:3000
```

## 部署到 Vercel

1. 将项目全部文件上传到 GitHub 仓库。
2. 登录 Vercel。
3. 点击 Add New → Project。
4. 导入对应 GitHub 仓库。
5. Framework Preset 保持 Next.js。
6. 点击 Deploy。

## 修改网站内容

游戏、职位和公司信息主要位于：

```text
src/data/site.ts
```

首页结构位于：

```text
src/app/page.tsx
```

全局样式位于：

```text
src/app/globals.css
```

## 联系表单

当前表单是前端演示版本，不会真正发送邮件。正式上线时可接入：

- Formspree
- Web3Forms
- EmailJS
- Vercel Functions
- Supabase
