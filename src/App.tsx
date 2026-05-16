import { useState } from 'react';
import { useChecklist } from './hooks/useChecklist';
import checklistData from './data/checklistData';
import ProgressBar from './components/ProgressBar';
import TabPanel from './components/TabPanel';

export default function App() {
  const [activeTab, setActiveTab] = useState(0);
  const { checkedIds, toggle, reset, totalCount, doneCount } = useChecklist();

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-2xl mx-auto px-4 pt-4 pb-0">
          <h1 className="text-xl font-bold text-gray-900 mb-3">物件チェックシート</h1>
          <ProgressBar done={doneCount} total={totalCount} onReset={reset} />
          <nav className="flex gap-1 mt-3">
            {checklistData.map((tab, index) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(index)}
                className={`flex-1 py-2 text-sm font-medium rounded-t-lg transition-colors border-b-2 ${
                  activeTab === index
                    ? 'text-purple-700 border-purple-600 bg-purple-50'
                    : 'text-gray-500 border-transparent hover:text-gray-700 hover:bg-gray-50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 py-5">
        <TabPanel
          tab={checklistData[activeTab]}
          checkedIds={checkedIds}
          onToggle={toggle}
        />
      </main>
    </div>
  );
}
