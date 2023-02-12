export const CrawlTypes = ['full', 'partial'] as const;

export type CrawlType = (typeof CrawlTypes)[number];

export const CrawlStatuses = [
  'pending',
  'starting',
  'running',
  'success',
  'canceling',
  'canceled',
  'failed',
  'skipped',
] as const;

export type CrawlStatus = (typeof CrawlStatuses)[number];

export interface DeduplicationSetting {
  source?: string;
  fields?: string[];
  url_pattern?: string;
}

export interface CrawlRule {
  policy?: string;
  source?: string;
  url_pattern?: string;
}

export interface CrawlConfig {
  crawl_rules: CrawlRule[];
  max_crawl_depth: number;
  seed_urls: string[];
  sitemap_urls: string[];
  sitemap_discovery_disabled?: boolean;
  domain_allowlist: string[];
  deduplication_settings: DeduplicationSetting[];
  content_extraction_enabled: boolean;
  content_extraction_mime_types: any[];
}

export interface CrawlStatistics {
  timestamp: string;
  event_id: string;
  status: {
    queue_size: number;
    avg_response_time_msec: number;
    pages_visited: number;
    status_codes: {
      [key: string]: number;
    };
    urls_allowed: number;
    active_threads: number;
    crawl_duration_msec: number;
    crawling_time_msec: number;
    http_client: {
      [key: string]: number;
    };
    urls_denied?: {
      [key: string]: number;
    };
  };
  crawl: {
    id: string;
    stage: string;
  };
}

export interface CrawlTemplate<
  Type extends CrawlType,
  Status extends CrawlStatus,
> {
  id: string;
  type: Type;
  status: Status;
  created_at: string;
  begun_at: string | null;
  completed_at: string | null;
}

export type CreateCrawlResponse = CrawlTemplate<'full', 'pending'>;
