import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormioModule, FormioAppConfig } from 'angular-formio';
import { FormioGrid } from 'angular-formio/grid';
import { FormioAuthService, FormioAuthConfig } from 'angular-formio/auth';
import { FormManagerModule, FormManagerService, FormManagerConfig } from 'angular-formio/manager';
import { PrismService } from './Prism.service';

import { AppConfig } from './config';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DataComponent } from './data/data.component';

import { FormsModule } from './forms/forms.module';
import { AuthModule } from './auth/auth.module';
import { EventModule } from './event/event.module';
import { IndexComponent } from './form/index/index.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DataComponent
  ],
  imports: [
    BrowserModule,
    FormioModule,
    FormioGrid,
    RouterModule.forRoot([
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
        loadChildren: () => FormsModule
      },
      {
        path: 'auth',
        loadChildren: () => AuthModule
      },
      {
        path: 'event',
        loadChildren: () => EventModule
      },
      {
        path: 'manager',
        loadChildren: () => FormManagerModule.forChild({
          formIndex: IndexComponent
        })
      }
    ])
  ],
  providers: [
    PrismService,
    FormioAuthService,
    FormManagerService,
    {provide: FormManagerConfig, useValue: {
      tag: 'common'
    }},
    {provide: FormioAppConfig, useValue: AppConfig},
    {provide: FormioAuthConfig, useValue: {
      login: {
        form: 'user/login'
      },
      register: {
        form: 'user/register'
      }
    }}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
