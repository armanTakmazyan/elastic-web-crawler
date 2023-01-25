import { CrawlScheduleUnit } from './crawlScheduleUnit';

export interface CreateOrUpdateCrawlScheduleOptions {
  frequency: number;
  unit: CrawlScheduleUnit;
}

export interface CreateOrUpdateCrawlScheduleResponse {
  engine: string;
  frequency: number;
  unit: CrawlScheduleUnit;
}
