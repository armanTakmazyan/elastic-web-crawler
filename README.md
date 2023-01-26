# elastic-web-crawler

This is an unofficial client for working with the Elastic Web Crawler API. As it utilizes the axios package, it is compatible not only in browser environments but also in Node.js.

## Installation

Using npm:

```bash
  npm install elastic-web-crawler
```

Using yarn:

```bash
  yarn add elastic-web-crawler
```

## Usage/Examples

Here is an example of a wrapper component that sets up the ElasticWebCrawler instance and passes it down to its child components:

```typescript
import React, {
  PropsWithChildren,
  createContext,
  useContext,
  useMemo,
} from 'react';
import {
  ElasticWebCrawler,
  ElasticWebCrawlerRequiredArguments,
} from 'elastic-web-crawler';

export const ElasticWebCrawlerContext = createContext<ElasticWebCrawler | null>(
  null,
);

export const useElasticWebCrawler = () => {
  const elasticWebCrawler = useContext(
    ElasticWebCrawlerContext,
  ) as ElasticWebCrawler;

  if (!elasticWebCrawler) {
    throw new Error(
      'ElasticWebCrawler not found. Make sure to use the ElasticWebCrawlerProvider at the top level of your application.',
    );
  }
  return elasticWebCrawler;
};

export interface ElasticWebCrawlerProviderProps {
  elasticWebCrawlerArguments: ElasticWebCrawlerRequiredArguments;
}

export const ElasticWebCrawlerProvider = ({
  children,
  elasticWebCrawlerArguments,
}: PropsWithChildren<ElasticWebCrawlerProviderProps>) => {
  const elasticWebCrawler = useMemo(
    () => new ElasticWebCrawler(elasticWebCrawlerArguments),
    [elasticWebCrawlerArguments],
  );

  return (
    <ElasticWebCrawlerContext.Provider value={elasticWebCrawler}>
      {children}
    </ElasticWebCrawlerContext.Provider>
  );
};
```

Then, at the top level of your application, you can wrap your components with the ElasticWebCrawlerProvider component and pass in the client instance. Any component that needs access to the ElasticWebCrawler instance can use the useElasticWebCrawler hook to gain access to it.

```typescript
import { ElasticWebCrawlerProvider } from './ElasticWebCrawlerContext';
import { useElasticWebCrawler } from './ElasticWebCrawlerContext';

const App = () => (
  <ElasticWebCrawlerProvider
    elasticWebCrawlerArguments={{
      engineName: 'engineName',
      baseUrl: 'baseUrl',
      token: 'token',
    }}
  >
    <YourComponent />
  </ElasticWebCrawlerProvider>
);

const YourComponent = () => {
  const elasticWebCrawler = useElasticWebCrawler();
  // use the crawler instance here
};
```

Additionally, you can use it in Node.js.

```typescript
const ElasticWebCrawler = require('elastic-web-crawler');

(async () => {
  const elasticWebCrawler = new ElasticWebCrawler({
    engineName: 'engineName',
    baseUrl: 'baseUrl',
    token: 'token',
  });

  const crawler = await elasticWebCrawler.crawler();
})();
```

## Appendix

Please note that this package is currently being improved upon. The following features will be added in future updates:

    1. Crawl rules
    2. Entry points
    3. User Agent
    4. Extracting content from a URL
    5. Tracing a URL

## 🔗 Links

[![github](https://img.shields.io/badge/github-%2324292e.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/armanTakmazyan/elastic-web-crawler)

## License

[MIT](https://choosealicense.com/licenses/mit/)
