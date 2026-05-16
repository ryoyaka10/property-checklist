import { useState } from 'react';
import checklistData from '../data/checklistData';

const STORAGE_KEY = 'property-checklist-v1';

function loadFromStorage(): Set<string> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return new Set();
    const ids: string[] = JSON.parse(raw);
    return new Set(ids);
  } catch {
    return new Set();
  }
}

function saveToStorage(ids: Set<string>) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(Array.from(ids)));
}

export function useChecklist() {
  const [checkedIds, setCheckedIds] = useState<Set<string>>(() => loadFromStorage());

  const toggle = (id: string) => {
    setCheckedIds(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      saveToStorage(next);
      return next;
    });
  };

  const reset = () => {
    const empty = new Set<string>();
    saveToStorage(empty);
    setCheckedIds(empty);
  };

  const totalCount = checklistData.reduce(
    (sum, tab) => sum + tab.sections.reduce((s, sec) => s + sec.items.length, 0),
    0
  );

  const doneCount = checkedIds.size;

  return { checkedIds, toggle, reset, totalCount, doneCount };
}
