export interface Inquiry {
  id?: number;
  deviceId: number;
  justification?: string; //string | undefined | null,
  date: Date;
  status: 'requested' | 'confirmed' | 'rejected';
}
