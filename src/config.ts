export const siteConfig = {
  name: "Minecraft Server",
  tagline: "技术 · 红石 · 生存 · 建筑",
  description: "一个以原版生存为核心的 Minecraft 技术服务器。热衷于红石、建筑与拓展玩法，在稳定与克制的氛围中，共同探索方块世界的无限可能。",
  url: "https://example.com",
  
  social: {
    bilibili: "https://space.bilibili.com/",
    github: "https://github.com/",
  },
  
  navigation: [
    { name: "首页", href: "/" },
    { name: "成员", href: "/members" },
    { name: "照相馆", href: "/gallery" },
    { name: "项目", href: "/projects" },
    { name: "博客", href: "/blog" },
    { name: "加入我们", href: "/join" },
  ],
  
  footer: {
    copyright: `${new Date().getFullYear()} MINERAFT SERVER. ALL RIGHTS RESERVED.`,
  },
  
  afk: {
    items: [
      "铁锭",
      "红石粉", 
      "绿宝石",
      "钻石",
      "下界合金碎屑",
      "火药",
      "粘液球",
      "金锭",
      "青金石",
      "石英",
    ],
    messages: {
      afk: "☕ [AFK] 正在挂机中...",
      online: "⚡ [ONLINE] 区块同步成功！",
      lootTitle: "【 ☕ 离线挂机收益报告 】",
      lootIntro: "检测到主区块已重新强加载，本次挂机池自动产出物资如下：",
      lootOutro: "[ 提示 ]: 物资已自动存入你的官网虚拟末影箱，请继续修肝！",
    },
  },
  
  error404: {
    title: "404 - ERROR_CHUNK_NOT_LOADED",
    reason: "[ 原因 ]: 玩家在未加载的区块中窒息而死，当前坐标已丢失。",
    buttons: {
      respawn: "🔧 消耗 30 级经验值复活并返回主城",
      callAdmin: "🛑 远程呼叫管理员过来帮你捡掉落物",
      rollback: "🧩 强制将当前 404 区块回滚到上一周目",
    },
    alerts: {
      callAdmin: "本地向管理员发送的强加载请求已被拒绝。对方表示正在挂机，并对你翻了个白眼。",
      rollback: "错误：权限不足。仅服主拥有此操作权限。",
    },
  },
  
  secretPanel: {
    logs: [
      "[ SYSTEM ] LOG: ENABLING HIDDEN PROTOCOL...",
      "[ DECRYPT ] COORD: X: 114514 | Y: 64 | Z: 1919810",
    ],
    warnings: [
      "[ WARNING ] PROTOCOL_VIOLATION_DETECTED:",
      "➔ Player_A: [WARN] 长期处于离线状态，被怀疑已转职为云玩家",
      "➔ Player_B: [WARN] 试图通过在群里发梗图来代替红石机器的日常维护",
      "➔ Player_C: [KICKED] 由于连续 72 小时没有上线被踢出服务器",
      "➔ Player_D: [WARN] 频繁提交官网前端改动，拒绝上游戏干活",
    ],
    counter: "[ COUNTER ] ACCIDENT: 距离服务器因为没人维护而停止运转已过去 0 天",
  },
  
  home: {
    hero: {
      subtitle: "Minecraft Server",
      title: "原版生存 · 红石科技 · 精美建筑",
      description: "这是一个以原版生存为核心的 Minecraft 服务器。我们热衷于红石、建筑与拓展玩法，在稳定与克制的氛围中，共同探索方块世界的无限可能。",
    },
    gallery: {
      title: "服务器日常 / 照相馆",
      subtitle: "定格生存开荒、红石大工程与那些温馨的瞬间。",
    },
    quickNav: {
      title: "快速导航",
      items: [
        { name: "成员", description: "了解服务器的核心贡献者", href: "/members" },
        { name: "项目", description: "自研插件与开源仓库", href: "/projects" },
        { name: "博客", description: "玩家与管理员的日常日志", href: "/blog" },
        { name: "加入我们", description: "申请加入服务器", href: "/join" },
      ],
    },
  },
  
  members: {
    title: "服务器成员",
    subtitle: "记录在服务器留下独特印记的创造者们。",
    placeholderMembers: [
      {
        name: "Steve",
        role: ["服主", "后勤", "建筑"],
        avatar: "/avatars/steve.png",
        bio: "服务器创始人。统筹服务器整体发展方向与社区文化建设。",
        bilibili: "https://space.bilibili.com/",
      },
      {
        name: "Alex",
        role: ["服主", "红石"],
        avatar: "/avatars/alex.png",
        bio: "技术服主，负责服务器技术架构与红石机器设计。保障 7×24 小时稳定运行。",
        bilibili: "https://space.bilibili.com/",
      },
    ],
  },
  
  gallery: {
    title: "服务器照相馆",
    subtitle: "定格生存开荒、红石大工程与那些温馨的联机瞬间。",
  },
  
  projects: {
    title: "项目成果",
    subtitle: "开源项目与自研工具。",
    placeholderProjects: [
      {
        title: "Example",
        description: "XXXXXX",
        tags: ["TAG"],
        repoUrl: "https://github.com/",
      },
    ],
  },
  
  blog: {
    title: "博客",
    subtitle: "玩家与管理员的日常日志。",
  },
};

export type SiteConfig = typeof siteConfig;
