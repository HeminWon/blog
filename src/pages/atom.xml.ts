import { posts, href, postPath, escapeXml } from '../lib/blog';
export async function GET() {
 const entries=await posts();const site='https://heminwon.github.io';
 const xml=`<?xml version="1.0" encoding="utf-8"?><feed xmlns="http://www.w3.org/2005/Atom"><title>Hemin's Blog</title><id>${site}${href()}</id><link href="${site}${href()}"/><link rel="self" href="${site}${href('atom.xml')}"/><updated>${(entries[0]?.data.date ?? new Date()).toISOString()}</updated><author><name>Hemin Won</name></author>${entries.slice(0,20).map(p=>`<entry><title>${escapeXml(p.data.title)}</title><id>${escapeXml(site+href(postPath(p.id)))}</id><link href="${escapeXml(site+href(postPath(p.id)))}"/><updated>${p.data.date.toISOString()}</updated><summary>${escapeXml(p.data.description??p.body?.slice(0,300)??'')}</summary></entry>`).join('')}</feed>`;
 return new Response(xml,{headers:{'Content-Type':'application/atom+xml; charset=utf-8'}});
}
