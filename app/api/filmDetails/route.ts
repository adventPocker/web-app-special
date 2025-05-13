import { mockFilmData } from '../../mocks/filmDetails';

export async function GET() {
  return Response.json(mockFilmData);
} 