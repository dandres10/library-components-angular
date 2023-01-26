import { Component, ElementRef, HostListener, ViewChild, AfterViewInit, OnChanges, SimpleChanges, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CoreElementDirective } from 'projects/synergy-library/src/lib/directives/core-element/core-element.directive';
import { ButtonSize, ButtonType, DataType, IconType, InputSize } from 'projects/synergy-library/src/lib/enums/GlobalEnum';
import { IButtonDTO, ICheckboxDTO, IInputSelectDTO, IInputTextDTO } from 'projects/synergy-library/src/lib/interfaces/IGlobalDTO';
import { ITableDTO } from 'projects/synergy-library/src/lib/interfaces/ITableDTO';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  dataTable!: ITableDTO;
  @ViewChild('table') tableElementRef!: ElementRef;
  dataTemplate = [
    { id: 1, value: '-1' },
    { id: 2, value: '-2' },
    { id: 3, value: '-3' },
    { id: 4, value: '-4' },
    { id: 5, value: '-5' },
    { id: 6, value: '-6' },
    { id: 7, value: '-7' },
    { id: 8, value: '-8' },
    { id: 9, value: '-9' }
  ];


  btnData: IButtonDTO = {
    callBack: () => this.btnAction(),
    text: 'Iniciar session',
    typeIcon: IconType.none,
    typeButton: ButtonType.secondary,
    size: ButtonSize.normal
  }

  inputText!: IInputTextDTO;
  inputText2!: IInputTextDTO;
  inputSelect1!: IInputSelectDTO;

  checkboxData: ICheckboxDTO = {
    callBack: (data: ICheckboxDTO) => this.checkboxDataAction(data),
    isActive: false,
    size: ButtonSize.normal
  }

  checkboxDataAction(data: any) {
    console.log(data);
  }


  @ViewChild(CoreElementDirective)
  set setElementTable(directive: CoreElementDirective) {
    this.dataTable = { ...this.dataTable, configurationTable: { ...this.dataTable.configurationTable, elementRef: directive.elementRef } }
  };

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.dataTable = { ...this.dataTable, configurationTable: { ...this.dataTable.configurationTable, elementRef: this.tableElementRef } }
  }

  form!: FormGroup;

  constructor(private fb: FormBuilder) {

  }

  ngOnInit(): void {
    this.buildTable()
    this.initForm()
  }

  private initForm() {
    let buildForm = {
      "name": [
        { value: '', disabled: false },
        Validators.compose([
          Validators.required,
          Validators.maxLength(20),
          Validators.minLength(3)
        ])
      ],
      "lastName": [
        { value: '', disabled: false },
        Validators.compose([
          Validators.required,
          Validators.maxLength(20),
          Validators.minLength(3)
        ])
      ],
      "country": [
        { value: { id: 1, value: null }, disabled: false },
        Validators.compose([
          Validators.required,
          Validators.maxLength(20),
          Validators.minLength(3)
        ])
      ]
    };

    this.form = this.fb.group(buildForm);

    this.inputText = {
      callBack: () => { },
      isActive: true,
      size: InputSize.big,
      hasIcon: true,
      placeholder: 'nombre',
      formControlName: 'name',
      form: this.form,
      width: '100%'
    }

    this.inputText2 = {
      callBack: () => { },
      isActive: true,
      size: InputSize.small,
      hasIcon: false,
      placeholder: 'apellido',
      formControlName: 'lastName',
      form: this.form,
      width: '30%'
    }

    this.inputSelect1 = {
      callBack: (form: any) => { this.form = form },
      isActive: true,
      size: InputSize.normal,
      placeholder: 'Elige pais...',
      formControlName: 'country',
      form: this.form,
      idSelected: null,
      width: '30%',
      list: [
        { id: 1, value: '-1' },
        { id: 2, value: '-2' },
        { id: 3, value: '-3' },
        { id: 4, value: '-4' },
        { id: 5, value: '-5' },
        { id: 6, value: '-6' },
        { id: 7, value: '-7' },
        { id: 8, value: '-8' },
        { id: 9, value: '-9' }
      ]

    }

  }

  submitData() {
    console.log('datos pasando');
  }

  dataService = [
    { id: 1, item1: 50000, item2: 'item2', item3: 'item3', item4: 'item4', item5: 'item5', item6: 'item6', item7: 'item7' },
    { id: 2, item1: 10, item2: 'xxxxxxx', item3: 'xxxx', item4: 'xxxx', item5: 'xxxx', item6: 'xxxx', item7: 'xxxx' }
  ]

  buildTable() {
    this.dataTable = {
      headers: [
        { id: 1, value: 'Codigo', hasFilters: true, dataType: DataType.number, callBack: () => { } },
        { id: 2, value: 'Nombre', hasFilters: false, dataType: DataType.number, callBack: () => this.llamada.bind(this) },
        { id: 3, value: 'Celular', hasFilters: false, dataType: DataType.string, callBack: () => { } },
        { id: 4, value: 'Telefono', hasFilters: false, dataType: DataType.string, callBack: () => { } },
        { id: 5, value: 'Dirección', hasFilters: false, dataType: DataType.string, callBack: () => { } },
        { id: 6, value: 'Pais', hasFilters: false, dataType: DataType.string, callBack: () => { } },
        { id: 7, value: 'Codigo postal', hasFilters: false, dataType: DataType.string, callBack: () => { } },
        { id: 8, value: 'Fecha ingreso', hasFilters: false, dataType: DataType.string, callBack: () => { } }
      ],
      configurationTable: {
        activateTabletMobile: true,
        elementRef: this.tableElementRef
      },
      rows: this.dataService
    };
  }


  llamada(data: any) {
    console.log('llamda contestada', data)
  }

  btn() {
    this.dataTable = {
      headers: [
        { id: 1, value: 'headers Ixx', hasFilters: true, dataType: DataType.number, callBack: () => { } },
        { id: 2, value: 'headers nombre', hasFilters: false, dataType: DataType.number, callBack: () => this.llamada.bind(this) },
        { id: 3, value: 'headers pedro', hasFilters: false, dataType: DataType.string, callBack: () => { } },
        { id: 4, value: 'headers juan', hasFilters: false, dataType: DataType.string, callBack: () => { } },
        { id: 5, value: 'headers lucas', hasFilters: false, dataType: DataType.string, callBack: () => { } },
        { id: 6, value: 'headers andres', hasFilters: false, dataType: DataType.string, callBack: () => { } },
        { id: 7, value: 'headers xxxxxxxxxx', hasFilters: false, dataType: DataType.string, callBack: () => { } },
        { id: 8, value: 'headers xxxxxxx', hasFilters: false, dataType: DataType.string, callBack: () => { } },
        { id: 9, value: 'headers xxxxxxx', hasFilters: false, dataType: DataType.string, callBack: () => { } }
      ],
      configurationTable: {
        activateTabletMobile: true,
        elementRef: this.tableElementRef
      },
      rows: this.dataService
    };
  }

  btnAction() {
    console.log(this.form);
  }

}
