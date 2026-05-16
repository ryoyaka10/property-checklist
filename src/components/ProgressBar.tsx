interface Props {
  done: number;
  total: number;
  onReset: () => void;
}

export default function ProgressBar({ done, total, onReset }: Props) {
  const percent = total === 0 ? 0 : Math.round((done / total) * 100);

  return (
    <div className="bg-white border-b border-gray-200 px-4 py-3">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-gray-700">
          {done} / {total} チェック済み
          <span className="ml-2 text-purple-600 font-semibold">{percent}%</span>
        </span>
        <button
          onClick={onReset}
          className="text-xs text-gray-400 hover:text-red-500 transition-colors px-2 py-1 rounded hover:bg-red-50"
        >
          リセット
        </button>
      </div>
      <div className="w-full bg-gray-100 rounded-full h-2">
        <div
          className="bg-purple-600 h-2 rounded-full transition-all duration-300"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}
