import { mockMovieCardData } from '../../mocks/movieCards';

export async function GET() {
  return Response.json(mockMovieCardData);
} 