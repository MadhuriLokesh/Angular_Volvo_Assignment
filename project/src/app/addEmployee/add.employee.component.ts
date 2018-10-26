import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 
import { EmployeesService } from '../employee/employees.service';

@Component({
  selector: 'add-employees',
  templateUrl: './add.employee.component.html',
  providers: [EmployeesService]
})

export class AddEmployeeComponent{
  employee: any = {};
  employees: any[] = null;
    
  constructor(private empService: EmployeesService){}

  
  public save(){
    console.log(this.employee);
    alert("send the data to backend");
  }

}

@Component({
  selector: 'edit-employees',
  templateUrl: './add.employee.component.html',
  providers: [EmployeesService]
})

export class EditEmployeeComponent implements OnInit{
  employee: any = {};
  editId: number;
    
	constructor(private route: ActivatedRoute){
    this.route.params.subscribe(res => this.editId = res.id);
  }

  ngOnInit() {
    console.log(this.editId);
    alert(this.editId + " is the id to be edited");
  }
  
  public save(){
    console.log(this.employee);
  }

}
