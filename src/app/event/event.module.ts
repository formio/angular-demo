import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResourceComponent } from './resource/resource.component';
import { ViewComponent } from './view/view.component';
import { RouterModule, Routes } from '@angular/router';
import { FormioModule } from 'angular-formio';
import { FormioResource, FormioResourceRoutes, FormioResourceConfig, FormioResourceService } from 'angular-formio/resource';
import { ParticipantModule } from './participant/participant.module';

const eventResourceRoutes: Routes = FormioResourceRoutes({
    view: ViewComponent,
    resource: ResourceComponent
});

eventResourceRoutes[2].children.push({
    path: 'participant',
    loadChildren: () => ParticipantModule
});

@NgModule({
  imports: [
    CommonModule,
    FormioModule,
    FormioResource,
    RouterModule.forChild(eventResourceRoutes)
  ],
  declarations: [ResourceComponent, ViewComponent],
  providers: [
      FormioResourceService,
      {
          provide: FormioResourceConfig,
          useValue: {
              name: 'event',
              form: 'event'
          }
      }
  ]
})
export class EventModule { }
