import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {ContactComponent} from './pages/contact/contact.component';
import {WelcomeComponent} from './pages/welcome/welcome.component';
import {AppModuleRoutes} from './app.module.routes';
import {LayoutPageComponent} from './pages/layouts/layout-page/layout-page.component';
import {LayoutWelcomeComponent} from './pages/layouts/layout-welcome/layout-welcome.component';
import {ExamplesComponent} from './pages/examples/examples/examples.component';
import {ButtonComponent} from './shared/components/button/button.component';
import {CardModule} from 'primeng/components/card/card';
import {ProgressBarModule} from 'primeng/components/progressbar/progressbar';
import {CarouselModule} from 'primeng/components/carousel/carousel';


@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    WelcomeComponent,
    LayoutPageComponent,
    LayoutWelcomeComponent,
    ExamplesComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    CardModule,
    ProgressBarModule,
    CarouselModule,
    AppModuleRoutes
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
