import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { CreationDateBorderDirective } from '../../directives/creationDateBorder.directive';


import { ServerService } from '../../services/server.service';
import { DurationPipe } from '../../pipes/duration.pipe';

@Component({
  selector: 'app-course-list-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './course-list-item.component.html',
  styleUrls: ['./course-list-item.component.scss'],
})
export class CourseListItemComponent implements OnInit {
  @Input() course: {id: number, name: string, description: string, isTopRated: boolean, date: string, length: number};
  @Output() deleteCourse = new EventEmitter<{}>();

  constructor(private serverService: ServerService) {  }

  onDeleteButton(id: number) {
    this.deleteCourse.emit(id);

    this.serverService.deleteCourse(id)
      .subscribe(
        () => {
          alert(`Course was deleted`);
        },
        (error: any) => console.log('error from onDeleteButton', error)
    );
  } // end of onDeletebutton()

  ngOnInit() {
  }

  ngdoCheck() {
    this.serverService.getList(); // what hook does this go to.
  }

}
