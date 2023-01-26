import { CreateNewDomainResponse, ResponsePage } from './createNewDomain';

export interface ListDomainsOptions {
  page: {
    current?: number;
    size?: number;
  };
}

export interface ListDomainsResponse {
  meta: {
    page: ResponsePage;
  };
  results: CreateNewDomainResponse[];
}
