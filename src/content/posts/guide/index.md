---
title: Mizuki 简单使用指南
published: 2024-04-01
description: "如何使用此博客模板。"
image: "./cover.jpeg"
tags: ["Mizuki", "博客", "自定义"]
category: 指南
draft: false
---

此博客模板使用 [Astro](https://astro.build/) 构建。本指南未提及的内容，您可以在 [Astro 文档](https://docs.astro.build/) 中找到答案。

## 文章的前置元数据

```yaml
---
title: My First Blog Post
published: 2023-09-09
description: This is the first post of my new Astro blog.
image: ./cover.jpg
tags: [Foo, Bar]
category: Front-end
draft: false
---
```

| 属性          | 描述                                                         |
| ------------- | ------------------------------------------------------------ |
| `title`       | 文章的标题。                                                 |
| `published`   | 文章的发布日期。                                             |
| `pinned`      | 是否将此文章置顶于文章列表顶部。                             |
| `description` | 文章的简短描述。在首页显示。                                 |
| `image`       | 文章的封面图片路径。<br/>1. 以 `http://` 或 `https://` 开头：使用网络图片<br/>2. 以 `/` 开头：指向 `public` 目录中的图片<br/>3. 无上述前缀：相对于 markdown 文件 |
| `tags`        | 文章的标签。                                                 |
| `category`    | 文章的分类。                                                 |
| `licenseName` | 文章内容的许可证名称。                                       |
| `author`      | 文章的作者。                                                 |
| `sourceLink`  | 文章内容的源链接或参考来源。                                 |
| `draft`       | 如果文章仍是草稿，则不会显示。                               |

## 文章文件的存放位置

您的文章文件应放置在 `src/content/posts/` 目录下。您也可以创建子目录来更好地组织您的文章和资源文件。

```
src/content/posts/
├── post-1.md
└── post-2/
    ├── cover.png
    └── index.md
```