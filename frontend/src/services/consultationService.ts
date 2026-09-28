import api from '@/lib/api-client';

export interface ConsultationRequest {
  full_name: string;
  email: string;
  phone: string;
  preferred_date: string;
  preferred_time: string;
  practice_area: string;
  description: string;
  urgency: 'low' | 'normal' | 'high' | 'urgent';
}

export interface ConsultationResponse extends ConsultationRequest {
  id: number;
  reference_number: string;
  status: string;
  created_at: string;
}

export const bookConsultation = async (data: ConsultationRequest): Promise<ConsultationResponse> => {
  const response = await api.post('/consultations/book/', data);
  return response.data;
};
