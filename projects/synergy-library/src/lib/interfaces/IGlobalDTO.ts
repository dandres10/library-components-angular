import { FormGroup } from "@angular/forms"
import { ButtonSize, ButtonType, IconType, InputSize } from "../enums/GlobalEnum"

export interface IButtonDTO {
  callBack: Function
  text: string
  typeIcon: IconType
  typeButton: ButtonType
  size: ButtonSize
}

export interface ICheckboxDTO {
  callBack: Function
  isActive: boolean
  size: ButtonSize
}

export interface IInputTextDTO {
  callBack: Function
  isActive: boolean
  size: InputSize
  hasIcon: boolean,
  placeholder: string
  formControlName: any,
  form: FormGroup
  width: string;
}

export interface IInputSelectDTO {
  callBack: Function
  isActive: boolean
  size: InputSize
  width: string;
  placeholder: string
  formControlName: any
  form: FormGroup
  list: any[]
  idSelected: number | null
}