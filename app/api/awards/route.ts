import { mockAwardsData } from '../../mocks/awards';

export async function GET() {
  return Response.json(mockAwardsData);
} 