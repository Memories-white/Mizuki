---
title: Markdown 教程
published: 2025-01-20
pinned: true
description: Markdown博客文章的简单示例。
tags: [Markdown, 博客]
category: 示例
licenseName: "Unlicensed"
author: emn178
sourceLink: "https://github.com/emn178/markdown"
draft: true
---

# Markdown 教程

一个 Markdown 示例，展示了如何编写 Markdown 文件。本文档整合了核心语法及扩展功能（GMF）。

- [块级元素](#块级元素)
  - [段落与换行](#段落与换行)
  - [标题](#标题)
  - [引用块](#引用块)
  - [列表](#列表)
  - [代码块](#代码块)
  - [水平分割线](#水平分割线)
  - [表格](#表格)
- [行内元素](#行内元素)
  - [链接](#链接)
  - [强调](#强调)
  - [代码](#代码)
  - [图片](#图片)
  - [删除线](#删除线)
- [杂项](#杂项)
  - [自动链接](#自动链接)
  - [反斜杠转义](#反斜杠转义)
- [行内HTML](#行内html)

## 块级元素

### 段落与换行

#### 段落

HTML 标签: `<p>`

一个或多个空行。（空行是指仅包含**空格**或**制表符**的行。）

代码:

    这是一个
    行内示例。
    
    这是第二段。

预览:

---

这是一个
行内示例。

这是第二段。

---

#### 换行

HTML 标签: `<br />`

在行尾使用**两个或更多空格**。

代码:

    这不会
    保持在同一行。

预览:

---

这不会
保持在同一行。

---

### 标题

Markdown 支持两种标题样式：Setext 和 atx。

#### Setext

HTML 标签: `<h1>`, `<h2>`

使用任意数量的**等号 (=)** 作为 `<h1>` 的下划线，使用**破折号 (-)** 作为 `<h2>` 的下划线。

代码:

    这是一级标题
    =============
    这是二级标题
    -------------

预览:

---

# 这是一级标题

## 这是二级标题

---

#### atx

HTML 标签: `<h1>`, `<h2>`, `<h3>`, `<h4>`, `<h5>`, `<h6>`

在行首使用 1-6 个**井号 (#)**，对应 `<h1>` - `<h6>`。

代码:

    # 这是一级标题
    ## 这是二级标题
    ###### 这是六级标题

预览:

---

# 这是一级标题

## 这是二级标题

###### 这是六级标题

---

你也可以选择性地"关闭" atx 样式的标题。关闭用的井号**不需要**与开启用的井号数量匹配。

代码:

    # 这是一级标题 #
    ## 这是二级标题 ##
    ### 这是三级标题 ######

预览:

---

# 这是一级标题

## 这是二级标题

### 这是三级标题

---

### 引用块

HTML 标签: `<blockquote>`

Markdown 使用电子邮件风格的 **>** 字符进行引用。如果你对文本进行硬换行并在每行前放一个 >，效果最好。

代码:

    > 这是一个包含两段的引用块。Lorem ipsum dolor sit amet,
    > consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus.
    > Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.
    >
    > Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse
    > id sem consectetuer libero luctus adipiscing.

预览:

---

> 这是一个包含两段的引用块。Lorem ipsum dolor sit amet,
> consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus.
> Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.
>
> Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse
> id sem consectetuer libero luctus adipiscing.

---

Markdown 允许你偷懒，只在硬换行段落的第一行前加上 >。

代码:

    > 这是一个包含两段的引用块。Lorem ipsum dolor sit amet,
    consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus.
    Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.
    
    > Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse
    id sem consectetuer libero luctus adipiscing.

预览:

---

> 这是一个包含两段的引用块。Lorem ipsum dolor sit amet,
> consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus.
> Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus。

> Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse
> id sem consectetuer libero luctus adipiscing.

---

引用块可以嵌套（例如，引用块中的引用块），通过添加额外的 > 层级来实现。

代码:

    > 这是第一层引用。
    >
    > > 这是嵌套的引用块。
    >
    > 回到第一层。

预览:

---

> 这是第一层引用。
>
> > 这是嵌套的引用块。
>
> 回到第一层。

---

引用块可以包含其他 Markdown 元素，包括标题、列表和代码块。

代码:

    > ## 这是一个标题。
    >
    > 1.   这是第一个列表项。
    > 2.   这是第二个列表项。
    >
    > 这是一些示例代码：
    >
    >     return shell_exec("echo $input | $markdown_script");

预览:

---

> ## 这是一个标题。
>
> 1.  这是第一个列表项。
> 2.  这是第二个列表项。
>
> 这是一些示例代码：
>
>     return shell_exec("echo $input | $markdown_script");

---

### 列表

Markdown 支持有序（编号）列表和无序（项目符号）列表。

#### 无序列表

HTML 标签: `<ul>`

无序列表使用**星号 (\*)**、**加号 (+)** 和**连字符 (-)**。

代码:

    *   红色
    *   绿色
    *   蓝色

预览:

---

*   红色
*   绿色
*   蓝色

---

等同于：

代码:

    +   红色
    +   绿色
    +   蓝色

和：

代码:

    -   红色
    -   绿色
    -   蓝色

#### 有序列表

HTML 标签: `<ol>`

有序列表使用数字后跟句点：

代码:

    1.  伯德
    2.  麦克海尔
    3.  帕里什

预览:

---

1.  伯德
2.  麦克海尔
3.  帕里什

---

有可能意外触发有序列表，例如写下这样的内容：

代码:

    1986. 多么美好的赛季。

预览:

---

1986. 多么美好的赛季。

---

你可以使用**反斜杠转义 (\\)** 句点：

代码:

    1986\. 多么美好的赛季。

预览:

---

1986\. 多么美好的赛季。

---

#### 缩进

##### 引用块

要将引用块放在列表项内，引用块的 > 定界符需要缩进：

代码:

    *   一个包含引用块的列表项：
    
        > 这是一个在列表项内的引用块。

预览:

---

*   一个包含引用块的列表项：

    > 这是一个在列表项内的引用块。

---

##### 代码块

要将代码块放在列表项内，代码块需要缩进两次 —— **8 个空格**或**两个制表符**：

代码:

    *   一个包含代码块的列表项：
    
            <代码放在这里>

预览:

---

*   一个包含代码块的列表项：

        <代码放在这里>

---

##### 嵌套列表

代码:

    * A
      * A1
      * A2
    * B
    * C

预览:

---

*   A
    *   A1
    *   A2
*   B
*   C

---

### 代码块

HTML 标签: `<pre>`

将代码块的每一行缩进至少 **4 个空格**或 **1 个制表符**。

代码:

    这是一个普通段落：
    
        这是一个代码块。

预览:

---

这是一个普通段落：

    这是一个代码块。

---

代码块会持续到遇到一个未缩进的行（或文章结尾）。

在代码块内，**_& 符号 (&)_** 和**尖括号 (< 和 >)** 会自动转换为 HTML 实体。

代码:

        <div class="footer">
            &copy; 2004 Foo Corporation
        </div>

预览:

---

    <div class="footer">
        &copy; 2004 Foo Corporation
    </div>

---

以下部分“围栏代码块”和“语法高亮”是扩展功能，你可以使用另一种方式编写代码块。

#### 围栏代码块

只需将你的代码包裹在 ` ``` ` 中（如下所示），你就不需要缩进四个空格。

代码:

    这是一个例子：
    
    ```
    function test() {
      console.log("注意到这个函数前的空行了吗？");
    }
    ```

预览:

---

这是一个例子：

```
function test() {
  console.log("注意到这个函数前的空行了吗？");
}
```

---

#### 语法高亮

在你的围栏代码块中，添加一个可选的语言标识符，我们将通过语法高亮来运行它（[支持的语言](https://github.com/github/linguist/blob/master/lib/linguist/languages.yml)）。

代码:

    ```ruby
    require 'redcarpet'
    markdown = Redcarpet.new("Hello World!")
    puts markdown.to_html
    ```

预览:

---

```ruby
require 'redcarpet'
markdown = Redcarpet.new("Hello World!")
puts markdown.to_html
```

---

### 水平分割线

HTML 标签: `<hr />`
将**三个或更多连字符 (-)、星号 (\*) 或下划线 (\_)** 单独放在一行。你可以在连字符或星号之间使用空格。

代码:

    * * *
    ***
    *****
    - - -
    ---------------------------------------
    ___

预览:

---

---

---

---

---

---

---

---

### 表格

HTML 标签: `<table>`

这是一个扩展功能。

使用**竖线 (|)** 分隔列，使用**破折号 (-)** 分隔表头，并使用**冒号 (:)** 进行对齐。

外层的**竖线 (|)** 和对齐方式是可选的。每个单元格至少需要 **3 个分隔符**来分隔表头。

代码:

    ```
    | 左对齐 | 居中对齐 | 右对齐 |
    |:-------|:--------:|-------:|
    | aaa    | bbb      | ccc    |
    | ddd    | eee      | fff    |
    
     A | B
    ---|---
    123|456


    A |B
    --|--
    12|45
    ```

预览:

---

| 左对齐 | 居中对齐 | 右对齐 |
| :----- | :------: | -----: |
| aaa    |   bbb    |    ccc |
| ddd    |   eee    |    fff |

| A    | B    |
| ---- | ---- |
| 123  | 456  |

| A    | B    |
| ---- | ---- |
| 12   | 45   |

---

## 行内元素

### 链接

HTML 标签: `<a>`

Markdown 支持两种链接样式：行内式和参考式。

#### 行内式

行内链接格式如下：`[链接文本](URL "标题")`

标题是可选的。

代码:

    这是一个[示例](http://example.com/ "标题")行内链接。
    
    [这个链接](http://example.net/) 没有标题属性。

预览:

---

这是一个[示例](http://example.com/ "标题")行内链接。

[这个链接](http://example.net/) 没有标题属性。

---

如果你引用的是同一服务器上的本地资源，你可以使用相对路径：

代码:

    查看我的[关于](/about/)页面获取详情。

预览:

---

查看我的[关于](/about/)页面获取详情。

---

#### 参考式

你可以预定义链接引用。格式如下：`[id]: URL "标题"`

标题也是可选的。然后你引用该链接时，格式如下：`[链接文本][id]`

代码:

    [id]: http://example.com/  "可选的标题在这里"
    这是一个[示例][id] 参考式链接。

预览:

---

[id]: http://example.com/ "可选的标题在这里"
这是一个[示例][id] 参考式链接。

---

即：

-   包含链接标识符的方括号（**不区分大小写**，可以使用最多三个空格从左边界缩进）；
-   后跟一个冒号；
-   后跟一个或多个空格（或制表符）；
-   后跟链接的 URL；
-   链接 URL 可以选择用尖括号包围。
-   可以选择后跟链接的标题属性，用双引号或单引号括起来，或用括号括起来。

以下三个链接定义是等价的：

代码:

    [foo]: http://example.com/  "可选标题在这里"
    [foo]: http://example.com/  '可选标题在这里'
    [foo]: http://example.com/  (可选标题在这里)
    [foo]: <http://example.com/>  "可选标题在这里"

使用空的方括号集合，链接文本本身被用作名称。

代码:

    [Google]: http://google.com/
    [Google][]

预览:

---

[Google]: http://google.com/

[Google][]

---

### 强调

HTML 标签: `<em>`, `<strong>`

Markdown 将**星号 (\*)** 和**下划线 (\_)** 视为强调指示符。**单个定界符**将是 `<em>`；**双定界符**将是 `<strong>`。

代码:

    *单个星号*
    
    _单个下划线_
    
    **双星号**
    
    __双下划线__

预览:

---

*单个星号*

_单个下划线_

**双星号**

**双下划线**

---

但是，如果你用空格包围 * 或 _，它将被视为字面量的星号或下划线。

你可以用反斜杠转义它：

代码:

    \*这段文字被字面量星号包围\*

预览:

---

\*这段文字被字面量星号包围\*

---

### 代码

HTML 标签: `<code>`

用**反引号 (`)** 包裹它。

代码:

    使用 `printf()` 函数。

预览:

---

使用 `printf()` 函数。

---

要在代码跨度中包含一个字面量的反引号字符，你可以使用**多个反引号**作为开头和结尾的定界符：

代码:

    ``这里有一个字面量反引号 (`)。``

预览:

---

``这里有一个字面量反引号 (`)。``

---

包围代码跨度的反引号定界符可以包含空格 —— 一个在开头之后，一个在结尾之前。这允许你在代码跨度的开头或结尾放置字面量的反引号字符：

代码:

    代码跨度中的单个反引号：`` ` ``
    
    代码跨度中被反引号包围的字符串：`` `foo` ``

预览:

---

代码跨度中的单个反引号：`` ` ``

代码跨度中被反引号包围的字符串：`` `foo` ``

---

### 图片

HTML 标签: `<img />`

Markdown 使用一种旨在类似于链接语法的图片语法，允许两种样式：行内式和参考式。

#### 行内式

行内图片语法如下：`![替代文本](URL "标题")`

标题是可选的。

代码:

    ![替代文本](/path/to/img.jpg)
    
    ![替代文本](/path/to/img.jpg "可选标题")

预览:

---

![替代文本](https://s2.loli.net/2024/08/20/5fszgXeOxmL3Wdv.webp)

![替代文本](https://s2.loli.net/2024/08/20/5fszgXeOxmL3Wdv.webp "可选标题")

---

即：

-   一个感叹号：!；
-   后跟一对方括号，包含图片的 alt 属性文本；
-   后跟一对圆括号，包含图片的 URL 或路径，以及一个用双引号或单引号括起来的可选标题属性。

#### 参考式

参考式图片语法如下：`![替代文本][id]`

代码:

    [img id]: https://s2.loli.net/2024/08/20/5fszgXeOxmL3Wdv.webp  "可选标题属性"
    ![替代文本][img id]

预览:

---

[img id]: https://s2.loli.net/2024/08/20/5fszgXeOxmL3Wdv.webp "可选标题属性"

![替代文本][img id]

---

### 删除线

HTML 标签: `<del>`

这是一个扩展功能。

GFM 添加了删除线文本的语法。

代码:

    ```
    ~~错误的文本。~~
    ```

预览:

---

~~错误的文本。~~

---

## 杂项

### 自动链接

Markdown 支持一种创建 URL 和电子邮件地址"自动"链接的快捷方式：只需用尖括号包围 URL 或电子邮件地址。

代码:

    <http://example.com/>
    
    <address@example.com>

预览:

---

<http://example.com/>

<address@example.com>

---

GFM 会自动链接标准 URL。

代码:

    ```
    https://github.com/emn178/markdown
    ```

预览:

---

https://github.com/emn178/markdown

---

### 反斜杠转义

Markdown 允许你使用反斜杠转义来生成原本在 Markdown 格式化语法中具有特殊含义的字面量字符。

代码:

    \*字面量星号\*

预览:

---

\*字面量星号\*

---

Markdown 为以下字符提供反斜杠转义：

代码:

    \   反斜杠
    `   反引号
    *   星号
    _   下划线
    {}  花括号
    []  方括号
    ()  圆括号
    #   井号
    +   加号
    -   减号（连字符）
    .   点
    !   感叹号

## 行内 HTML

对于 Markdown 语法未涵盖的任何标记，你可以直接使用 HTML 本身。无需前缀或定界符来表明你从 Markdown 切换到 HTML；你只需使用标签。

代码:

    这是一个常规段落。
    
    <table>
        <tr>
            <td>Foo</td>
        </tr>
    </table>
    
    这是另一个常规段落。

预览:

---

这是一个常规段落。

<table>
    <tr>
        <td>Foo</td>
    </tr>
</table>

这是另一个常规段落。

---

请注意，Markdown 格式化语法**在块级 HTML 标签内不会被处理**。

与块级 HTML 标签不同，Markdown 语法**在行级标签内会被处理**。

代码:

    <span>**有效**</span>
    
    <div>
        **无效**
    </div>

预览:

---

<span>**有效**</span>

<div>
  **无效**
</div>
<div>

***