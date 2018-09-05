import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResourceComponent } from './resource/resource.component';
import { ViewComponent } from './view/view.component';
import { RouterModule } from '@angular/router';
import { FormioModule } from 'angular-formio';
import {
    FormioResource,
    FormioResourceConfig,
    FormioResourceService,
    FormioResourceIndexComponent,
    FormioResourceCreateComponent,
    FormioResourceEditComponent,
    FormioResourceDeleteComponent
} from 'angular-formio/resource';

@NgModule({
  imports: [
    CommonModule,
    FormioModule,
    FormioResource,
    RouterModule.forChild([
        {
            path: '',
            component: FormioResourceIndexComponent
        },
        {
            path: 'new',
            component: FormioResourceCreateComponent
        },
        {
            path: ':id',
            component: ResourceComponent,
            children: [
                {
                    path: '',
                    redirectTo: 'view',
                    pathMatch: 'full'
                },
                {
                    path: 'view',
                    component: ViewComponent
                },
                {
                    path: 'edit',
                    component: FormioResourceEditComponent
                },
                {
                    path: 'delete',
                    component: FormioResourceDeleteComponent
                },
                {
                    path: 'participant',
                    loadChildren: './participant/participant.module#ParticipantModule'
                }
            ]
        }
    ])
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
