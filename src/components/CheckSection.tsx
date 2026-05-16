import type { CheckSectionData } from '../types';
import AlertBox from './AlertBox';
import CheckItem from './CheckItem';

interface Props {
  section: CheckSectionData;
  checkedIds: Set<string>;
  onToggle: (id: string) => void;
  propertyAddress: string;
}

export default function CheckSection({ section, checkedIds, onToggle, propertyAddress }: Props) {
  const doneCount = section.items.filter(item => checkedIds.has(item.id)).length;
  const total = section.items.length;

  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-base font-semibold text-gray-700">{section.title}</h2>
        <span className="text-xs text-gray-400">{doneCount}/{total}</span>
      </div>
      {section.alert && (
        <div className="mb-3">
          <AlertBox type={section.alert.type}>{section.alert.message}</AlertBox>
        </div>
      )}
      <ul className="divide-y divide-gray-100 border border-gray-100 rounded-xl bg-white">
        {section.items.map(item => (
          <CheckItem
            key={item.id}
            item={item}
            checked={checkedIds.has(item.id)}
            onToggle={onToggle}
            propertyAddress={propertyAddress}
          />
        ))}
      </ul>
    </div>
  );
}
