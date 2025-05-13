import { mockPersonalData } from '../../mocks/personalInfo';

export async function GET() {
  return Response.json(mockPersonalData);
} 