import { CrawlTemplate } from './createCrawl';

export interface CreatePartialCrawlOptions {
  overrides: {
    max_crawl_depth?: number;
    domain_allowlist?: string[];
    seed_urls?: string[];
    sitemap_urls?: string[];
  };
}

export type CreatePartialCrawlResponse = CrawlTemplate<'partial', 'pending'>;
