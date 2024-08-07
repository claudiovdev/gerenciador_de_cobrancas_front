import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsersListComponent } from './components/users/users-list/users-list.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UserCreateComponent } from './components/users/user-create/user-create.component';


const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {path: 'usuarios', component: UsersListComponent},
      {path: 'usuario', component: UserCreateComponent},
      {path: '', redirectTo: 'usuarios', pathMatch: 'full'}
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
