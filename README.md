
# elastic-web-crawler

A web crawler library for the Elasticsearch Crawler API


## Usage/Examples

#### Here is an example of a wrapper component that sets the ElasticWebCrawler instance and passes it down to its child components:

```javascript
import React, { createContext } from 'react';

const ElasticWebCrawlerContext = createContext(null);

const ElasticWebCrawlerProvider = ({ children, client }) => {
    const crawler = new ElasticWebCrawler(client);

    return (
        <ElasticWebCrawlerContext.Provider value={crawler}>
            {children}
        </ElasticWebCrawlerContext.Provider>
    );
};

const useElasticWebCrawler = () => {
    const crawler = React.useContext(ElasticWebCrawlerContext);
    if (!crawler) {
        throw new Error('ElasticWebCrawler not found. Make sure to use the ElasticWebCrawlerProvider at the top level of your application.');
    }
    return crawler;
};

export { ElasticWebCrawlerProvider, useElasticWebCrawler };
```

#### Then in the top level of your application you can wrap your components with the ElasticWebCrawlerProvider component and pass in the client instance. Any component that needs access to the ElasticWebCrawler instance can use the useElasticWebCrawler hook to get access to it.

```javascript
import { ElasticWebCrawlerProvider } from './ElasticWebCrawlerContext';
import { useElasticWebCrawler } from './ElasticWebCrawlerContext';

const App = () => (
    <ElasticWebCrawlerProvider client={axios}>
        <YourComponent />
    </ElasticWebCrawlerProvider>
);

const YourComponent = () => {
    const crawler = useElasticWebCrawler();
    // use the crawler instance here
};
```