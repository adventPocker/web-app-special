import { mockTopMediaData } from '../../mocks/topMedia';

export async function GET() {
  return Response.json(mockTopMediaData);
} 