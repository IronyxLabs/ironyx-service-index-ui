import { ServiceStatus } from '$lib/models/service-status.js';
import { loaderService } from '$lib/services/loader.service.svelte.js';
import { overviewDataService } from '$lib/services/overview.data-service.js';

export async function load({ fetch }) {
  loaderService.show('overview');
  const response = await overviewDataService.getAsync(fetch);
  loaderService.hide('overview');
  
  return {
    overview: response,
    entries: [{
      status: ServiceStatus.Unhealthy,
      name: 'RabbitMQ'
    }, {
      status: ServiceStatus.Degraded,
      name: "Redis"
    }]
  }
}