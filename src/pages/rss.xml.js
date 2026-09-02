import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = (await getCollection('journal', ({ data }) => !data.draft)).sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf()
  );

  return rss({
    title: 'Macadish — journal',
    description:
      'Every bake gets a page: flour, water, salt, times, temperatures, and what went wrong.',
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      link: `/journal/${post.id}/`,
    })),
    customData: '<language>en-gb</language>',
  });
}
