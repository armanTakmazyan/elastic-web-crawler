import { CrawlStatus, CrawlTemplate, CrawlType } from './createCrawl';

export interface ListCrawlRequestsOptions {
  page: {
    page?: number;
    size?: number;
  };
}

export interface ListCrawlRequestsPage {
  current: number;
  total_pages: number;
  total_results: number;
  size: number;
}

export interface ListCrawlRequestsResponse {
  meta: {
    page: ListCrawlRequestsPage;
  };
  results: CrawlTemplate<CrawlType, CrawlStatus>[];
}
