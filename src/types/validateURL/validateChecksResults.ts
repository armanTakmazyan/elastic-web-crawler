export const URLChecks = [
  'crawl_rules',
  'domain_access',
  'dns',
  'robots_txt',
  'tcp',
  'url',
  'url_content',
  'url_request',
] as const;

export type URLCheck = (typeof URLChecks)[number];

export const URLCheckResults = ['ok', 'warning', 'failure'] as const;

export type URLCheckResult = (typeof URLCheckResults)[number];

export interface ResultForCrawlRules {
  result: URLCheckResult;
  name: 'crawl_rules';
  details: {
    rule: string;
  };
  comment: string;
}
export interface ResultForDomainAccess {
  result: URLCheckResult;
  name: 'domain_access';
  details: {
    domain: string;
  };
  comment: string;
}
export interface ResultForDNS {
  result: URLCheckResult;
  name: 'dns';
  details: {
    host: string;
    port: number;
  };
  comment: string;
}
export interface ResultForRobotsTxt {
  result: URLCheckResult;
  name: 'robots_txt';
  details: object;
  comment: string;
}
export interface ResultForTCP {
  result: URLCheckResult;
  name: 'tcp';
  details: {
    host: string;
    port: number;
  };
  comment: string;
}
export interface ResultForURL {
  result: URLCheckResult;
  name: 'url';
  details: object;
  comment: string;
}
export interface ResultForURLContent {
  result: URLCheckResult;
  name: 'url_content';
  details: object;
  comment: string;
}
export interface ResultForURLRequest {
  result: URLCheckResult;
  name: 'url_request';
  details: {
    status_code: number;
    content_type: string;
    request_time_msec: number;
  };
  comment: string;
}
