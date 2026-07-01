import type { CollectionEntry } from 'astro:content';

export function sortByTitle<T extends { data: { title?: string; name?: string } }>(entries: T[]) {
  return [...entries].sort((a, b) => {
    const left = a.data.title ?? a.data.name ?? '';
    const right = b.data.title ?? b.data.name ?? '';
    return left.localeCompare(right, 'cs');
  });
}

export function getPageBySlug(pages: CollectionEntry<'pages'>[], slug: string) {
  return pages.find((page) => page.data.slug === slug);
}

export function pathToRouteParam(path: string) {
  const cleanPath = path.replace(/^\/+|\/+$/g, '');
  return cleanPath || undefined;
}

export function getProjectDescription(project: CollectionEntry<'projects'>) {
  return project.data.contentText || project.data.summary || '';
}

export function uniqueBy<T>(items: T[], key: (item: T) => string) {
  const seen = new Set<string>();
  return items.filter((item) => {
    const value = key(item);
    if (seen.has(value)) return false;
    seen.add(value);
    return true;
  });
}
