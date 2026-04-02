export interface UserProfile {
  name: string;
  age: string;
  gender: string;
  phone: string;
  isFirstTime: boolean;
  hasHistory: boolean;
}

export type RiskLevel = 'low' | 'medium' | 'high' | null;

export type PageType = 
  | 'Home' 
  | 'Profile' 
  | 'Upload' 
  | 'AIProcessing' 
  | 'Report' 
  | 'Intervention' 
  | 'CheckIn' 
  | 'FollowUp' 
  | 'Mine';
