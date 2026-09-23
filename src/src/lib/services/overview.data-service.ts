import type { Overview } from "$lib/models/overview";

export class OverviewDataService {
  async getAsync(fetchFn: typeof fetch): Promise<Overview> {
    const response = await fetchFn('http://localhost:5000/api/services/overview');
    return await response.json();
  }
}

export const overviewDataService = new OverviewDataService();