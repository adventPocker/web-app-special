import { heroAwardsData } from '../../mocks/heroData';

export async function GET() {
  return Response.json(heroAwardsData);
} 