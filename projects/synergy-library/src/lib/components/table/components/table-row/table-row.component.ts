import { Component, Input, OnInit } from '@angular/core';
import { DataType } from 'projects/synergy-library/src/lib/enums/GlobalEnum';
import { IRowDTO, IRowMovilDTO, ITableDTO, IValueDTO } from '../../../../interfaces/ITableDTO';

@Component({
  selector: 'leg-table-row',
  templateUrl: './table-row.component.html',
  styleUrls: ['./table-row.component.scss']
})
export class TableRowComponent implements OnInit {

  @Input() rowsDataMovil!: IRowMovilDTO
  @Input() data!: ITableDTO

  constructor() { }

  ngOnInit() {
  }

  rowActive(isActive: boolean) {
    if (isActive)
      return 'row active'
    return 'row'
  }

  isCollapsed(pId: number) {
    return this.data.rows.find(x => x.id === pId)?.collapse
  }

  rowDetailActive(isActive: boolean) {
    if (isActive)
      return 'row__container__detail active'
    return 'row__container__detail'
  }

  getRowByItem(id: number, item: any) {
    return { id, keyValue: item.keyValue, value: item.value };
  }

  getDetailRow(pId: number) {
    return this.rowsDataMovil.rowsCard.find(x => x.id === pId)?.value
  }

  trackByTableMovilRowId(index: number, item: IRowDTO) {
    return item.id;
  }

  trackByTableMovilValue(index: number, item: IValueDTO) {
    return item.id;
  }

  trackByTableMovilDetail(index: number, item: IValueDTO) {
    return item.id;
  }



  get DataTypeEnum(): typeof DataType {
    return DataType;
  }

}
