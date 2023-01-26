import {
  CrawlTemplate,
  CrawlType,
  CrawlStatus,
  CrawlConfig,
} from '../crawlRequests/createCrawl';
import { CreateNewDomainResponse } from '../domains/createNewDomain';

export interface Event extends CrawlTemplate<CrawlType, CrawlStatus> {
  stage: string;
  crawl_config: CrawlConfig;
}

export type MostRecentCrawlRequest = CrawlTemplate<CrawlType, CrawlStatus>;

export interface CrawlerResponse {
  events: Event[];
  domains: CreateNewDomainResponse[];
  most_recent_crawl_request: MostRecentCrawlRequest;
}
