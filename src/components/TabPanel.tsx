import type { TabData } from '../types';
import AlertBox from './AlertBox';
import CheckSection from './CheckSection';

interface Props {
  tab: TabData;
  checkedIds: Set<string>;
  onToggle: (id: string) => void;
}

export default function TabPanel({ tab, checkedIds, onToggle }: Props) {
  return (
    <div>
      <div className="mb-4">
        <AlertBox type="info">{tab.intro}</AlertBox>
      </div>
      {tab.sections.map(section => (
        <CheckSection
          key={section.id}
          section={section}
          checkedIds={checkedIds}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
}
