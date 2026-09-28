import api from '@/lib/api-client';

export interface PracticeArea {
  id: number;
  slug: string;
  name: string;
  icon: string;
  short_description: string;
  full_description: string;
  category: string;
  order: number;
  handles: { item: string; order: number }[];
}

export const getPracticeAreas = async (): Promise<PracticeArea[]> => {
  const response = await api.get('/practice-areas/');
  return response.data;
};

export const getPracticeAreaBySlug = async (slug: string): Promise<PracticeArea> => {
  const response = await api.get(`/practice-areas/${slug}/`);
  return response.data;
};
