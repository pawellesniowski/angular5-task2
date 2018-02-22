import { Component, OnInit } from '@angular/core';
import { ServerService } from '../services/server.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  onCourses() {
    this.serverService.getList()
      .subscribe(
        (data: any[]) => console.log(data),
        (error) => console.log(error)
      );
  }

  constructor(private serverService: ServerService) { }

  ngOnInit() {
  }

}
