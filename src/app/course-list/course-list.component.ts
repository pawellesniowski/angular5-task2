import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {

  courses = [];

  constructor(private httpClient: HttpClient) {
    this.getCourses();
  }

  getCourses() {
    this.httpClient.get('http://localhost:4002/courses')
      .subscribe(
        (data: any) => {
          this.courses = data;
        },
        (error) => console.log(error)
      );
  }

  onDeleteMethod(event) {
    console.log('onDeleteMethod from Parent: ', event);
  }

  ngOnInit() {
  }

}
