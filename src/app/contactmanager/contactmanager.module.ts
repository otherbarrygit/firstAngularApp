import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router';

import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material.module';


const routes: Routes = [
  { path: 'demo', loadChildren: './demo/demo.module#DemoModule' },
  { path: 'contactmanager', loadChildren: './contactmanager/contactmanager.module#ContactmanagerModule' },
  { path: '**', redirectTo: 'demo'}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    FormsModule
  ],
  declarations: []
})
export class ContactmanagerModule { }
