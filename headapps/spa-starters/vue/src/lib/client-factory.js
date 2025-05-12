// import 'dotenv/config';
import { GraphQLRequestClient } from '@sitecore-jss/sitecore-jss-vue';

export const SITECORE_EDGE_URL_DEFAULT = 'https://edge-platform.sitecorecloud.io';
export const normalizeUrl = (url) => (url.endsWith('/') ? url.slice(0, -1) : url);

// The GraphQLRequestClientFactory serves as the central hub for executing GraphQL requests within the application
export const getEdgeProxyContentUrl = (
  sitecoreEdgeContextId,
  sitecoreEdgeUrl = SITECORE_EDGE_URL_DEFAULT
) =>
  `${normalizeUrl(
    sitecoreEdgeUrl
  )}/v1/content/api/graphql/v1?sitecoreContextId=${sitecoreEdgeContextId}`;

/**
 * Creates a new GraphQLRequestClientFactory instance
 * @returns GraphQLRequestClientFactory instance
 */
export const getClientFactoryConfig = () => {
  let clientConfig;

  // Server side requests should go directly to the Sitecore, browser requests should go through the proxy.
  const isServer = typeof window === 'undefined';
  // If we are in a production environment we are going to use Node XM Cloud proxy
  const isProduction = process.env.NODE_ENV === 'production';

  if (isProduction) {
    const env = {
      sitecoreEdgeContextId: process.env.VUE_APP_SITECORE_EDGE_CONTEXT_ID,
      sitecoreEdgeUrl: process.env.VUE_APP_SITECORE_EDGE_URL,
      graphQLEndpoint: process.env.VUE_APP_GRAPHQL_ENDPOINT,
      sitecoreApiKey: process.env.VUE_APP_SITECORE_API_KEY,
    };
    if (env.sitecoreEdgeContextId) {
      clientConfig = {
        endpoint: isServer
          ? getEdgeProxyContentUrl(env.sitecoreEdgeContextId, env.sitecoreEdgeUrl)
          : getEdgeProxyContentUrl(env.sitecoreEdgeContextId, ''),
      };
    } else if (env.graphQLEndpoint && env.sitecoreApiKey) {
      const graphQLEndpointPath = new URL(env.graphQLEndpoint).pathname;

      clientConfig = {
        endpoint: isServer ? env.graphQLEndpoint : `${env.proxyHost}${graphQLEndpointPath}`,
        apiKey: env.sitecoreApiKey,
      };
    }
  } else {
    if (env.sitecoreEdgeContextId) {
      clientConfig = {
        endpoint: getEdgeProxyContentUrl(env.sitecoreEdgeContextId, env.sitecoreEdgeUrl),
      };
    } else if (env.graphQLEndpoint && env.sitecoreApiKey) {
      clientConfig = {
        endpoint: env.graphQLEndpoint,
        apiKey: env.sitecoreApiKey,
      };
    }
  }

  if (!clientConfig.endpoint) {
    throw new Error(
      'Please configure either your sitecoreEdgeContextId, or your graphQLEndpoint and sitecoreApiKey.'
    );
  }
  return clientConfig;
};

export const createGraphQLClientFactory = () => {
  return GraphQLRequestClient.createClientFactory(getClientFactoryConfig());
};

export const clientFactory = createGraphQLClientFactory();
