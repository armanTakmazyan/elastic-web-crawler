import axios, { AxiosRequestConfig, AxiosInstance, AxiosResponse } from 'axios';
import * as ElasticWebCrawlerTypes from './types';
import queryString from 'query-string';

export class ElasticWebCrawler {
  readonly baseUrl: string;
  readonly engineName: string;
  readonly token: string;
  readonly axiosInstance: AxiosInstance;

  constructor(args: ElasticWebCrawlerTypes.ElasticWebCrawlerArguments) {
    const { client, ...requiredArguments } = args;
    this.baseUrl = requiredArguments.baseUrl;
    this.engineName = requiredArguments.engineName;
    this.token = requiredArguments.token;
    const axiosDefaultConfig: AxiosRequestConfig = {
      baseURL: `${this.baseUrl}/api/as/v1/engines/${this.engineName}/`,
      paramsSerializer: {
        serialize: params => queryString.stringify(params),
      },
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.token}`,
      },
    };
    this.axiosInstance = client
      ? client(requiredArguments)
      : axios.create(axiosDefaultConfig);
  }

  async handleResponse<T>(promise: Promise<AxiosResponse<T>>): Promise<T> {
    const response = await promise;
    return response.data;
  }

  // #region Crawler
  /**
   *
   * @description A GET request to return the domain objects configured for an engine
   */
  async crawler(): Promise<ElasticWebCrawlerTypes.CrawlerResponse> {
    return this.handleResponse<ElasticWebCrawlerTypes.CrawlerResponse>(
      this.axiosInstance.get('crawler'),
    );
  }

  // #endregion

  // #region crawlRequests
  /**
   *
   * @description A GET request to return current active crawl information for an engine
   */
  async currentActiveCrawl(): Promise<ElasticWebCrawlerTypes.CurrentActiveCrawlResponse> {
    return this.handleResponse<ElasticWebCrawlerTypes.CurrentActiveCrawlResponse>(
      this.axiosInstance.get('crawler/crawl_requests/active'),
    );
  }

  /**
   *
   * @description A POST request to cancel an active crawl for an engine:
   */
  async cancelActiveCrawl(): Promise<ElasticWebCrawlerTypes.CancelActiveCrawlResponse> {
    return this.handleResponse<ElasticWebCrawlerTypes.CancelActiveCrawlResponse>(
      this.axiosInstance.post('crawler/crawl_requests/active/cancel'),
    );
  }

  /**
   *
   * @description A GET request to return a list of crawl requests for an engine
   */
  async listCrawlRequests(
    options?: ElasticWebCrawlerTypes.ListCrawlRequestsOptions,
  ): Promise<ElasticWebCrawlerTypes.ListCrawlRequestsResponse> {
    const params = options && {
      'page[current]': options.page.current,
      'page[size]': options.page.size,
    };
    return this.handleResponse<ElasticWebCrawlerTypes.ListCrawlRequestsResponse>(
      this.axiosInstance.get('crawler/crawl_requests', { params }),
    );
  }

  /**
   *
   * @description A POST request to start a new crawl for an engine
   */
  async createCrawl(): Promise<ElasticWebCrawlerTypes.CreateCrawlResponse> {
    return this.handleResponse<ElasticWebCrawlerTypes.CreateCrawlResponse>(
      this.axiosInstance.post('crawler/crawl_requests'),
    );
  }

  /**
   *
   * @description A POST request to start a partial crawl for an engine
   */
  async createPartialCrawl(
    options?: ElasticWebCrawlerTypes.CreatePartialCrawlOptions,
  ): Promise<ElasticWebCrawlerTypes.CreatePartialCrawlResponse> {
    return this.handleResponse<ElasticWebCrawlerTypes.CreatePartialCrawlResponse>(
      this.axiosInstance.post('crawler/crawl_requests', options),
    );
  }

  /**
   *
   * @description A GET request to return the details of a given crawl request, identified by its Crawl Request ID value
   */
  async detailsForACrawlRequest(
    options: ElasticWebCrawlerTypes.DetailsForACrawlRequstOptions,
  ): Promise<ElasticWebCrawlerTypes.DetailsForACrawlRequestResponse> {
    return this.handleResponse<ElasticWebCrawlerTypes.DetailsForACrawlRequestResponse>(
      this.axiosInstance.get(
        `crawler/crawl_requests/${options.crawlRequestId}`,
      ),
    );
  }

  // #endregion

  // #region crawlSchedules
  /**
   *
   * @description A GET request to return the crawl schedule for a given crawl request
   */
  async currentCrawlSchedule(): Promise<ElasticWebCrawlerTypes.CurrentCrawlScheduleResponse> {
    return this.handleResponse<ElasticWebCrawlerTypes.CurrentCrawlScheduleResponse>(
      this.axiosInstance.get('/crawler/crawl_schedule'),
    );
  }

  /**
   *
   * @description A PUT request to create or update a crawl schedule for an engine
   */
  async createOrUpdateCrawlSchedule(
    options: ElasticWebCrawlerTypes.CreateOrUpdateCrawlScheduleOptions,
  ): Promise<ElasticWebCrawlerTypes.CreateOrUpdateCrawlScheduleResponse> {
    return this.handleResponse<ElasticWebCrawlerTypes.CreateOrUpdateCrawlScheduleResponse>(
      this.axiosInstance.put('crawler/crawl_schedule', options),
    );
  }

  /**
   *
   * @description  A DELETE request to delete a crawl schedule for an engine
   */
  async deleteCrawlSchedule(): Promise<ElasticWebCrawlerTypes.DeleteCrawlScheduleResponse> {
    return this.handleResponse<ElasticWebCrawlerTypes.DeleteCrawlScheduleResponse>(
      this.axiosInstance.delete('crawler/crawl_schedule'),
    );
  }

  /**
   *
   * @description  A GET request to return the process crawls for a given engine
   */
  async listProcessCrawls(
    options?: ElasticWebCrawlerTypes.ListProcessCrawlsOptions,
  ): Promise<ElasticWebCrawlerTypes.ListProcessCrawlsResponse> {
    const params = options && {
      'page[current]': options.page.current,
      'page[size]': options.page.size,
    };
    return this.handleResponse<ElasticWebCrawlerTypes.ListProcessCrawlsResponse>(
      this.axiosInstance.get('/crawler/process_crawls', { params }),
    );
  }

  /**
   *
   * @description  A GET request to view a process crawl for a given engine, identified by the process crawl ID
   */
  async viewProcessCrawl(
    options: ElasticWebCrawlerTypes.ViewProcessCrawlOptions,
  ): Promise<ElasticWebCrawlerTypes.ViewProcessCrawlResponse> {
    return this.handleResponse<ElasticWebCrawlerTypes.ViewProcessCrawlResponse>(
      this.axiosInstance.get(`/process_crawls/${options.processCrawlId}`),
    );
  }

  /**
   *
   * @description  A GET request to view a sample of denied URLs for a given process crawl
   */
  async viewDeniedUrlsForAProcessCrawl(
    options: ElasticWebCrawlerTypes.ViewDeniedUrlsForAProcessCrawlOptions,
  ): Promise<ElasticWebCrawlerTypes.ViewDeniedUrlsForAProcessCrawlResponse> {
    return this.handleResponse<ElasticWebCrawlerTypes.ViewDeniedUrlsForAProcessCrawlResponse>(
      this.axiosInstance.get(
        `/crawler/process_crawls/${options.processCrawlId}/denied_urls`,
      ),
    );
  }

  /**
   *
   * @description  A POST request to create a new process crawl for the given engine
   */
  async createNewProcessCrawl(
    options?: ElasticWebCrawlerTypes.CreateNewProcessCrawlOptions,
  ): Promise<ElasticWebCrawlerTypes.CreateNewProcessCrawlResponse> {
    return this.handleResponse<ElasticWebCrawlerTypes.CreateNewProcessCrawlResponse>(
      this.axiosInstance.post('crawler/process_crawls', options),
    );
  }

  // #endregion

  // #region URL validation and debugging
  /**
   *
   * @descriptionA A POST request to validate a domain using engine
   */
  async validateDomainUsingEngine(
    options: ElasticWebCrawlerTypes.ValidateDomainOptions,
  ): Promise<ElasticWebCrawlerTypes.ValidateDomainResponse> {
    return this.handleResponse<ElasticWebCrawlerTypes.ValidateDomainResponse>(
      this.axiosInstance.post('crawler/validate_url', options),
    );
  }

  /**
   *
   * @descriptionA A POST request to validate a domain
   */
  async validateDomain(
    options: ElasticWebCrawlerTypes.ValidateDomainOptions,
  ): Promise<ElasticWebCrawlerTypes.ValidateDomainResponse> {
    return this.handleResponse<ElasticWebCrawlerTypes.ValidateDomainResponse>(
      this.axiosInstance({
        method: 'post',
        url: 'crawler/validate_url',
        baseURL: `${this.baseUrl}/api/as/v1/`,
        data: options,
      }),
    );
  }

  /**
   *
   * @description A POST request to validate a url using engine
   */
  async validateUrlUsingEngine(
    options: ElasticWebCrawlerTypes.ValidateUrlOptions,
  ): Promise<ElasticWebCrawlerTypes.ValidateUrlResponse> {
    return this.handleResponse<ElasticWebCrawlerTypes.ValidateUrlResponse>(
      this.axiosInstance.post('crawler/validate_url', options),
    );
  }

  /**
   *
   * @description A POST request to validate a url
   */
  async validateUrl(
    options: ElasticWebCrawlerTypes.ValidateUrlOptions,
  ): Promise<ElasticWebCrawlerTypes.ValidateUrlResponse> {
    return this.handleResponse<ElasticWebCrawlerTypes.ValidateUrlResponse>(
      this.axiosInstance({
        method: 'post',
        url: 'crawler/validate_url',
        baseURL: `${this.baseUrl}/api/as/v1/`,
        data: options,
      }),
    );
  }

  // #endregion

  // #region Domains
  /**
   *
   * @description A GET request to return the domains for the given engine:
   */
  async listDomains(
    options?: ElasticWebCrawlerTypes.ListDomainsOptions,
  ): Promise<ElasticWebCrawlerTypes.ListDomainsResponse> {
    const params = options && {
      'page[current]': options.page.current,
      'page[size]': options.page.size,
    };
    return this.handleResponse<ElasticWebCrawlerTypes.ListDomainsResponse>(
      this.axiosInstance.get(`crawler/domains`, { params }),
    );
  }

  /**
   *
   * @description A POST request to create a new crawler domain for a given engine
   */
  async createNewDomain(
    options: ElasticWebCrawlerTypes.CreateNewDomainOptions,
  ): Promise<ElasticWebCrawlerTypes.CreateNewDomainResponse> {
    return this.handleResponse<ElasticWebCrawlerTypes.CreateNewDomainResponse>(
      this.axiosInstance.post('crawler/domains', options),
    );
  }

  /**
   *
   * @description A GET request to view the domain object for an engine:
   */
  async viewDetailsForADomain(
    options: ElasticWebCrawlerTypes.ViewDetailsForADomainOptions,
  ): Promise<ElasticWebCrawlerTypes.ViewDetailsForADomainResponse> {
    return this.handleResponse<ElasticWebCrawlerTypes.ViewDetailsForADomainResponse>(
      this.axiosInstance.get(`crawler/domains/${options.domainId}`),
    );
  }

  /**
   *
   * @description A PUT request to update a domain for an engine
   */
  async updateDomain(
    options: ElasticWebCrawlerTypes.UpdateDomainOptions,
  ): Promise<ElasticWebCrawlerTypes.UpdateDomainResponse> {
    return this.handleResponse<ElasticWebCrawlerTypes.UpdateDomainResponse>(
      this.axiosInstance.put(
        `crawler/domains/${options.domainId}`,
        options.domainData,
      ),
    );
  }

  /**
   *
   * @description  A DELETE request to delete a domain for an engine
   */
  async deleteDomain(
    options: ElasticWebCrawlerTypes.DeleteDomainOptions,
  ): Promise<ElasticWebCrawlerTypes.DeleteDomainResponse> {
    return this.handleResponse<ElasticWebCrawlerTypes.DeleteDomainResponse>(
      this.axiosInstance.delete(`crawler/domains/${options.domainId}`),
    );
  }

  // #endregion

  // #region Sitemaps
  /**
   *
   * @description A POST request to create a sitemap for a domain
   */
  async createNewSitemap(
    options: ElasticWebCrawlerTypes.CreateNewSitemapOptions,
  ): Promise<ElasticWebCrawlerTypes.CreateNewSitemapResponse> {
    return this.handleResponse<ElasticWebCrawlerTypes.CreateNewSitemapResponse>(
      this.axiosInstance.post(`crawler/domains/${options.domainId}/sitemaps`, {
        url: options.sitemapUrl,
      }),
    );
  }

  /**
   *
   * @description A PUT request to update a sitemap for a domain
   */
  async updateSitemap(
    options: ElasticWebCrawlerTypes.UpdateSitemapOptions,
  ): Promise<ElasticWebCrawlerTypes.UpdateSitemapResponse> {
    return this.handleResponse<ElasticWebCrawlerTypes.UpdateSitemapResponse>(
      this.axiosInstance.put(
        `crawler/domains/${options.domainId}/sitemaps/${options.sitemapId}`,
        {
          url: options.sitemapUrl,
        },
      ),
    );
  }

  /**
   *
   * @description A DELETE request to delete a sitemap for a domain
   */
  async deleteSitemap(
    options: ElasticWebCrawlerTypes.DeleteSitemapOptions,
  ): Promise<ElasticWebCrawlerTypes.DeleteSitemapResponse> {
    return this.handleResponse<ElasticWebCrawlerTypes.DeleteSitemapResponse>(
      this.axiosInstance.delete(
        `crawler/domains/${options.domainId}/sitemaps/${options.sitemapId}`,
      ),
    );
  }

  // #endregion
}
