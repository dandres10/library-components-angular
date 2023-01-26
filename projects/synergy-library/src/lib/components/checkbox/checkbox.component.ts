import { Component, OnInit, Input } from '@angular/core';
import { ICheckboxDTO } from '../../interfaces/IGlobalDTO';

@Component({
  selector: 'leg-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {

  @Input() data!: ICheckboxDTO

  constructor() { }

  ngOnInit() {
  }

  getStatusCheck() {
    if (this.data.isActive) {
      return 'checkbox--active'
    }
    return 'checkbox--basic';
  }

  clickCheck() {
    this.data.isActive = !this.data.isActive;
    this.data.callBack(this.data);
  }



}
