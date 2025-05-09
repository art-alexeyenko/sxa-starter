import { cpSync, rmSync } from 'fs';

// Executed at the end of the build process (jss build) to move the build output to the proxy build path

try {
  console.log('Moving build output to proxy build path:', process.env.VUE_APP_PROXY_BUILD_PATH);

  rmSync(process.env.VUE_APP_PROXY_BUILD_PATH, { recursive: true, force: true });
  cpSync('./dist', process.env.VUE_APP_PROXY_BUILD_PATH, { recursive: true });

  console.log('Proxy build prepared successfully!');
} catch (error) {
  console.error('Error preparing proxy build:', error);
}
