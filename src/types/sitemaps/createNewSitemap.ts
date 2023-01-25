import { SiteMap } from '../domains/createNewDomain';

export interface CreateNewSitemapOptions {
  domainId: string;
  sitemapUrl: string;
}

export type CreateNewSitemapResponse = SiteMap;
