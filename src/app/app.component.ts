import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServerService } from './services/server.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  creatingNewCourse = false;

  constructor(private serverService: ServerService) {
  }

  createCourse() {
    console.log('display create course page');
    this.creatingNewCourse = true;
  }

  backToCourses() {
    this.creatingNewCourse = false;
  }

  inputFind(id) {
    this.serverService.getCourseById(id)
      .subscribe(
        (data: any) => {
          console.log(data);
        },
        (error) => console.log(error)
    );
  }

}
