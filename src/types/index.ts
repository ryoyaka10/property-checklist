export type BadgeType = 'must' | 'good' | 'info' | 'warn';

export type AlertType = 'info' | 'warn' | 'danger';

export interface MapLinkConfig {
  origin?: string;       // 'PROPERTY' で入力住所に置換
  destination?: string;  // 'PROPERTY' で入力住所に置換
  mode?: 'walking' | 'transit' | 'bicycling' | 'driving';
  searchQuery?: string;  // 設定時はsearchモードで開く
}

export interface SearchLinkConfig {
  keyword: string;
}

export interface CheckItemData {
  id: string;
  label: string;
  note?: string;
  badge: BadgeType;
  mapLink?: MapLinkConfig;
  searchLink?: SearchLinkConfig;
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
