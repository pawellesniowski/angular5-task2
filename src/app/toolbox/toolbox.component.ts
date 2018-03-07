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
  @Output() InputFind = new EventEmitter<any>();

  constructor() {
  }

  onCreateCourse() {
    this.CreateCourse.emit();
  }

  onInputFind() {
    this.InputFind.emit(this.inputText);
  }

}
