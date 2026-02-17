const PRODUCTION_URL = 'https://slides.vercel.sh';

export function blobUrl(path: string): string {
  // proxy through /assets rewrite for images, logos, and headshots
  if (
    path.startsWith('/images') ||
    path.startsWith('/logos') ||
    path.startsWith('/headshots')
  ) {
    return `${PRODUCTION_URL}/assets${path}`;
  }
  return path;
}
