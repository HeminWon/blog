export const theme = {
  name: 'Still',
  title: "Hemin's Blog",
  author: 'Hemin Won',
  tagline: '观物，思索，循序而记。',
  description: '记录独立思考，收藏视觉灵感，分享技术实践。',
  navigation: [
    { path: '', label: '首页' },
    { path: 'thoughts.html', label: '思考' },
    { path: 'gallery.html', label: '画廊' },
    { path: 'tech.html', label: '技术' },
    { path: 'about.html', label: '关于' },
  ],
};
export const sections = {
  thoughts: { title: '思考', english: 'THOUGHTS & NOTES', number: '01', description: '慢下来，把那些尚未成形的念头，写成可以回看的文字。' },
  gallery: { title: '画廊', english: 'THE VIEWING ROOM', number: '02', description: '移步，驻足，静观。让作品与观看之间，保留一段安静的距离。' },
  tech: { title: '技术', english: 'CODE & PRACTICE', number: '03', description: '从问题出发，在实践中理解。记录那些值得分享的解决过程。' },
} as const;
