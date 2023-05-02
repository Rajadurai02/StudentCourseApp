import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { IStudent } from './Student';
@Injectable({
  providedIn: 'root'
})
export class StudentcourseserviceService {

  private studentCourseJsonUrl = '/assets/data/Students.json';

  constructor(private _http:HttpClient) { }

  GetStudents():Observable<IStudent[]> { 

    return this._http.get<IStudent[]>(this.studentCourseJsonUrl); 
    
    } 
}
