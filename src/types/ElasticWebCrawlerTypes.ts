import { AxiosInstance } from 'axios';

export interface ElasticWebCrawlerRequiredArguments {
  baseUrl: string;
  engineName: string;
  token: string;
}

export type ElasticWebCrawlerClient = (
  args: ElasticWebCrawlerRequiredArguments,
) => AxiosInstance;

export interface ElasticWebCrawlerArguments
  extends ElasticWebCrawlerRequiredArguments {
  client?: ElasticWebCrawlerClient;
}
