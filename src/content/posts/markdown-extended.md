---
title: Markdown 扩展功能
published: 2024-05-01
updated: 2026-02-26
description: '深入了解Mizuki中的Markdown功能'
image: ''
tags: [Demo, 示例, Markdown, Mizuki]
category: '示例'
draft: false 
---

## GitHub 仓库卡片
你可以添加动态卡片链接到 GitHub 仓库，页面加载时，仓库信息会从 GitHub API 获取。

::github{repo="matsuzaka-yuki/Mizuki"}

使用代码 `::github{repo="matsuzaka-yuki/Mizuki"}` 创建一个 GitHub 仓库卡片。

```markdown
::github{repo="matsuzaka-yuki/Mizuki"}
```

## 标注

支持以下类型的标注：`note` `tip` `important` `warning` `caution`

:::note
突出显示用户即使浏览也应考虑的信息。
:::

:::tip
可选信息，帮助用户更顺利地使用。
:::

:::important
用户成功所必需的关键信息。
:::

:::warning
因潜在风险需要用户立即关注的紧急内容。
:::

:::caution
某个操作可能带来的负面后果。
:::

### 基本语法

```markdown
:::note
突出显示用户即使浏览也应考虑的信息。
:::

:::tip
可选信息，帮助用户更顺利地使用。
:::
```

### 自定义标题

标注的标题可以自定义。

:::note[我的自定义标题]
这是一个带有自定义标题的笔记。
:::

```markdown
:::note[我的自定义标题]
这是一个带有自定义标题的笔记。
:::
```

### GitHub 语法

> [!TIP]
> [GitHub 语法](https://github.com/orgs/community/discussions/16925) 同样支持。

```
> [!NOTE]
> GitHub 语法同样支持。

> [!TIP]
> GitHub 语法同样支持。
```

### 剧透

你可以在文本中添加剧透内容。文本同样支持 **Markdown** 语法。

内容 :spoiler[被隐藏了 **哎呀呀**]！

```markdown
内容 :spoiler[被隐藏了 **哎呀呀**]！
```