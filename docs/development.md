# 开发与部署

## 本地开发

使用 Node.js 24，与部署环境保持一致。

```sh
npm ci
npm run dev
```

访问 [本地博客](http://localhost:4321/blog/)。

```sh
npm run check
npm run build
npm run preview
```

构建输出为 `dist/`。`npm run build` 会自动执行 `postbuild`，由 `scripts/legacy-routes.mjs` 为栏目、分类及年月归档生成目录地址兼容文件。

## GitHub Pages

工作流位于 `.github/workflows/deploy.yml`。

1. 推送到 `master`。
2. Actions 安装依赖，执行检查与构建。
3. 将 `dist/` 发布到 `gh-pages`。

仓库的 Pages 发布来源应为 `gh-pages` 分支根目录。工作流需要仓库内容写入权限，当前使用同一仓库的 `GITHUB_TOKEN`。

## 地址配置

当前地址为 [heminwon.github.io/blog](https://heminwon.github.io/blog/)。

修改域名或部署路径时，同步检查：

- `astro.config.mjs`：`site`、`base`。
- `src/pages/atom.xml.ts`：订阅源中的站点地址。
- `src/pages/sitemap.xml.ts`：站点地图中的站点地址。
- Markdown 正文中的站内绝对链接与资源前缀。

导航与组件通过 `src/lib/blog.ts` 的路径函数处理部署前缀。
