import { getCollection } from 'astro:content';
export const href = (path = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${path.replace(/^\//, '')}`;
export const postPath = (id: string) => `archives/${id.split('/').map(encodeURIComponent).join('/')}.html`;
export const posts = async () => (await getCollection('posts', ({data}) => !data.draft)).sort((a,b) => b.data.date.getTime()-a.data.date.getTime());
export const terms = (value?: string | string[]) => value ? (Array.isArray(value) ? value : [value]) : [];
export const date = (value: Date) => value.toLocaleDateString('sv-SE', { timeZone: 'Asia/Shanghai' });
export const escapeXml = (value: string) => value.replace(/[<>&"']/g, c => ({'<':'&lt;','>':'&gt;','&':'&amp;','"':'&quot;',"'":'&apos;'}[c]!));

export const sectionOf = (post: import('astro:content').CollectionEntry<'posts'>): 'thoughts' | 'tech' => post.data.section ?? (terms(post.data.categories).includes('reading') ? 'thoughts' : 'tech');
export const excerpt = (body = '') => body.replace(/<[^>]*>|[#*`>]/g, '').trim().slice(0, 100) + (body.length > 100 ? '…' : '');
export const gallery = async () => (await getCollection('gallery', ({data}) => !data.draft)).sort((a,b) => b.data.date.getTime()-a.data.date.getTime());
export const galleryPath = (id: string) => `gallery/${encodeURIComponent(id)}.html`;
export const asset = (path: string) => /^(https?:)?\/\//.test(path) || path.startsWith(import.meta.env.BASE_URL.replace(/\/$/, '') + '/') ? path : href(path);
