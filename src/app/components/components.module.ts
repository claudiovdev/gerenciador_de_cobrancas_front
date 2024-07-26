// src/app/components/components.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersListComponent } from './users/users-list/users-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [

    UsersListComponent,
     DashboardComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AppMaterialModule
  ],
  exports: [
    UsersListComponent
  ]
})
export class ComponentsModule { }
