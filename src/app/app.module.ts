import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { MaterialModule } from './shared/material.module';
import { Form, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ContactmanagerAppComponent } from './contactmanager/contactmanager-app.component';
import { MainContentComponent } from './contactmanager/components/main-content/main-content.component';
import { SidenavComponent } from './contactmanager/components/sidenav/sidenav.component';
import { ToolbarComponent } from './contactmanager/components/toolbar/toolbar.component';
import { HttpClientModule}  from '@angular/common/http';

const routes: Routes = [
  { path: 'demo', loadChildren: './demo/demo.module#DemoModule' },
  { path: 'contact', component: ContactmanagerAppComponent,
    children: [
      { path: '', component: MainContentComponent }
      ]},
  { path: '**', redirectTo: 'contact'}
];

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    ContactmanagerAppComponent,
    ToolbarComponent,
    SidenavComponent,
    MainContentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    MaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
