import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ContactComponent} from './pages/contact/contact.component';
import {WelcomeComponent} from './pages/welcome/welcome.component';
import {LayoutPageComponent} from './pages/layouts/layout-page/layout-page.component';
import {LayoutWelcomeComponent} from './pages/layouts/layout-welcome/layout-welcome.component';
import {ExamplesComponent} from './pages/examples/examples/examples.component';


const routes: Routes = [
  // { path: '', redirectTo: 'login', pathMatch: 'full' },
  // {path: '', component: WelcomeComponent},
  // {path: 'contact', component: ContactComponent},
  {
    path: '',
    component: LayoutWelcomeComponent,
    children: [
      {
        path: '',
        component: WelcomeComponent
      }
    ]
  },
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      {
        path: 'contact',
        component: ContactComponent
      }
    ]
  }, {
    path: '',
    component: LayoutPageComponent,
    children: [
      {
        path: 'examples',
        component: ExamplesComponent
      }
    ]
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppModuleRoutes {
}
