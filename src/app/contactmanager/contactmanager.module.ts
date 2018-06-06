import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router';

import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material.module';
import { UserService } from './services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { ContactmanagerAppComponent } from './contactmanager-app.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { NotesComponent } from './components/notes/notes.component';
import { NewContactDialogComponent } from './components/new-contact-dialog/new-contact-dialog.component';


const routes: Routes = [
  { path: '', component: ContactmanagerAppComponent,
    children: [
      { path: ':id', component: MainContentComponent },
      { path: '', component: MainContentComponent }
    ]
  },
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    MaterialModule,
    FormsModule
  ],
  providers: [ UserService ],
  declarations: [
    ContactmanagerAppComponent,
    MainContentComponent,
    SidenavComponent,
    ToolbarComponent,
    NotesComponent,
    NewContactDialogComponent
  ],
  entryComponents: [
    NewContactDialogComponent // due to the ahead of time compiler to be able to figure out which component factory to use.
  ]
})
export class ContactmanagerModule { }
