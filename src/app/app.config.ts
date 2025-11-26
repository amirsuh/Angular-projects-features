import { APP_INITIALIZER, ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { Menuconfig } from './core/services/menuconfig';
import { provideStore } from '@ngrx/store';
import { counterReducer, taskReducer, userReducer } from './shared/store/reducers';
import { todoReducer } from './pages/angular/state/todos/todos.reducers';
// export function initializeMenuConfig(menuConfigService: Menuconfig) {
//   return () => menuConfigService.loadMenuConfig();
// }
export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    provideStore({
      count: counterReducer,
      user: userReducer,
      task: taskReducer,
      todos: todoReducer
    }),
    // {
    //   provide: APP_INITIALIZER,
    //   useFactory: initializeMenuConfig,
    //   deps: [Menuconfig],
    //   multi: true,
    // }
  ]
};
