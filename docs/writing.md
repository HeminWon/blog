# 写作

## 文章

文章保存在 `source/_posts/`。

```sh
npm run new -- "文章标题"
```

新文章默认归入思考，且不发布。通过 `section` 选择栏目，发布时设置 `draft: false`。

```yaml
---
title: 文章标题
date: 2026-10-27
section: thoughts
description: 文章摘要
categories: reading
tags: [阅读]
draft: true
---
```

- `section`：`thoughts`（思考）或 `tech`（技术）。
- `title`、`date` 必填；`description`、`categories`、`tags` 可选。
- `categories`、`tags` 支持字符串或数组。
- 未指定 `section` 时，含 `reading` 分类的文章归入思考，其余归入技术。

文件名决定文章地址 `archives/文件名.html`。发布后更名会改变链接。

## 画廊

作品保存在 `source/_gallery/`，图片放入 `static/images/`。可从 `source/_gallery/welcome.md` 复制模板。

```yaml
---
title: 午后的光
date: 2026-10-27
draft: true
description: 一组光影记录。
cover: images/afternoon.jpg
coverAlt: 阳光穿过窗帘，在墙面留下条纹
medium: 摄影
images:
  - src: images/afternoon.jpg
    alt: 阳光穿过窗帘，在墙面留下条纹
    caption: 午后，窗边。
---
```

正文可写创作背景或作品说明。图片与文字确认后，将 `draft` 改为 `false`。

`cover`、`coverAlt` 必填；组图中每张图片的 `src`、`alt` 必填。省略 `images` 时使用封面作为作品图。

图片地址支持 `images/example.jpg` 等站内路径及 HTTPS 外链；画廊自动补全站内部署前缀。作品地址为 `gallery/文件名.html`。

没有已发布作品时显示筹备状态。页面几何图形仅为主题装饰。

## 页面与资源

- 关于：`source/about/index.md`。
- 友链：`source/links/index.md`。
- 静态资源：`static/`。

文章 Markdown 中的站内图片、资源链接需包含当前部署前缀，例如 `/blog/images/example.jpg`。归档、时间轴、分类与标签自动生成。
