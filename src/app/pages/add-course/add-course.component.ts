import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServerService } from '../../services/server.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss']
})
export class AddCourseComponent implements OnInit {
  courseName = '';
  courseDescription = '';
  @Output() BackToCourses = new EventEmitter<{}>();

  constructor(private serverService: ServerService) { }

  onAddCourse() {
    this.serverService.storeCourses(this.courseName, this.courseDescription)
    .subscribe(
      (data: any) => {
        console.log(data);
        this.onBackToCourses();
      },
      (error) => console.log(error)
    );
  } // end of onAddCourse()

  onBackToCourses() {
    this.BackToCourses.emit();
  }

  ngOnInit() {
  }

}
