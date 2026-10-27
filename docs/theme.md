# Still

以徽派建筑的粉墙、黛瓦和石青为配色参照。排版保持克制，内容优先。

## 页面

| 页面 | 布局 |
| --- | --- |
| 首页 | 思考、画廊与技术入口 |
| 思考 | 文字列表与长文阅读 |
| 技术 | 正文搜索、文章目录、代码高亮与复制 |
| 画廊 | 原比例陈列、编号展签、独立作品页 |

栏目地址为 `thoughts.html`、`tech.html`、`gallery.html`。构建后同时提供 `/thoughts/`、`/tech/`、`/gallery/` 兼容地址；开发时使用 `.html` 地址。

画廊大图使用全屏观展，支持左右方向键切换、Esc 退出。主题支持响应式布局、系统及手动深浅色切换。

## 定制入口

| 文件 | 用途 |
| --- | --- |
| `src/theme.ts` | 文案、导航、栏目介绍与主题署名 |
| `src/styles/theme.css` | 配色、字体与排版 |
| `src/layouts/Layout.astro` | 导航、页脚及公共页面结构 |
| `src/pages/index.astro` | 首页 |
| `src/layouts/SectionPage.astro` | 栏目列表与搜索 |
| `src/layouts/ContentPage.astro` | 文章及独立文字页面 |
| `src/components/GalleryGrid.astro` | 作品列表 |
| `src/pages/gallery/[id].astro` | 作品详情与观展交互 |

栏目可采用独立布局；当前公共模板用于统一导航和基础样式。主题名仅以英文显示于页脚，网站标识为 Hemin。

## 配色

| 用途 | 浅色模式 |
| --- | --- |
| 背景 | `#f5f5f1` |
| 文字 | `#282c2f` |
| 强调 | `#50646b` |

深色模式使用黛瓦灰，作品展示区保持中性。
