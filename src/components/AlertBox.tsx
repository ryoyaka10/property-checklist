import type { AlertType } from '../types';

const styles: Record<AlertType, string> = {
  info: 'bg-purple-50 border-purple-400 text-purple-800',
  warn: 'bg-amber-50 border-amber-400 text-amber-800',
  danger: 'bg-red-50 border-red-400 text-red-800',
};

interface Props {
  type: AlertType;
  children: React.ReactNode;
}

export default function AlertBox({ type, children }: Props) {
  return (
    <div className={`border-l-4 px-4 py-3 rounded-r text-sm ${styles[type]}`}>
      {children}
    </div>
  );
}
