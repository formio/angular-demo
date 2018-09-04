import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormioModule } from 'angular-formio';
import { BuilderComponent } from './builder/builder.component';
import { KitchenComponent } from './kitchen/kitchen.component';
import { LanguageComponent } from './language/language.component';
import { PdfComponent } from './pdf/pdf.component';
import { RendererComponent } from './renderer/renderer.component';
import { SimpleComponent } from './simple/simple.component';
import { WizardComponent } from './wizard/wizard.component';
import { FormsComponent } from './forms/forms.component';

export const FormRoutes: any = [
  {
    path: '',
    component: FormsComponent,
    children: [
      {
        path: '',
        redirectTo: 'renderer',
        pathMatch: 'full'
      },
      {
        path: 'renderer',
        title: 'Form Renderer',
        component: RendererComponent
      },
      {
        path: 'builder',
        title: 'Form Builder',
        component: BuilderComponent
      },
      {
        path: 'simple',
        title: 'Simple Form',
        component: SimpleComponent
      },
      {
        path: 'wizard',
        title: 'Wizard Form',
        component: WizardComponent
      },
      {
        path: 'pdf',
        title: 'PDF Form',
        component: PdfComponent
      },
      {
        path: 'language',
        title: 'Multi-Language',
        component: LanguageComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormioModule,
    RouterModule.forChild(FormRoutes)
  ],
  declarations: [
    BuilderComponent,
    KitchenComponent,
    LanguageComponent,
    PdfComponent,
    RendererComponent,
    SimpleComponent,
    WizardComponent,
    FormsComponent
  ],
  bootstrap: [
    FormsComponent
  ]
})
export class FormsModule { }
