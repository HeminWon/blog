# Hexo → Astro

文章继续使用 `source/_posts/*.md`，正文无需转换。保留文件名即可保留 `archives/文件名.html` 地址。

关于与友链沿用 `.html` 地址；分类、年月归档保留目录地址。Atom 订阅与 sitemap 由 Astro 生成。

原 Hexo 配置、`scaffolds/` 留作迁移参考，不参与 Astro 构建。`source/tags/`、`source/timeline/` 中的旧入口不再参与构建，页面由 Astro 自动生成。原生成目录 `public/` 不会被复制，静态资源改放 `static/`。

运行时已移除 NexT，页面使用 Still 自定义主题。部署输出从 `public/` 改为 `dist/`。
