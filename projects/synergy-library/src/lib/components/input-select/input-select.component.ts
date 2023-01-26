
import { Component, Input, OnInit, AfterViewInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InputSize } from '../../enums/GlobalEnum';
import { IInputSelectDTO, IInputTextDTO } from '../../interfaces/IGlobalDTO';

@Component({
  selector: 'leg-input-select',
  templateUrl: './input-select.component.html',
  styleUrls: ['./input-select.component.scss']
})
export class InputSelectComponent implements OnInit {

  @Input() data!: IInputSelectDTO
  searchList: any[] = []
  currentValue: any
  form!: FormGroup;
  inputText!: IInputTextDTO;
  showSelect = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.searchList = this.data.list;
    this.setValue()
    this.initForm()
  }

  private initForm() {
    let buildForm = {
      "search": [
        { value: '', disabled: false },
        Validators.compose([
          Validators.required
        ])
      ]
    };

    this.form = this.fb.group(buildForm);

    this.inputText = {
      callBack: () => { this.searchList = this.data.list },
      isActive: true,
      size: InputSize.small,
      hasIcon: true,
      placeholder: 'Search',
      formControlName: 'search',
      form: this.form,
      width: '100%'
    }

  }

  changeStateShowSelect() {
    this.showSelect ? this.showSelect = false : this.showSelect = true;
  }

  changeInput(event: any) {
    let value = event.target.value;
    this.resetSearchList(value);
    this.filterListToResult(value);
    this.data.form.controls[this.data.formControlName].markAsPending();
  }

  filterListToResult(value: string) {
    this.searchList = this.data.list.filter(x => x.value.toLowerCase().includes(value.toLowerCase()));
  }

  resetSearchList(value: string) {
    if (!value.toString().length) {
      this.searchList = this.data.list
    }
  }

  setValue() {
    setTimeout(() => {
      let data = this.data.form.controls[this.data.formControlName]?.value;
      this.currentValue = data?.value || null;
    });
  }

  clear() {
    this.data.form.controls[this.data.formControlName].setValue(null);
  }


  selected(item: any) {
    if (item?.id && this.data.idSelected != item.id) {
      this.data.idSelected = item.id;
      this.currentValue = item.value;
      this.data.form.controls[this.data.formControlName].setValue(item);
    }
  }

  get InputSizeEnum(): typeof InputSize {
    return InputSize;
  }


}
