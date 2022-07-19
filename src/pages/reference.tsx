import React from 'react';
import Head from '@docusaurus/Head';
import BrowserOnly from '@docusaurus/BrowserOnly';

import Layout from '@theme/Layout';

export default function APIPage() {
  return (
    <Layout>
      <Head>
        <title>API Reference | Immutable X Documentation</title>
        <meta name="description" content="Immutable X REST API Reference" />
        <meta name="og:description" content="Immutable X REST API Reference" />
        {/* Loading styles for elements this way so it doesn't interfere with other styles */}
        <link
          rel="stylesheet"
          href="https://unpkg.com/@stoplight/elements@7.3.7/styles.min.css"
          className="absolute right-20 top-24 inline-flex cursor-pointer items-center justify-center rounded-md bg-orange-600 px-4 py-1 text-sm text-white hover:text-white hover:no-underline"
        />
      </Head>
      <BrowserOnly
        fallback={
          <div className="flex min-h-screen w-full items-center justify-center">
            <div
              className="h-10 w-10 animate-spin rounded-full border-l border-t-2 border-primary"
              aria-label="Loading..."
            ></div>
          </div>
        }
      >
        {() => {
          // eslint-disable-next-line @typescript-eslint/no-var-requires
          const { API } = require('@stoplight/elements');
          return (
            <>
              <div>Switcher Goes here!</div>
              <API
                apiDescriptionUrl="https://api.ropsten.x.immutable.com/openapi-docs"
                router="hash"
                basePath="/"
                layout="sidebar"
                hideSchemas
              />
            </>
          );
        }}
      </BrowserOnly>
    </Layout>
  );
}
