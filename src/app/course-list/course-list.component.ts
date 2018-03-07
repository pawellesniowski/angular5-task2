import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { ServerService } from '../services/server.service';


@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseListComponent implements OnInit {

  courses: any[] = [];

  constructor(private serverService: ServerService, private changeDetector: ChangeDetectorRef) { }

  ngOnInit() {
    this.getCourses();
  }

  getCourses() {
    this.serverService.getList()
      .subscribe(
        (data: any) => {
          this.courses = data.reverse();
          console.log(this.courses);
          this.changeDetector.markForCheck();
        },
        (error) => {
          this.courses = [];
          console.log('getting data from server error: ', error);
          this.changeDetector.markForCheck();
        }

      );
  }

  onDeleteMethod(event: any) {
    console.log('onDeleteMethod from Parent: ', event);
  }

}
