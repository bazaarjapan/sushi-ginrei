export interface ReservationData {
  name: string;
  phone: string;
  email: string;
  date: string;
  time: string;
  guests: number;
  course: 'omakase_standard' | 'omakase_premium' | 'omakase_seasonal';
  requests: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export enum CourseType {
  STANDARD = 'omakase_standard',
  PREMIUM = 'omakase_premium',
  SEASONAL = 'omakase_seasonal'
}

export const COURSES = {
  [CourseType.STANDARD]: {
    label: '雪 - YUKI',
    price: '33,000円 (税込)',
    description: '季節の握りと酒肴を織り交ぜた、銀嶺の基本コース。'
  },
  [CourseType.PREMIUM]: {
    label: '月 - TSUKI',
    price: '55,000円 (税込)',
    description: '希少な食材と熟成ネタを贅沢に使用した特上コース。'
  },
  [CourseType.SEASONAL]: {
    label: '花 - HANA',
    price: '時価 (70,000円〜)',
    description: 'その日最高の食材のみで構成する、一期一会の極み。'
  }
};