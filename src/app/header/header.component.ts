import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  onCourses() {
    console.log('courses button clicked');
  }

  constructor() { }

  ngOnInit() {
  }

}
