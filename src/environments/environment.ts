// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

// `.env.ts` is generated by the `npm run env` command
// `npm run env` exposes environment variables as JSON for any usage you might
// want, like displaying the version or getting extra config from your CI bot, etc.
// This is useful for granularity you might need beyond just the environment.
// Note that as usual, any environment variables you expose through it will end up in your
// bundle, and you should not use it for any sensitive information like passwords or keys.
import { env } from './.env';

export const environment = {
  production: false,
  version: env.npm_package_version + '-dev',
  defaultLanguage: 'en-US',
  supportedLanguages: ['en-US', 'fr-FR', 'nl-NL', 'es-ES'],
  api_url: '/rest-zigate/1',
  keysBoundActive: 'alt+z+i+g',
  keysBoundInactive: 'alt+s+t+o+p',
  refresh: 10000,
};
