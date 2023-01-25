import {
  CrawlStatistics,
  CrawlTemplate,
  CrawlStatus,
  CrawlType,
  CrawlConfig,
} from './createCrawl';

export interface DetailsForACrawlRequstOptions {
  crawlRequestId: string;
}

export interface DetailsForACrawlRequestResponse
  extends CrawlTemplate<CrawlType, CrawlStatus> {
  crawl_config: CrawlConfig;
  stats: CrawlStatistics | null;
}
