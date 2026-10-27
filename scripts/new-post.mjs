import { mkdir, writeFile } from 'node:fs/promises';
const title=process.argv[2];
if(!title||/[\\/]/.test(title)||title==='.'||title==='..'){console.error('用法：npm run new -- "文章标题"（不能包含路径分隔符）');process.exit(1)}
await mkdir('source/_posts',{recursive:true});
const path=`source/_posts/${title}.md`;
await writeFile(path,`---\ntitle: ${JSON.stringify(title)}\ndate: ${new Date().toISOString()}\nsection: thoughts\ntags: []\ncategories: []\ndraft: true\n---\n\n在这里开始写作。\n`,{flag:'wx'});
console.log(`已创建 ${path}；发布前将 draft 改为 false。`);
