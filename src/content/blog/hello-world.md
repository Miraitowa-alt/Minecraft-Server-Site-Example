---
title: "欢迎使用 Minecraft 服务器官网模板"
pubDate: 2026-01-01
description: "这是一个基于 Astro 与 Tailwind CSS 的 Minecraft 技术服官网开源模板。本文介绍如何使用本模板快速搭建你的服务器官网。"
author: "Template"
---

# 0x01 关于本模板

这是一个专为 Minecraft 技术服务器设计的官网开源模板，采用极简暗黑工业风格设计。基于 Astro 静态框架与 Tailwind CSS 构建，具有以下特点：

- **极简设计**：高对比度工业冷淡风，克制的线条与留白
- **零 JS 注入**：构建期完成预渲染，客户端几乎零 JavaScript
- **响应式布局**：完美适配桌面与移动设备
- **丰富彩蛋**：包含 404 窒息复活面板、标签页离线挂机结算等趣味交互

---

# 0x02 快速开始

## 安装依赖

```bash
npm install
```

## 开发模式

```bash
npm run dev
```

## 构建生产版本

```bash
npm run build
```

---

# 0x03 自定义配置

所有全站配置集中在 `src/config.ts` 文件中，你可以修改：

- **网站名称与描述**：`name`, `description`
- **社交媒体链接**：`social.bilibili`, `social.github`
- **导航菜单**：`navigation`
- **挂机彩蛋物品**：`afk.items`
- **404 页面文案**：`error404`
- **成员信息**：`members.placeholderMembers`

---

# 0x04 Markdown 排版示例

## 标题层级

支持 H1 到 H6 六级标题，建议文章结构清晰。

## 代码块

支持语法高亮：

```python
def hello_world():
    print("Hello, Minecraft!")
```

## 列表

无序列表：
- 红石机器
- 自动农场
- 刷怪塔

有序列表：
1. 收集资源
2. 搭建框架
3. 完善细节

## 引用

> 在方块的世界里，唯一的限制是你的想象力。

## 表格

| 项目 | 描述 |
|------|------|
| 框架 | Astro |
| 样式 | Tailwind CSS |
| 部署 | Cloudflare Pages |

---

# 0x05 部署建议

推荐使用 Cloudflare Pages 进行部署：

1. 将代码推送到 GitHub 仓库
2. 在 Cloudflare Pages 中连接仓库
3. 设置构建命令：`npm run build`
4. 设置输出目录：`dist`

---

**区块同步成功，祝各位搭建愉快！**
