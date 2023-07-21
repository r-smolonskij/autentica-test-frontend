export interface Inquiry {
  id?: number;
  deviceId: number;
  justification?: string;
  date: Date;
  status: 'requested' | 'confirmed' | 'rejected';
}
