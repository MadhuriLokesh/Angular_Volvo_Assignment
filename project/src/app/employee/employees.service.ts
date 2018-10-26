import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import { Observable } from 'rxjs';
import {map} from "rxjs/operators";

@Injectable()
export class EmployeesService{
	constructor(private http: Http){
	}
	
	getEmployees() : Observable<any[]>{
		return this.http.get('src/db.json')
		.pipe(map((resp: Response)=> resp.json()));
	}
}