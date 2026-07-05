import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_URL, priority: 1 },
    { url: `${SITE_URL}/offerings`, priority: 0.9 },
    { url: `${SITE_URL}/about`, priority: 0.7 },
    { url: `${SITE_URL}/apply`, priority: 0.5 },
    { url: `${SITE_URL}/privacy`, priority: 0.2 },
    { url: `${SITE_URL}/terms`, priority: 0.2 },
    { url: `${SITE_URL}/accessibility`, priority: 0.2 },
  ];
}
