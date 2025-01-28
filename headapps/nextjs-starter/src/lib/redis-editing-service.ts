import {
  VercelEditingDataCache,
  BasicEditingDataService,
} from '@sitecore-jss/sitecore-jss-nextjs/editing';

const redisDataCache = new VercelEditingDataCache(
  process.env.KV_REST_API_URL,
  process.env.KV_REST_API_TOKEN
);

export const redisDataService = new BasicEditingDataService({ editingDataCache: redisDataCache });
