export interface ViewDeniedUrlsForAProcessCrawlOptions {
  processCrawlId: string;
}

export interface ViewDeniedUrlsForAProcessCrawlResponse {
  total_url_count: number;
  denied_url_count: number;
  sample_size: number;
  denied_urls_sample: string[];
}
