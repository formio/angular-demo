import { LanguageComponent } from './language/language.component';
import { BuilderComponent } from './builder/builder.component';
import { SimpleComponent } from './simple/simple.component';
import { RendererComponent } from './renderer/renderer.component';
import { WizardComponent } from './wizard/wizard.component';
import { PdfComponent } from './pdf/pdf.component';
export const FORMS: any = [
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
];
