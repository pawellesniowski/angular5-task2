import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ServerService } from '../../services/server.service';

@Component({
  selector: 'app-course-list-item',
  templateUrl: './course-list-item.component.html',
  styleUrls: ['./course-list-item.component.scss']
})
export class CourseListItemComponent implements OnInit {
  @Input() course: {id: number, name: string, description: string, isTopRated: boolean, date: string, length: number};
  @Output() deleteCourse = new EventEmitter<{}>();

  constructor(private serverService: ServerService) {  }

  onDeleteButton(id) {
    this.deleteCourse.emit(id);
    this.serverService.deleteCourse(id)
      .subscribe(
        () => console.log('item was deleted, id: ', id)
      );

  }

  ngOnInit() {
  }

}
