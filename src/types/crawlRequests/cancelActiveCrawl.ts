import { CrawlTemplate, CrawlType } from './createCrawl';

export type CancelActiveCrawlResponse = CrawlTemplate<CrawlType, 'canceling'>;
