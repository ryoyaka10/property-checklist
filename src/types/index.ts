export type BadgeType = 'must' | 'good' | 'info' | 'warn';

export type AlertType = 'info' | 'warn' | 'danger';

export interface CheckItemData {
  id: string;
  label: string;
  note?: string;
  badge: BadgeType;
}

export interface CheckSectionData {
  id: string;
  title: string;
  items: CheckItemData[];
  alert?: {
    type: AlertType;
    message: string;
  };
}

export interface TabData {
  id: string;
  label: string;
  intro: string;
  sections: CheckSectionData[];
}
