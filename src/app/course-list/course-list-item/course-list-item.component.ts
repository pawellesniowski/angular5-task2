import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-course-list-item',
  templateUrl: './course-list-item.component.html',
  styleUrls: ['./course-list-item.component.scss']
})
export class CourseListItemComponent implements OnInit {
  @Input() course: {id: number, name: string, description: string, isTopRated: boolean, date: string, length: number};
  constructor() {

   }

  ngOnInit() {
  }

}
