import { enableProdMode, importProvidersFrom } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


import { environment } from './environments/environment';
import { PrismService } from './app/Prism.service';
import { FormioAuthService, FormioAuthConfig } from '@formio/angular/auth';
import { FormioResources } from '@formio/angular/resource';
import { FormioAppConfig, FormioModule } from '@formio/angular';
import { AppConfig } from './app/config';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormioGrid } from '@formio/angular/grid';
import { withHashLocation, provideRouter } from '@angular/router';
import { HomeComponent } from './app/home/home.component';
import { DataComponent } from './app/data/data.component';
import { AppComponent } from './app/app.component';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(BrowserModule, CommonModule, FormioModule, FormioGrid),
        PrismService,
        FormioAuthService,
        FormioResources,
        { provide: FormioAppConfig, useValue: AppConfig },
        { provide: FormioAuthConfig, useValue: {
                login: {
                    form: 'user/login'
                },
                register: {
                    form: 'user/register'
                }
            } },
        provideRouter([
            {
                path: '',
                component: HomeComponent
            },
            {
                path: 'data',
                component: DataComponent
            },
            {
                path: 'forms',
                loadChildren: () => import("./app/forms/forms.module").then(m => m.FormsModule)
            },
            {
                path: 'auth',
                loadChildren: () => import("./app/auth/auth.module").then(m => m.AuthModule)
            },
            {
                path: 'event',
                loadChildren: () => import("./app/event/event.module").then(m => m.EventModule)
            },
            {
                path: 'manager',
                loadChildren: () => import("./app/form/form.module").then(m => m.FormModule)
            }
        ], withHashLocation())
    ]
})
  .catch(err => console.log(err));
