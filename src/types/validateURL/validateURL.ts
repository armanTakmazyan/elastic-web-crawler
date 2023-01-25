import {
  ResultForDomainAccess,
  ResultForCrawlRules,
  ResultForURLContent,
  ResultForURLRequest,
  ResultForRobotsTxt,
  ResultForDNS,
  ResultForTCP,
  ResultForURL,
  URLCheck,
} from './validateChecksResults';

export interface ValidateUrlOptions {
  url: string;
  checks?: URLCheck[];
}

export type ValidateUrlResponseResult =
  | ResultForCrawlRules
  | ResultForDomainAccess
  | ResultForDNS
  | ResultForRobotsTxt
  | ResultForTCP
  | ResultForURL
  | ResultForURLContent
  | ResultForURLRequest;

export interface ValidateUrlResponse {
  url: string;
  valid: boolean;
  normalized_url: string;
  results: ValidateUrlResponseResult[];
}
