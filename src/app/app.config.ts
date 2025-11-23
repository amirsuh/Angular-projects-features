import { APP_INITIALIZER, ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { Menuconfig } from './core/services/menuconfig';
// export function initializeMenuConfig(menuConfigService: Menuconfig) {
//   return () => menuConfigService.loadMenuConfig();
// }
export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),provideHttpClient(),
    // {
    //   provide: APP_INITIALIZER,
    //   useFactory: initializeMenuConfig,
    //   deps: [Menuconfig],
    //   multi: true,
    // }
  ]
};
