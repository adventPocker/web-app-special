import { mockMovieCardData } from '../mocks/movieCards';
import { mockFilmData } from '../mocks/filmDetails';
import { mockTopMediaData } from '../mocks/topMedia';
import { mockAwardsData } from '../mocks/awards';
import { mockPersonalData } from '../mocks/personalInfo';
import { heroAwardsData } from '../mocks/heroData';

export async function getMovieCardData(): Promise<ApiFilmCard> {
  const res = await fetch('/api/movieCards', { cache: 'no-store' });
  if (!res.ok) throw new Error('Failed to fetch movie card data');
  return res.json();
}

export async function getFilmData({
  slugs,
}: {
  slugs: string;
}): Promise<ApiFilmData> {
  const res = await fetch('/api/filmDetails', { cache: 'no-store' });
  if (!res.ok) throw new Error('Failed to fetch film data');
  const allData = await res.json();
  // Filter the data based on the slug
  const filteredData = {
    data: allData.data.filter((film: any) => film.attributes.slug === slugs),
    meta: allData.meta
  };
  return filteredData;
}

export async function getTopMedias(): Promise<ApiTopMedia> {
  const res = await fetch('/api/topMedia', { cache: 'no-store' });
  if (!res.ok) throw new Error('Failed to fetch top media data');
  return res.json();
}

export async function getAwardsData(): Promise<AwardApiResponse> {
  const res = await fetch('/api/awards', { cache: 'no-store' });
  if (!res.ok) throw new Error('Failed to fetch awards data');
  return res.json();
}

export async function getPersonalData(): Promise<PersonalApiResponse> {
  const res = await fetch('/api/personalInfo', { cache: 'no-store' });
  if (!res.ok) throw new Error('Failed to fetch personal data');
  return res.json();
}

export async function getHeroData(): Promise<HeroDataResponse> {
  const res = await fetch('/api/heroData', { cache: 'no-store' });
  if (!res.ok) throw new Error('Failed to fetch hero data');
  return res.json();
}
  