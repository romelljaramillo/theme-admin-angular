import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './admin/template/header/header.component';
import { FooterComponent } from './admin/template/footer/footer.component';
import { NavComponent } from './admin/template/nav/nav.component';
import { ContentComponent } from './admin/template/content/content.component';
import { LayoutComponent } from './admin/template/layout/layout.component';
import { LeftMenuComponent } from './admin/template/left-menu/left-menu.component';
import { BreadcrumbComponent } from './admin/template/breadcrumb/breadcrumb.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    ContentComponent,
    LayoutComponent,
    LeftMenuComponent,
    BreadcrumbComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
