import { Component, OnInit } from '@angular/core';
import { StudentcourseserviceService } from '../studentcourseservice.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit{
  constructor (private service:StudentcourseserviceService ){}
  StudentList:any=[];
  ngOnInit():void{
    this.getStudentList();
  }

  getStudentList(){
    this.service.GetStudents().subscribe(data=>{
      this.StudentList = data;
    })
  }
}
