import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from "@angular/http";
import { AppComponent }  from './app.component';
import {EmployeeComponent } from './employee/employee.component';
import {AddEmployeeComponent, EditEmployeeComponent } from './addEmployee/add.employee.component';
import { FormsModule } from '@angular/forms';
import { appRouterModule } from './app.route';
import { EmployeesService } from './employee/employees.service'
import { EmployeeSearchPipe } from './employee/employeeserach.pipe';

@NgModule({
  imports:      [ 
    BrowserModule, 
    HttpModule, 
    FormsModule, 
    appRouterModule ],
  declarations: [ 
    AppComponent, 
    EmployeeComponent, 
    AddEmployeeComponent, 
    EmployeeSearchPipe, 
    EditEmployeeComponent ],
  providers: [
    EmployeesService],
  bootstrap:    [ 
    AppComponent ]
})
export class AppModule { }
