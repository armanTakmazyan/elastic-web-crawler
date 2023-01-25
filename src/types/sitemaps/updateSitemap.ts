import { SiteMap } from '../domains';

export interface UpdateSitemapOptions {
  domainId: string;
  sitemapId: string;
  sitemapUrl: string;
}

export type UpdateSitemapResponse = SiteMap;
