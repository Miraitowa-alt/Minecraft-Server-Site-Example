# 🪐 Minecraft Server Site Example

一个专为 Minecraft 技术服 / 生电服 (Technical Minecraft Server) 量身定制的极简暗黑风格官方网站模板。基于 Astro 与 Tailwind CSS 构建，无任何客户端依赖，极致轻量。

> Live Demo: [www.rts-server.top]

---

## ✨ 特性 (Features)

* 🌑 极致极简视觉：采用深灰与纯白冷淡风排版，无多余动画干扰，凸显极客本色。
* ⚡ 纯静态、零渲染负担：基于 Astro 驱动，生成极致优化的静态页面，零秒直达。
* 📱 完美响应式适配：无论是 PC 端写代码还是手机端挂机，都能完美呈现。
* 🛡️ 像素级脱敏架构：所有成员、配置、彩蛋文案均已抽离至 src/config.ts，一键即可替换为你们服务器的专属内容。
* ☕ 内置生电梗与彩蛋：
  * 内置 Tab 标签页离线“挂机结算”小功能，模拟生电修肝收益。
  * 极客风格的 404 - BLOCK_NOT_FOUND 区块窒息复活面板。

---

## 🛠️ 快速开始 (Quick Start)

### 1. 克隆项目与安装依赖

【请输入以下终端指令】：
» git clone https://github.com/Miraitowa-alt/Minecraft-Server-Site-Example.git
» cd Minecraft-Server-Site-Example
» pnpm install

### 2. 本地开发预览

【请输入以下终端指令】：
» pnpm dev

启动后，打开浏览器访问 http://localhost:4321 即可预览你的专属官网。

### 3. 一键构建打包

【请输入以下终端指令】：
» pnpm build

构建完成后，生成的静态文件将存放在 dist/ 目录中，你可以直接将其部署至 Cloudflare Pages、Vercel 或你自己的 Nginx 服务器上。

---

## ⚙️ 如何配置为你的服务器？ (Configuration)

你不需要深入修改每一个 .astro 组件。全站所有的核心文本、服务器名称、404 弹窗、挂机彩蛋收益、甚至成员名单，全部高度解耦在 src/config.ts 中。

打开 src/config.ts，根据注释直接修改以下核心配置项：

* 网站全局元数据：修改服务器名称、描述与域名。
* 成员管理 (defaultMembers)：直接以数组形式增减服务器主创及版主成员，完美支持单人多标签 role: ["主创", "运维"] 优雅渲染。
* 挂机彩蛋配置 (afkEgg)：自定义你们服挂机掉落的物资（如铁锭、红石粉、下界合金等）及结算文案。

---

## 📁 项目结构 (Project Structure)

* .
* ├── public/              # 静态资源（favicon、通用默认像素头像等）
* ├── src/
* │   ├── components/      # 可复用的极简组件
* │   ├── layouts/         # 基础页面布局（包含挂机彩蛋逻辑）
* │   ├── pages/           # 路由页面（首页、members、404等）
* │   ├── content/         # 博客/公告的 Markdown 归档
* │   └── config.ts        # 全局核心配置文件（脱敏解耦核心）
* ├── astro.config.mjs     # Astro 配置文件
* └── tailwind.config.mjs  # Tailwind CSS 样式配置文件

---

## 📄 开源许可证 (License)

本项目基于 MIT License 开源。你可以完全自由地克隆、修改并用于你们自己的 Minecraft 服务器官网建设。如果觉得好用，欢迎点一个 ⭐ Star 证明人还在！

---

## 🤝 鸣谢与贡献

* 特别感谢所有为技术发展不懈努力的生电服玩家。
* 欢迎提交 Issue 或 Pull Request 来共同完善这个极致轻量的官网模板！
