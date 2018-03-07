import { Component, OnInit, ChangeDetectionStrategy, NgZone } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { ServerService } from './services/server.service';


@Component({
  selector: 'app-root',
  // changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {
  creatingNewCourse = false;

  date1;
  date2;

  constructor(private serverService: ServerService, private zone: NgZone) {
    zone.onUnstable.subscribe(() => {
      this.date1 = Date.now();
    });

    zone.onStable.subscribe(() => {
      this.date2 = Date.now();
    });
  }

  createCourse() {
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
