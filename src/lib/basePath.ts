const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/**
 * Prefixes a root-relative local path (e.g. "/images/logo.svg") with the app's
 * basePath. Needed because `next/image` with `unoptimized: true` (required for
 * static export) renders the given src as-is, without applying basePath itself.
 */
export function withBasePath(path: string) {
  if (!path || /^https?:\/\//.test(path)) return path;
  return `${basePath}${path.startsWith("/") ? path : `/${path}`}`;
}
