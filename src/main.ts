// src/main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { importProvidersFrom } from '@angular/core';
import { provideRouter, withRouterConfig } from '@angular/router';
import { routes } from './app/app.routes'; // Assuming you have a separate file for routes
import { HttpClientModule } from '@angular/common/http';

// if (environment.production) {
//   enableProdMode();
// }

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(BrowserAnimationsModule),
    importProvidersFrom(HttpClientModule),
    provideRouter(routes, withRouterConfig({})), // Provide routing configuration
    // Add other providers if needed
  ]
}).catch(err => console.error(err));
