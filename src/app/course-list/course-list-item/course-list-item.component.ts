import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-course-list-item',
  templateUrl: './course-list-item.component.html',
  styleUrls: ['./course-list-item.component.scss']
})
export class CourseListItemComponent implements OnInit {
  @Input() course: {id: number, name: string, description: string, isTopRated: boolean, date: string, length: number};
  @Output() deleteCourse = new EventEmitter<{}>();

  constructor() {

  }

  onDeleteButton(id) {
    this.deleteCourse.emit(id);
  }

  ngOnInit() {
  }

}
