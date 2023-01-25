import { CrawlScheduleUnit } from './crawlScheduleUnit';

export interface CurrentCrawlScheduleResponse {
  engine: string;
  frequency: number;
  unit: CrawlScheduleUnit;
}
