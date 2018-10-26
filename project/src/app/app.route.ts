import { RouterModule, Routes } from '@angular/router';
import {EmployeeComponent } from './employee/employee.component';
import {AddEmployeeComponent, EditEmployeeComponent } from './addEmployee/add.employee.component';

const routes: Routes = [
{
    path: '',
    component: EmployeeComponent
  },
  {
    path: 'users',
    redirectTo: '/',
    pathMatch: 'full',
  },
  {
    path: 'add',
    component: AddEmployeeComponent
  },
  {
    path: 'edit/:id',
    component: EditEmployeeComponent
  }
]

export const appRouterModule = RouterModule.forRoot(routes)