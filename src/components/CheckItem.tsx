import type { CheckItemData } from '../types';
import Badge from './Badge';

interface Props {
  item: CheckItemData;
  checked: boolean;
  onToggle: (id: string) => void;
}

export default function CheckItem({ item, checked, onToggle }: Props) {
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
      </div>
    </li>
  );
}
