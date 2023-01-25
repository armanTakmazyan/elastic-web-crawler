import {
  CrawlStatistics,
  CrawlTemplate,
  CrawlConfig,
  CrawlType,
} from './createCrawl';

export interface CurrentActiveCrawlResponse
  extends CrawlTemplate<CrawlType, 'running'> {
  crawl_config: CrawlConfig;
  stats: CrawlStatistics | null;
}
