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
| `src/styles/theme.css` | 全站配色、基础字体与展示页面排版 |
| `src/styles/article.css` | 正文阅读宽度、标题层级、段落与代码块间距 |
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

正文页采用独立阅读样式：思考文章最大宽度 700px，技术文章最大宽度 720px；正文统一使用 17px 字号、1.8 倍行高。文章标题与正文左侧对齐。思考与技术文章均根据正文标题自动生成章节目录，宽屏显示在正文右侧；屏宽不超过 1100px 时，目录移至正文上方并默认收起，用户仍可手动展开。首页与画廊沿用展示布局。

文章标题、正文与站点标题层级采用少数派文章页同款系统黑体字体栈：`-apple-system, system-ui, "PingFang SC", "Hiragino Sans GB", "Microsoft Yahei", Arial, sans-serif`。Mac 优先使用苹方，其他平台使用对应可用字体；无需下载网络字体。品牌标识与装饰性文字保留原衬线样式，代码继续使用等宽字体。
