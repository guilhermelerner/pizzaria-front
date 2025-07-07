// src/app/app.config.ts

import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

// Imports para o Interceptor
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './interceptors/auth.interceptor';

import { FormsModule } from '@angular/forms';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    
    // Altere a linha do provideHttpClient para esta:
    provideHttpClient(withInterceptors([
      authInterceptor
    ])),
    
    importProvidersFrom(FormsModule)
  ]
};