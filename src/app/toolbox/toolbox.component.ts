import {
  Component,
  OnInit,
  SimpleChange,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  OnDestroy,
  EventEmitter,
  Output
 } from '@angular/core';

@Component({
  selector: 'app-toolbox',
  templateUrl: './toolbox.component.html',
  styleUrls: ['./toolbox.component.scss']
})

export class ToolboxComponent implements OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, OnDestroy {
  inputText: string;
  @Output() CreateCourse = new EventEmitter<any>();
  @Output() InputFind = new EventEmitter<any>();

  constructor() {
    console.log('constructor from toolbox');
  }

  onCreateCourse() {
    this.CreateCourse.emit();
  }

  onInputFind() {
    console.log('onInputfind: ', this.inputText);
    this.InputFind.emit(this.inputText);
  }







  // hooks:
  ngOnInit() {
    console.log('ngOnInit from toolbox');
  }

  ngDoCheck() {
    console.log('ngDoCheck from toolbox');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit from toolbox');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked from toolbox');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit from toolbox');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy from toolbox');
  }

}
