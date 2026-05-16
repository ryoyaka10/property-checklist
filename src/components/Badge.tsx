import type { BadgeType } from '../types';

const styles: Record<BadgeType, string> = {
  must: 'bg-red-100 text-red-800',
  good: 'bg-green-100 text-green-800',
  info: 'bg-purple-100 text-purple-800',
  warn: 'bg-amber-100 text-amber-800',
};

const labels: Record<BadgeType, string> = {
  must: '必須',
  good: '推奨',
  info: '確認',
  warn: '注意',
};

export default function Badge({ type }: { type: BadgeType }) {
  return (
    <span className={`inline-block text-xs font-medium px-2 py-0.5 rounded-full whitespace-nowrap ${styles[type]}`}>
      {labels[type]}
    </span>
  );
}
