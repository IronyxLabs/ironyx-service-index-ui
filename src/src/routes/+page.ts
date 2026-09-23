import { loaderService } from '$lib/services/loader.service.svelte.js';
import { overviewDataService } from '$lib/services/overview.data-service.js';

export async function load({ fetch }) {
  loaderService.show();
  const response = await overviewDataService.getAsync(fetch);
  loaderService.hide();
  
  return {
    overview: response
  }
}