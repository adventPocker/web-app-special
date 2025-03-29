import { mockMovieCardData } from '../mocks/movieCards';
import { mockFilmData } from '../mocks/filmDetails';
import { mockTopMediaData } from '../mocks/topMedia';
import { mockAwardsData } from '../mocks/awards';
import { mockPersonalData } from '../mocks/personalInfo';

export async function getMovieCardData(): Promise<ApiFilmCard> {
  return mockMovieCardData;
}

export async function getFilmData({
  slugs,
}: {
  slugs: string;
}): Promise<ApiFilmData> {
  // Filter the data based on the slug
  const filteredData = {
    data: mockFilmData.data.filter(film => film.attributes.slug === slugs),
    meta: mockFilmData.meta
  };
  
  return filteredData;
}

export async function getTopMedias(): Promise<ApiTopMedia> {
  return mockTopMediaData;
}

export async function getAwardsData(): Promise<AwardApiResponse> {
  return mockAwardsData;
}

export async function getPersonalData(): Promise<PersonalApiResponse> {
  return mockPersonalData;
}
