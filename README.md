
# elastic-web-crawler

This is a non-official client for working with the Elastic Web Crawler API. As it uses the axios package, it works not only in browser environments but also in Node.js.

## Installation

Install with npm

```bash
  npm install elastic-web-crawler
```

Install with yarn 

```bash
  yarn add elastic-web-crawler
```

## Usage/Examples

Here is an example of a wrapper component that sets the ElasticWebCrawler instance and passes it down to its child components:

```typescript
import React, {PropsWithChildren, useMemo, useContext, createContext } from 'react';
import { ElasticWebCrawler, ElasticWebCrawlerRequiredArguments } from 'elastic-web-crawler';

export const ElasticWebCrawlerContext = createContext<ElasticWebCrawler | null>(
  null,
);

export const useElasticWebCrawler = () => {
    const elasticWebCrawler = useContext(ElasticWebCrawlerContext) as ElasticWebCrawler;
    if (!elasticWebCrawler) {
        throw new Error('ElasticWebCrawler not found. Make sure to use the ElasticWebCrawlerProvider at the top level of your application.');
    }
    return elasticWebCrawler;
};

export interface ElasticWebCrawlerProviderProps {
  elasticWebCrawlerArguments: ElasticWebCrawlerRequiredArguments;
}

export const ElasticWebCrawlerProvider = ({ children, elasticWebCrawlerArguments }: PropsWithChildren<ElasticWebCrawlerProviderProps>) => {
  const elasticWebCrawler = useMemo(() => new ElasticWebCrawler(elasticWebCrawlerArguments), [elasticWebCrawlerArguments]);

  return (
      <ElasticWebCrawlerContext.Provider value={elasticWebCrawler}>
          {children}
      </ElasticWebCrawlerContext.Provider>
  );
};

```
Then in the top level of your application you can wrap your components with the ElasticWebCrawlerProvider component and pass in the client instance. Any component that needs access to the ElasticWebCrawler instance can use the useElasticWebCrawler hook to get access to it.

```typescript
import { ElasticWebCrawlerProvider } from './ElasticWebCrawlerContext';
import { useElasticWebCrawler } from './ElasticWebCrawlerContext';



const App = () => (
    <ElasticWebCrawlerProvider elasticWebCrawlerArguments={{
        engineName: 'engineName',
        baseUrl: 'baseUrl',
        token: 'token'
    }}>
        <YourComponent />
    </ElasticWebCrawlerProvider>
);

const YourComponent = () => {
    const elasticWebCrawler = useElasticWebCrawler();
    // use the crawler instance here
};

```
Also you can use it in Nodejs.

```typescript
const ElasticWebCrawler = require('elastic-web-crawler');

(async () => {
    const elasticWebCrawler = new ElasticWebCrawler({
        engineName: 'engineName',
        baseUrl: 'baseUrl',
        token: 'token'
    });

    const crawler = await elasticWebCrawler.crawler();
    console.log('crawler', crawler);
})();

```

## 🔗 Links
[![github](https://img.shields.io/badge/github-%2324292e.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/armanTakmazyan/elastic-web-crawler)

## License
[MIT](https://choosealicense.com/licenses/mit/)

