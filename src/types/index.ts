export type Language = 'en' | 'th';

export type MenuCategory = 'all' | 'chocolate' | 'coffee' | 'desserts';

export interface MenuItem {
  id: string;
  nameEn: string;
  nameTh: string;
  category: MenuCategory;
  subcategoryEn: string;
  subcategoryTh: string;
  descriptionEn: string;
  descriptionTh: string;
  tastingNotesEn?: string[];
  tastingNotesTh?: string[];
  image: string;
  badgeEn?: string;
  badgeTh?: string;
}

export interface GalleryItem {
  id: string;
  titleEn: string;
  titleTh: string;
  category: 'chocolate' | 'coffee' | 'desserts' | 'atmosphere' | 'moments';
  image: string;
  captionEn: string;
  captionTh: string;
}

export interface ReservationFormData {
  fullName: string;
  phone: string;
  date: string;
  time: string;
  guests: string;
  specialRequest: string;
}
