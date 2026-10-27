# Hexo → Astro

文章继续使用 `source/_posts/*.md`，正文无需转换。保留文件名即可保留 `archives/文件名.html` 地址。

关于与友链沿用 `.html` 地址；分类、年月归档保留目录地址。Atom 订阅与 sitemap 由 Astro 生成。

旧配置 `_config.yml`、`_config.next.yml`、文章模板 `scaffolds/` 及 `source/tags/`、`source/timeline/` 的旧入口已删除。标签与时间轴由 Astro 自动生成。

本地 Hexo 缓存 `db.json`、原生成目录 `public/` 和空的 `themes/` 已清理，相关忽略与检查配置同步移除。静态资源位于 `static/`。

运行时已移除 NexT，页面使用 Still 自定义主题。部署输出从 `public/` 改为 `dist/`。
