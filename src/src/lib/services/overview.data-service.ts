import type { Overview } from "$lib/models/overview";

export class OverviewDataService {
  async getAsync(): Promise<Overview> {
    // const response = await fetch('http://localhost:5000/api/services/overview');
    // return await response.json();
    return { serviceCount: 25, healthyCount: 22, degradedCount: 1, unhealthyCount: 2 }
  }
}