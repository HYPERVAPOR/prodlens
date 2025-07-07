This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## 部署到 GitHub Pages

### 自动部署（推荐）

1. 将代码推送到GitHub仓库的main分支
2. 在GitHub仓库设置中启用GitHub Pages：
   - 进入仓库设置 → Pages
   - Source选择 "Deploy from a branch"
   - Branch选择 "gh-pages" 分支
   - 保存设置

3. GitHub Actions会自动构建并部署您的网站

### 手动部署

```bash
# 构建项目
pnpm run build

# 部署到GitHub Pages
pnpm run deploy
```

### 访问网站

部署完成后，您的网站将可以通过以下地址访问：
`https://[您的GitHub用户名].github.io/prodlens/`
