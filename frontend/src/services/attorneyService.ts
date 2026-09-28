import api from '@/lib/api-client';

export interface Attorney {
  id: number;
  slug: string;
  full_name: string;
  title: string;
  bio: string;
  photo: string;
  profile_photo?: string; // For the new redesign
  email: string;
  linkedin_url: string;
  bar_number: string;
  bar_id?: string; // For the new redesign
  featured: boolean;
  specializations: { practice_area_name: string; practice_area_slug: string }[];
  education: { degree: string; institution: string; year: number }[];
}

export const getAttorneys = async (params?: { featured?: boolean }): Promise<Attorney[]> => {
  const response = await api.get('/attorneys/', { params });
  return response.data;
};

export const getAttorneyBySlug = async (slug: string): Promise<Attorney> => {
  const response = await api.get(`/attorneys/${slug}/`);
  return response.data;
};

export const getAttorneyCategories = async (): Promise<any[]> => {
  // In our backend, categories are practice areas
  const response = await api.get('/practice-areas/');
  return response.data;
};
