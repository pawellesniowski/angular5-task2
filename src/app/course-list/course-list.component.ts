import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { ServerService } from '../services/server.service';
import { SortByPipe } from '../pipes/sort-by.pipe';
import { FilterCoursesPipe } from '../pipes/filter.pipe';
import { FilterOldPipe } from '../pipes/filter-old.pipe';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [FilterCoursesPipe]
})
export class CourseListComponent implements OnInit, OnDestroy {

  courses: any[] = [];
  sub: Subscription;

  constructor(
    private serverService: ServerService,
    private changeDetector: ChangeDetectorRef,
    private filterCoursesPipe: FilterCoursesPipe
  ) { }

  ngOnInit() {
    this.getCourses();
  }

  getCourses() {
    this.sub = this.serverService.getList()
      .subscribe(
        (data: any) => {
          this.courses = data.reverse();
          this.changeDetector.markForCheck();
        },
        (error) => {
          this.courses = [];
          this.changeDetector.markForCheck();
        }

      );
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  onDeleteMethod(event: any) {
    console.log('onDeleteMethod from Parent: ', event);
  }

}
