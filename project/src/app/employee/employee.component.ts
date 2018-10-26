import { Component } from '@angular/core';
import { Router } from '@angular/router'; 
import { EmployeesService } from './employees.service';

@Component({
  selector: 'employees',
  templateUrl: './employee.component.html',
  providers: [EmployeesService]
})
export class EmployeeComponent{ 
	employees: any[] = null;
    searchText: string;

	constructor(private empService: EmployeesService, private router: Router){
        this.empService.getEmployees().subscribe((empData)=>this.employees=empData);
    }

    cleartext(){
        this.searchText = "";
    }

    editEmployee(employee: any){
        this.router.navigate(['/edit', employee.id]);
    }

    deleteEmployee(employee: any){
        let tempEmp:any = [];
        
        let emp = this.employees["names"];
        emp.forEach(function (value:any) {
            if(value.id != employee.id){
                tempEmp.push(value);
            }
        });
        this.employees["names"] = tempEmp;
        alert("Delete respective row by id from DB");
    }
}
