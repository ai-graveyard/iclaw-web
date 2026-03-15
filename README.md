# iClaw Web

iClaw 官方网站 —— **AI Belongs to Everyone**。

## 业务简介

iClaw 是一款个人 AI 计算机产品，主打本地运行 AI、数据完全私有、开箱即用。网站作为产品官网，涵盖以下核心内容：

- **产品展示**：Hero 展区、产品细节、设计理念
- **核心卖点**：本地隐私、即开即用、持续陪伴、简洁界面
- **AI 能力**：AI 驱动的功能与工作流自动化
- **使用场景**：面向个人用户、专业人士及企业团队
- **安全与生态**：数据安全保障、插件生态系统
- **定价方案**：Lite / Pro / Enterprise 三档产品线

## 技术栈

| 类别 | 技术 |
| --- | --- |
| 框架 | [Next.js](https://nextjs.org/) 16 (App Router) |
| 语言 | TypeScript |
| UI | React 19 |
| 样式 | [Tailwind CSS](https://tailwindcss.com/) v4 |
| 动画 | [Framer Motion](https://motion.dev/) |
| 包管理 | [pnpm](https://pnpm.io/) |
| 代码规范 | ESLint |

## 快速开始

```bash
# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev

# 代码检查
pnpm lint
```

启动后访问 [http://localhost:3000](http://localhost:3000) 查看效果。

## 构建与部署

项目配置了静态导出（`output: "export"`），构建后生成纯静态文件，可直接部署到任意 Web 服务器。

```bash
# 构建静态文件，产物输出到 out/ 目录
pnpm build

# 一键部署到服务器（通过 rsync）
./deploy.sh user@your-server.com /var/www/iclaw-web
```

服务器端使用 Nginx 示例配置：

```nginx
server {
    listen 80;
    server_name your-domain.com;
    root /var/www/iclaw-web;
    index index.html;

    location / {
        try_files $uri $uri.html $uri/ =404;
    }
}
```

## 项目结构

```
app/
├── components/       # 页面组件
│   ├── Navbar.tsx
│   ├── HeroSection.tsx
│   ├── ProblemSection.tsx
│   ├── VisionSection.tsx
│   ├── ProductSection.tsx
│   ├── FeaturesSection.tsx
│   ├── AIPowerSection.tsx
│   ├── UseCasesSection.tsx
│   ├── DesignSection.tsx
│   ├── SecuritySection.tsx
│   ├── EcosystemSection.tsx
│   ├── ComparisonSection.tsx
│   ├── PricingSection.tsx
│   ├── CTASection.tsx
│   ├── Footer.tsx
│   └── FadeIn.tsx    # 通用淡入动画组件
├── globals.css       # 全局样式
├── layout.tsx        # 根布局
└── page.tsx          # 首页入口
public/
├── iclaw-hero.jpg
├── iclaw-product.jpg
└── iclaw-design.jpg
```
