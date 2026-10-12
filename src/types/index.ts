export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  estimatedDuration: string;
  inclusions: string[];
  recommendedFor: string;
  popular?: boolean;
}

export interface BeforeAfterCase {
  id: string;
  title: string;
  category: 'cleaning' | 'unyellowing' | 'repair' | 'repaint' | 'suede';
  categoryLabel: string;
  shoeType: string;
  description: string;
  treatmentDetails: string[];
  beforeImage: string;
  afterImage: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  role: string;
  rating: number;
  date: string;
  treatment: string;
  content: string;
  verified: boolean;
  highlight?: boolean;
}

export interface PickupArea {
  name: string;
  subdistricts: string[];
  status: 'Gratis Antar-Jemput' | 'Terjangkau' | 'Konfirmasi Admin';
  statusType: 'free' | 'available' | 'custom';
  etaNotes: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}
