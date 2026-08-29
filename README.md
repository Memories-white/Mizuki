# 🌐 Memories' Blog

基于 [Mizuki](https://github.com/matsuzaka-yuki/Mizuki)（Astro 静态博客主题）的个人博客源码，已按个人需求进行定制。

**博客地址：** [http://www.zfps.asia/](http://www.zfps.asia/)

## ✨ 个人定制内容

- **字体**：中文字体使用 Noto Sans SC（思源黑体，已子集化），西文/符号使用 MapleMono 常规体
- **站点配置**：站点标题、导航菜单、侧边栏、横幅壁纸、背景图、公告、Pio（看板娘）模型、音乐播放器等均按个人喜好定制
- **学习笔记文章**：C 语言程序设计（专升本备考）、HCIA-Datacom 考点复习等
- **内容同步**：关闭了内容同步功能，文章直接在 `src/content/posts/` 中维护

## 🛠 技术栈

| 技术 | 用途 |
| ---- | ---- |
| Astro 7 | 静态站点框架 |
| TypeScript / Svelte | 组件与逻辑 |
| KaTeX | 数学公式渲染 |
| Mermaid | 图表渲染 |
| Pagefind | 站内搜索 |
| Express 插件体系 | Markdown 增强（告示、图表、图片网格等） |

## 📁 主要目录

| 路径 | 说明 |
| ---- | ---- |
| `src/content/posts/` | 博客文章（Markdown/MDX） |
| `src/config/` | 站点配置（导航、侧边栏、横幅、背景、Pio 等） |
| `src/assets/fonts/` | 自定义字体（woff2） |
| `src/data/` | 数据文件（日记等） |
| `astro.config.mjs` | Astro 与字体配置 |

## 🚀 本地开发

```bash
pnpm install   # 安装依赖
pnpm dev       # 本地预览（默认 http://localhost:4321）
pnpm build     # 构建（输出到 dist/）
```

## 📦 部署

构建后上传 `dist/` 目录至服务器（`/var/www/digvps/dist`），并设置目录/文件权限为 2755：

```bash
pnpm build
pscp -r dist root@server:/var/www/digvps/
find . -type d -exec chmod 2755 {} \;
find . -type f -exec chmod 2755 {} \;
```

## 📄 协议

本仓库基于 [Mizuki](https://github.com/matsuzaka-yuki/Mizuki) 主题定制，遵循其开源协议。
