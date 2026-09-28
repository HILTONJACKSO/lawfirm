import api from '@/lib/api-client';

export interface BlogCategory {
  id: number;
  name: string;
  slug: string;
}

export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  cover_image: string;
  author: { full_name: string; slug: string };
  category: { name: string; slug: string };
  published_at: string;
  read_time: number;
}

export const getBlogPosts = async (params?: { category__slug?: string; author__slug?: string; search?: string }): Promise<BlogPost[]> => {
  const response = await api.get('/blog/posts/', { params });
  return response.data;
};

export const getBlogPostBySlug = async (slug: string): Promise<BlogPost> => {
  const response = await api.get(`/blog/posts/${slug}/`);
  return response.data;
};

export const getBlogCategories = async (): Promise<BlogCategory[]> => {
  const response = await api.get('/blog/categories/');
  return response.data;
};
