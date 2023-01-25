import { ValidateUrlResponseResult } from './validateURL';
import {
  ResultForDomainAccess,
  ResultForCrawlRules,
  URLCheck,
} from './validateChecksResults';

export type ValidateDomainCheck = Exclude<
  URLCheck,
  'crawl_rules' | 'domain_access'
>;

export interface ValidateDomainOptions {
  url: string;
  checks?: ValidateDomainCheck[];
}

export type ValidateDomainResponseResult = Exclude<
  ValidateUrlResponseResult,
  ResultForCrawlRules | ResultForDomainAccess
>;

export interface ValidateDomainResponse {
  url: string;
  valid: boolean;
  normalized_url: string;
  results: ValidateDomainResponseResult[];
}
