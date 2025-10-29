import { createEditingConfigRouteHandler } from '@sitecore-content-sdk/nextjs/route-handler';
import components from '.sitecore/component-map';
import metadata from '.sitecore/metadata.json';

/**
 * This API route is used by Sitecore Editor in XM Cloud
 * to determine feature compatibility and configuration.
 */

export const { GET, OPTIONS } = createEditingConfigRouteHandler({
  components,
  metadata,
});
