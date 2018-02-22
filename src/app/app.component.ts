import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  creatingNewCourse = false;

  constructor(private httpClient: HttpClient) {}

  createCourse() {
    console.log('display create course page');
    this.creatingNewCourse = true;
  }

  backToCourses() {
    this.creatingNewCourse = false;
  }

  inputFind(id) {
    console.log('id passed from toolbar to app.component: ', id);

    this.httpClient.get(`http://localhost:4002/courses/?id=${Number(id)}`)
    .subscribe(
      (data: any) => {
        console.log(data);
      },
      (error) => console.log(error)
    );
  }

}
