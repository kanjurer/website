import { getRssString } from '@astrojs/rss';

import { fetchPosts } from '@/utils/blog';
import { getPermalink } from '@/utils/permalinks';

export const GET = async () => {
  const posts = await fetchPosts();

  const rss = await getRssString({
    title: `Kanav's Blog`,
    description: '',
    site: import.meta.env.SITE,

    items: posts.map((post) => ({
      link: getPermalink(post.permalink, 'post'),
      title: post.title,
      description: post.excerpt,
      pubDate: post.publishDate,
    })),

    trailingSlash: true,
  });

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
};
