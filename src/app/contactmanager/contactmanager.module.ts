import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router';

import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material.module';
import { UserService } from './services/user.service';
import { HttpClientModule } from '@angular/common/http';


const routes: Routes = [
  { path: 'demo', loadChildren: './demo/demo.module#DemoModule' },
  { path: 'contactmanager', loadChildren: './contactmanager/contactmanager.module#ContactmanagerModule' },
  { path: '**', redirectTo: 'demo'}
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
  declarations: []
})
export class ContactmanagerModule { }
