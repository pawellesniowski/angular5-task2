import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServerService } from '../services/server.service';


@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {

  courses = [];

  constructor(private serverService: ServerService) {

  }

  getCourses() {
    this.serverService.getList()
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
    this.getCourses();
  }

}
