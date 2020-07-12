const path = require('path');
const rehypePrism = require('@mapbox/rehype-prism');
const nextMDX = require('@next/mdx');
const bundleAnalyzer = require('@next/bundle-analyzer');
const rehypeReadme = require('./lib/rehype-readme');

// only enable rehypeReadme for this file
// because the github relative path replacement
// might break things in other markdowns
//
const withGitHubMDX = nextMDX({
  extension: path.join(__dirname, 'components', 'docs', 'docs.mdx'),
  options: {
    hastPlugins: [
      rehypePrism,
      [
        rehypeReadme,
        {
          repo: 'JamesSingleton/learn-one-app',
          branch: 'master',
          level: 4
        }
      ]
    ]
  }
});

const withMDX = nextMDX({
  extension: /[/\\](pages|blog|components[/\\](home))[/\\](.+)\.mdx?$/,
  options: {
    hastPlugins: [rehypePrism]
  }
});

const withBundleAnalyzer = bundleAnalyzer({ enabled: process.env.ANALYZE === 'true' });

const navigateBetweenPagesLessonsRedirect = [
  'adding-link-props',
  'client-side-history',
  'link',
  'hoc',
  'simple-but-powerful',
  'using-link'
].map(page => ({
  source: `/learn/basics/navigate-between-pages/${page}{/}?`,
  permanent: true,
  destination: '/learn/basics/navigate-between-pages'
}));

const apiRoutesLessonsRedirect = [
  'creating-an-api-route',
  'fetching-api-routes',
  'finally',
  'middlewares'
].map(page => ({
  source: `/learn/basics/api-routes/${page}{/}?`,
  permanent: true,
  destination: '/learn/basics/api-routes'
}));

const basicsLessonsRedirect = [].concat(
  ...[
    ['getting-started', 'create-a-module'],
    ['using-shared-components', 'assets-metadata-css'],
    ['create-dynamic-pages', 'dynamic-routes'],
    ['server-side-support-for-clean-urls', 'dynamic-routes'],
    ['clean-urls-with-dynamic-routing', 'dynamic-routes'],
    ['dynamic-routing', 'dynamic-routes'],
    ['fetching-data-for-pages', 'data-fetching'],
    ['styling-components', 'assets-metadata-css'],
    ['deploying-a-nextjs-app', 'deploying-nextjs-app']
  ].map(([before, after]) => [
    {
      source: `/learn/basics/${before}{/}?`,
      permanent: true,
      destination: `/learn/basics/${after}`
    },
    {
      source: `/learn/basics/${before}/:page{/}?`,
      permanent: true,
      destination: `/learn/basics/${after}`
    }
  ])
);

const nextConfig = {
  target: 'experimental-serverless-trace', // Not required for Vercel, but used by GitHub Actions
  pageExtensions: ['jsx', 'js', 'ts', 'tsx', 'mdx'],
  experimental: {
    modern: true,
    optionalCatchAll: true,
    rewrites() {
      return [
        {
          source: '/feed.xml',
          destination: '/_next/static/feed.xml'
        }
      ];
    },
    redirects() {
      return [
        {
          source: '/learn{/}?',
          permanent: true,
          destination: '/learn/basics/create-a-module'
        },
        ...navigateBetweenPagesLessonsRedirect,
        ...apiRoutesLessonsRedirect,
        ...basicsLessonsRedirect,
        {
          source: '/features{/}?',
          permanent: false,
          destination: '/'
        },
        {
          source: '/features/:path*',
          permanent: false,
          destination: '/'
        },
        {
          source: '/features/ssr{/}?',
          permanent: false,
          destination: '/'
        },
        {
          source: '/case-studies{/}?',
          permanent: false,
          destination: '/case-studies/hulu'
        },
        {
          source: '/api{/}?',
          permanent: false,
          destination: '/docs/api-routes/introduction'
        },
        {
          source: '/docs/api{/}?',
          permanent: false,
          destination: '/docs/api-routes/introduction'
        }
      ];
    }
  },
  webpack: (config, { dev, isServer }) => {
    if (!dev && isServer) {
      // we're in build mode so enable shared caching for the GitHub API
      process.env.USE_CACHE = 'true';
    }

    return config;
  }
};

module.exports = withGitHubMDX(withMDX(withBundleAnalyzer(nextConfig)));
