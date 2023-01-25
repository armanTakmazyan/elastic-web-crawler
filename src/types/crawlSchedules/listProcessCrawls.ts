import { ProcessCrawl } from './createNewProcessCrawl';

export interface ListProcessCrawlsOptions {
  page: {
    current?: number;
    size?: number;
  };
}

export interface ListProcessCrawlsPage {
  current: number;
  total_pages: number;
  total_results: number;
  size: number;
}

export interface ListProcessCrawlsResponse {
  meta: {
    page: ListProcessCrawlsPage;
  };
  results: ProcessCrawl[];
}
