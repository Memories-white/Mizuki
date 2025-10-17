---
title: 加密帖子
published: 2024-01-15
description: 这是一篇用于测试页面加密功能的文章。
encrypted: true
pinned: true
password: "123456"
tags: ["Test", "加密"]
category: "Technology"
---

这个博客模板是使用[Astro](https://astro.build/)构建的。对于本指南中未提及的事项，您可以在[Astro文档](https://docs.astro.build/)中找到答案。

## 文章前置信息

```yaml
---
title: 我的第一篇博客文章
published: 2023-09-09
description: 这是我新Astro博客的第一篇文章。
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
| `pinned`      | 是否将此文章固定在文章列表顶部。                             |
| `description` | 文章的简短描述，在索引页显示。                               |
| `image`       | 文章的封面图片路径。<br/>1. 以`http://`或`https://`开头：使用网络图片<br/>2. 以`/`开头：指向`public`目录下的图片<br/>3. 无前缀：相对于Markdown文件的路径 |
| `tags`        | 文章的标签。                                                 |
| `category`    | 文章的分类。                                                 |
| `licenseName` | 文章内容的许可证名称。                                       |
| `author`      | 文章的作者。                                                 |
| `sourceLink`  | 文章内容的来源链接或参考。                                   |
| `draft`       | 如果文章仍为草稿，则不会显示。                               |

## 文章文件应放置于何处



您的文章文件应放置在 `src/content/posts/` 目录下。您也可以创建子目录来更好地组织您的文章和资源。

```
src/content/posts/
├── post-1.md
└── post-2/
    ├── cover.png
    └── index.md
```

