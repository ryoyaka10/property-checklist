import type { MapLinkConfig } from '../types';

const PROPERTY = 'PROPERTY';

export function buildMapsUrl(config: MapLinkConfig, address: string): string {
  const resolve = (s: string) => (s === PROPERTY ? address : s);

  if (config.searchQuery) {
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(config.searchQuery + ' ' + address)}`;
  }

  const params = new URLSearchParams({
    api: '1',
    origin: resolve(config.origin ?? ''),
    destination: resolve(config.destination ?? ''),
  });
  if (config.mode) params.set('travelmode', config.mode);

  return `https://www.google.com/maps/dir/?${params.toString()}`;
}
