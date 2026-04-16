export interface Movie {
  id: number | string;
  title: string;
  description: string;
  language: string;
  release_year: number;
  content_type: 'movie' | 'tv_show';
  duration_minutes?: number;
  age_rating: string;
  poster_url: string;
  banner_url?: string;
  trailer_url?: string;
  genres: string[];
}

export type ThemeMode = 'cinematic' | 'minimal' | 'modern';
