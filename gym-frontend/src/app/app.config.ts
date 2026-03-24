import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withFetch } from '@angular/common/http'; // withFetch es mejor para SSR
import { provideClientHydration } from '@angular/platform-browser'; // <--- ESTO ES LO QUE NOS FALTA
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withFetch()), 
    provideClientHydration() // Esto le dice a Angular: "No te desmayes, yo te ayudo a cargar"
  ]
};