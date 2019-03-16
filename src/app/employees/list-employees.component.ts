import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {
     employees : Employee[] = [
       {
        id:1,
        name:'John',
        gender:'Male',
        contactprefeence:'email',
        email:'xyz@tr.com',
        dateofbirth:new Date('3/25/2109'),
        department:'IT',
        isActive:true,
        photoPath: 'assets/images/Employee1.jpg'
       }

     ]
  constructor() { }

  ngOnInit() {
  }

}
