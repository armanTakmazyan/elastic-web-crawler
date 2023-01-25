export interface CreateNewProcessCrawlOptions {
  dry_run?: boolean;
  domains?: string[];
}

export interface ProcessCrawl {
  id: string;
  dry_run: boolean;
  total_url_count: number;
  denied_url_count: number;
  domains: string[];
  process_all_domains: boolean;
  created_at: string;
  begun_at: string | null;
  completed_at: string | null;
}

export type CreateNewProcessCrawlResponse = ProcessCrawl;
