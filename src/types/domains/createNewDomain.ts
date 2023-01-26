import { CrawlRule } from '../crawlRequests';

export interface DefaultCrawlRule {
  id: string;
  order: number;
  policy: string;
  rule: string;
  pattern: string;
  created_at: string;
}

export interface EntryPoint {
  id: string;
  value: string;
  created_at: string;
}

export interface ResponsePage {
  current: number;
  total_pages: number;
  total_results: number;
  size: number;
}

export interface SiteMap {
  id: string;
  url: string;
  created_at: string;
}

// The "basic" type is not supported yet
// {
//   "auth": {
//     "type": "basic",
//     "username": "kimchy",
//     "password": ":)"
//   }
// }
export interface CreateNewDomainOptions {
  name: string;
  auth?: {
    type: 'raw';
    header: string;
  };
}

export interface CreateNewDomainResponse {
  id: string;
  name: string;
  document_count: number;
  deduplication_enabled: boolean;
  deduplication_fields: string[];
  available_deduplication_fields: string[];
  auth: {
    type: 'raw'; // The "basic" type is not supported yet
  } | null;
  created_at: string;
  last_visited_at: string | null;
  entry_points: EntryPoint[];
  crawl_rules: CrawlRule[];
  default_crawl_rule: DefaultCrawlRule;
  sitemaps: SiteMap[];
}
