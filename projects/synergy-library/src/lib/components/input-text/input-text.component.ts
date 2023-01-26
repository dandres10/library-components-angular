import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { InputSize } from '../../enums/GlobalEnum';
import { IInputTextDTO } from '../../interfaces/IGlobalDTO';

@Component({
  selector: 'leg-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss']
})
export class InputTextComponent implements OnInit {

  @Input() data!: IInputTextDTO
  valueInput: any = '';

  constructor() { }

  ngOnInit() {

  }

  get InputSizeEnum(): typeof InputSize {
    return InputSize;
  }

  clear() {
    this.data.form.controls[this.data.formControlName].setValue(null);
    this.data.callBack()
  }

}
