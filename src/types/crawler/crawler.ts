import {
  CrawlTemplate,
  CrawlType,
  CrawlStatus,
  CrawlConfig,
} from '../crawlRequests/createCrawl';
import { CreateNewDomainResponseResult } from '../domains/createNewDomain';

export interface Event {
  id: string;
  type: string;
  stage: string;
  status: string;
  crawl_config: CrawlConfig;
  created_at: string;
  begun_at: string | null;
  completed_at: string | null;
}

export type MostRecentCrawlRequest = CrawlTemplate<CrawlType, CrawlStatus>;

export interface CrawlerResponse {
  events: Event[];
  domains: CreateNewDomainResponseResult[];
  most_recent_crawl_request: MostRecentCrawlRequest;
}
