---
title: Markdown 扩展功能
published: 2024-05-01
updated: 2024-11-29
description: '深入了解Mizuki中的Markdown功能'
image: ''
tags: [Demo, 示例, Markdown, Mizuki]
category: '示例'
draft: false 
---

## GitHub 仓库卡片
您可以添加动态卡片链接至GitHub仓库，页面加载时，仓库信息会从GitHub API获取。

::github{repo="matsuzaka-yuki/Mizuki"}

使用代码 `::github{repo="matsuzaka-yuki/Mizuki"}` 创建GitHub仓库卡片。

```markdown
::github{repo="matsuzaka-yuki/Mizuki"}
```

## 提示框

支持以下类型的提示框：`note` `tip` `important` `warning` `caution`

:::note
突出显示用户即使在快速浏览时也应考虑的信息。
:::

:::tip
帮助用户更成功的可选信息。
:::

:::important
用户成功所需的关键信息。
:::

:::warning
因潜在风险需要用户立即关注的关键内容。
:::

:::caution
行动可能带来的负面后果。
:::

### 基础语法

```markdown
:::note
突出显示用户即使在快速浏览时也应考虑的信息。
:::

:::tip
帮助用户更成功的可选信息。
:::
```

### 自定义标题

提示框的标题可以自定义。

:::note[我的自定义标题]
这是一个带有自定义标题的注释。
:::

```markdown
:::note[我的自定义标题]
这是一个带有自定义标题的注释。
:::
```

### GitHub 语法

> [!TIP]
> [GitHub语法](https://github.com/orgs/community/discussions/16925) 同样得到支持。

```
> [!NOTE]
> GitHub语法同样得到支持。

> [!TIP]
> GitHub语法同样得到支持。
```

### 隐藏内容

您可以在文本中添加隐藏内容。该内容同样支持 **Markdown** 语法。

内容 :spoiler[被隐藏了 **哎呀**]！

```markdown
内容 :spoiler[被隐藏了 **哎呀**]！
