import {
  Component,
  OnInit,
  OnChanges,
  SimpleChange,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  OnDestroy,
 } from '@angular/core';

@Component({
  selector: 'app-toolbox',
  templateUrl: './toolbox.component.html',
  styleUrls: ['./toolbox.component.scss']
})
export class ToolboxComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, OnDestroy {
  inputText: string;

  constructor() {
    console.log('constructor from toolbox');
   }

  onInputClick() {
    console.log(this.inputText);
  }

  ngOnInit() {
    console.log('ngOnInit from toolbox');
  }

  ngOnChanges(changes: SimpleChange) {
    console.log('ngOnChanges from toolbox');
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
