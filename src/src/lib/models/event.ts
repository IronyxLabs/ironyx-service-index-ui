import type { ServiceStatus } from "./service-status";

export interface EventEntry {
  status: ServiceStatus,
  name: string,
}