import { DefaultCrawlRule, EntryPoint } from './createNewDomain';
// The "basic" type is not supported yet
// {
//   "auth": {
//     "type": "basic",
//     "username": "kimchy",
//     "password": ":)"
//   }
// }

export interface AuthType {
  type: 'raw';
  value: string;
}

export interface UpdateDomainOptions {
  domainId: string;
  domainData: {
    name: string;
    auth?: AuthType;
  };
}

export interface UpdateDomainResponse {
  id: string;
  name: string;
  document_count: number;
  entry_points: EntryPoint[];
  crawl_rules: any[];
  default_crawl_rule: DefaultCrawlRule;
  sitemaps: any[];
}
