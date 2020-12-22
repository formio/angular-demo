import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormioGrid } from '@formio/angular/grid';
import { FormManagerModule, FormManagerRoutes, FormManagerService, FormManagerConfig } from '@formio/angular/manager';
import { IndexComponent } from './index/index.component';

@NgModule({
  imports: [
    CommonModule,
    FormioGrid,
    FormManagerModule,
    RouterModule.forChild(FormManagerRoutes({
      formIndex: IndexComponent
    }))
  ],
  declarations: [
    IndexComponent
  ],
  providers: [
    FormManagerService,
    {provide: FormManagerConfig, useValue: {
      tag: 'common'
    }}
  ]
})
export class FormModule { }
