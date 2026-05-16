import type { CheckItemData } from '../types';
import Badge from './Badge';
import { buildMapsUrl } from '../utils/mapUrl';

interface Props {
  item: CheckItemData;
  checked: boolean;
  onToggle: (id: string) => void;
  propertyAddress: string;
}

export default function CheckItem({ item, checked, onToggle, propertyAddress }: Props) {
  const mapsUrl = item.mapLink && propertyAddress
    ? buildMapsUrl(item.mapLink, propertyAddress)
    : null;

  return (
    <li
      className="flex items-start gap-3 py-3 px-2 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors"
      onClick={() => onToggle(item.id)}
    >
      <div className={`mt-0.5 w-5 h-5 flex-shrink-0 rounded border-2 flex items-center justify-center transition-colors ${
        checked ? 'bg-purple-600 border-purple-600' : 'border-gray-300'
      }`}>
        {checked && (
          <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        )}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex flex-wrap items-center gap-2">
          <span className={`text-sm leading-snug ${checked ? 'text-gray-400 line-through' : 'text-gray-800'}`}>
            {item.label}
          </span>
          <Badge type={item.badge} />
        </div>
        {item.note && (
          <p className="mt-0.5 text-xs text-gray-400">{item.note}</p>
        )}
        {item.mapLink && (
          <div className="mt-1">
            {mapsUrl ? (
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={e => e.stopPropagation()}
                className="inline-flex items-center gap-1 text-xs font-medium text-blue-600 hover:text-blue-800 hover:underline"
              >
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Googleマップで確認
              </a>
            ) : (
              <span className="inline-flex items-center gap-1 text-xs text-gray-300">
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                住所を入力すると地図で確認できます
              </span>
            )}
          </div>
        )}
      </div>
    </li>
  );
}
