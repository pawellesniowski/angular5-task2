import {
  Component,
  Output,
  EventEmitter,
  ChangeDetectionStrategy
 } from '@angular/core';

@Component({
  selector: 'app-toolbox',
  templateUrl: './toolbox.component.html',
  styleUrls: ['./toolbox.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ToolboxComponent {
  inputText: string;
  @Output() CreateCourse = new EventEmitter<any>();
  @Output() searchTerm = new EventEmitter<any>();

  constructor() {
  }

  onAddCourse() {
    this.CreateCourse.emit();
  }

  onFindCourse(findCourse) {
    this.searchTerm.emit(this.inputText);
  }

}
