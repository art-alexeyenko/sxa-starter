import { GraphQLLayoutService, RestLayoutService, constants } from '@sitecore-jss/sitecore-jss-vue';
import config from '../temp/config';
import { clientFactory } from './client-factory';

export class LayoutServiceFactory {
  create() {
    return new GraphQLLayoutService({
      clientFactory,
      siteName: config.sitecoreSiteName,
    });
  }
}

export const layoutServiceFactory = new LayoutServiceFactory();
