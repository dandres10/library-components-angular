import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ButtonSize, ButtonType } from '../../enums/GlobalEnum';
import { IButtonDTO } from '../../interfaces/IGlobalDTO';

@Component({
  selector: 'leg-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent  {

  @Input() data!: IButtonDTO

  constructor() { }

 

  get ButtonTypeEnum(): typeof ButtonType {
    return ButtonType;
  }

  get ButtonSizeEnum(): typeof ButtonSize {
    return ButtonSize;
  }

  setSizeButton(size: ButtonSize) {
    switch (size) {
      case ButtonSize.big:
        return { 'height': '2.5rem' }

      case ButtonSize.full:
        return { 'height': '2rem', 'width': '100%' }

      case ButtonSize.normal:
        return { 'height': '2rem' }

      case ButtonSize.small:
        return { 'height': '1.5rem' }

      default:
        return { 'height': '2.5rem' }
    }
  }

  setClassButton(typeButton: ButtonType) {
    switch (typeButton) {
      case ButtonType.primary:
        return 'leg__button--primary'
      case ButtonType.secondary:
        return 'leg__button--secondary'
      case ButtonType.tertiary:
        return 'leg__button--tertiary'
      case ButtonType.failed:
        return 'leg__button--failed'
      case ButtonType.none:
        return 'leg__button--primary'

    }
  }



}
