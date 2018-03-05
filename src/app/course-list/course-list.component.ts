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

  courses = [];

  constructor(private serverService: ServerService, private changeDetector: ChangeDetectorRef) { }

  getCourses() {
    this.serverService.getList()
      .subscribe(
        (data: any) => {
          this.courses = data;
          this.changeDetector.markForCheck();
        },
        (error) => {
          console.log(error);
          this.changeDetector.markForCheck();
        }

      );
  }

  onDeleteMethod(event) {
    console.log('onDeleteMethod from Parent: ', event);
  }

  ngOnInit() {
    this.getCourses();
  }

}
