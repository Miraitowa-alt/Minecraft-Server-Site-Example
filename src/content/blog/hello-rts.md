---
title: "RTS 官网正式上线"
description: "RTS 服务器官网开发日志。"
pubDate: 2026-05-20
author: "薄荷糖"
---

## 前言

经过几天的设计与开发，RTS 服务器官网终于正式上线了。本站基于 **Astro** 静态站点框架构建，部署在 **Cloudflare Pages** 上，实现了极快的全球访问速度。

## 技术选型

### 为什么选择 Astro？

Astro 是一个现代化的静态站点生成器，它的核心理念是 **Zero JavaScript by default**。这意味着在默认情况下，页面不会向客户端发送任何 JavaScript，从而实现极致轻量的页面加载。

对于我们这种以内容展示为主的服务器官网来说，Astro 是完美的选择：

- Markdown 内容集合（Content Collections）提供类型安全的文章管理
- 组件化开发体验，布局复用方便
- 构建产物极其干净，没有冗余的运行时

### Tailwind CSS

样式方面采用了 **Tailwind CSS**，一个实用优先的 CSS 框架。配合 Astro 的 `@astrojs/tailwind` 集成，开发体验非常流畅。

```css
/* Tailwind 让极简风格变得简单 */
.bg-white {
  background-color: #fff;
}
```

## 部署与展望

部署到 Cloudflare Pages 后，每次推送代码到 GitHub 仓库都会自动触发构建和部署。全球 CDN 节点确保无论玩家身处何地，都能快速访问官网。

未来计划增加更多的功能：

1. 服务器状态实时监控面板
2. 玩家在线列表
3. 更丰富的照相馆内容

感谢所有 RTS 成员的支持，让我们一起把这个社区建设得更好。