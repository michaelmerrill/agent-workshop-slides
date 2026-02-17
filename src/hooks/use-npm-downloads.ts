'use client';

import useSWR from 'swr';

type DownloadStats = {
  formatted: string;
  raw: number | null;
  loading: boolean;
};

function formatDownloads(count: number): string {
  if (count >= 1_000_000) {
    return `${Math.floor(count / 1_000_000)}M+`;
  }
  return `${Math.floor(count / 1_000)}k+`;
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function useNpmDownloads(packageName: string): DownloadStats {
  const { data, isLoading } = useSWR<{ downloads?: number }>(
    `https://api.npmjs.org/downloads/point/last-week/${packageName}`,
    fetcher,
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      refreshInterval: 300000,
      dedupingInterval: 300000,
    },
  );

  if (isLoading || !data?.downloads) {
    return { formatted: '', raw: null, loading: isLoading };
  }

  return {
    formatted: formatDownloads(data.downloads),
    raw: data.downloads,
    loading: false,
  };
}
