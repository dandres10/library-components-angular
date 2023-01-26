
import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { DataType } from '../../enums/GlobalEnum';
import { IConfigurationTableDTO, IRowDTO, IRowMovilDTO, ITableDTO, ITableHeadersDTO, ITableHeadersMovilDTO, IValueDTO } from '../../interfaces/ITableDTO';

@Component({
  selector: 'leg-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnChanges {

  @Input() data!: ITableDTO
  headers: ITableHeadersDTO[] = [];
  headersMovil!: ITableHeadersMovilDTO;
  rowsDataMovil!: IRowMovilDTO;
  configurationTable!: IConfigurationTableDTO;
  indexValues = 0;

  ngOnChanges(changes: SimpleChanges): void {
    this.changeValueData(changes);
  }

  private changeValueData(changes: SimpleChanges) {
    if (changes.data) {
      this.configurationTable = this.data?.configurationTable
      this.responsiveColums()
      this.assingHeadCollapse()
      this.assingColumnCollapseRows()
      this.indexValues = 0
      this.headersMovil = this.assignHeadersMovil()
      this.rowsDataMovil = this.assingRowsDataMovil()
    }
  }

  private responsiveColums() {
    const width = this.configurationTable?.elementRef?.nativeElement.offsetWidth || 1280
    const minimumColumnSize = 160
    const resultColumns = Math.round(width / minimumColumnSize)
    this.configurationTable = { ...this.configurationTable, columns: resultColumns }
  }

  private assignIdToValues(): IRowDTO[] {
    let valuesWithId: IRowDTO[] = []
    this.data?.rows.forEach((item) => {
      valuesWithId.push({ id: item.id, value: this.buildValuesWithId(item) })
    })
    return valuesWithId;
  }

  private assingColumnCollapseRows() {
    this.clearAssingColumnCollapseRows();
    const [row] = this.data?.rows
    const numberOfVisibleColumnsMovile = this.configurationTable.columns;
    if (!numberOfVisibleColumnsMovile) return
    if (numberOfVisibleColumnsMovile < Object.values(row).length) {
      this.setRows(numberOfVisibleColumnsMovile);
    }
  }

  private setRows(numberOfVisibleColumnsMovile: number) {
    this.data.rows = this.data.rows.map((item) => {
      let assingObj: any = {};
      Object.keys(item).forEach((key, index) => {
        assingObj[key] = item[key]
        if (index === numberOfVisibleColumnsMovile - 2) {
          assingObj.collapse = false
        }
      })
      return assingObj;
    })

  }

  private clearAssingColumnCollapseRows() {
    var newRows: any[] = [];
    newRows = this.data.rows.map((item) => {
      delete item.collapse
      return item;
    })
    this.data.rows = newRows;
  }

  private assingHeadCollapse() {
    this.data.headers = this.data.headers.filter(x => x.dataType != DataType.collapse);
    const numberOfHeaders = this.data?.headers.length
    const numberOfVisibleColumnsMovile = this.configurationTable.columns;
    if (!numberOfVisibleColumnsMovile) return
    if (numberOfVisibleColumnsMovile < numberOfHeaders) {
      this.setHeaders(numberOfVisibleColumnsMovile);
    }
  }

  private setHeaders(numberOfVisibleColumnsMovile: number) {
    var newHeaders: ITableHeadersDTO[] = [];
    this.data.headers.forEach((item, index) => {
      if (index === numberOfVisibleColumnsMovile - 1) {
        newHeaders.push({ id: index + 1, value: null, hasFilters: false, dataType: DataType.collapse, callBack: () => this.actionCollapse.bind(this) })
      }
      newHeaders.push({ ...item, id: index + 1 });
    })
    this.data.headers = newHeaders;
  }

  private actionCollapse(value: any) {
    let onlyAssingFalse = this.data.rows.map((item) => {
      if (item.id === value.id) {
        return { ...item, collapse: !value.value }
      }
      return { ...item, collapse: false }
    })
    this.data.rows = onlyAssingFalse;
    this.resetHeadersAndRows();
  }

  private resetHeadersAndRows() {
    this.indexValues = 0
    this.headersMovil = this.assignHeadersMovil()
    this.rowsDataMovil = this.assingRowsDataMovil()
  }

  private assignHeadersMovil() {
    const numberOfVisibleColumnsMovile = this.configurationTable.columns || this.data?.headers?.length
    let buildData: ITableHeadersMovilDTO = {
      headersTitle: this.data?.headers.slice(0, numberOfVisibleColumnsMovile),
      headersCard: this.data?.headers.slice(numberOfVisibleColumnsMovile, this.data?.headers?.length)
    };

    return buildData;
  }

  private assingRowsDataMovil(): IRowMovilDTO {
    const dataMapped = this.assignIdToValues()
    const numberOfVisibleColumnsMovile = this.configurationTable.columns || dataMapped.length
    return {
      rowsTitle: this.setRowsTitleTable(dataMapped, numberOfVisibleColumnsMovile),
      rowsCard: this.setRowsCardTable(dataMapped, numberOfVisibleColumnsMovile)
    }
  }


  private setRowsTitleTable(dataMapped: IRowDTO[], numberOfVisibleColumnsMovile: number) {
    return dataMapped.map((item: IRowDTO) => {
      return { ...item, value: item.value.slice(0, numberOfVisibleColumnsMovile), headers: this.headersMovil.headersCard }
    })
  }

  private setRowsCardTable(dataMapped: IRowDTO[], numberOfVisibleColumnsMovile: number) {
    return dataMapped.map((item: IRowDTO) => {
      return { ...item, value: item.value.slice(numberOfVisibleColumnsMovile, item.value.length), headers: this.headersMovil.headersCard }
    })
  }

  private buildValuesWithId(item: any): IValueDTO[] {
    const objectValues = Object.keys(item);
    let buildData: IValueDTO[] = [];
    let assingHeaders = 0;

    objectValues.forEach(attribute => {
      buildData.push({
        id: this.indexValues,
        value: item[attribute],
        keyValue: attribute,
        attribute: this.data.headers[assingHeaders].value,
        dataType: this.data.headers[assingHeaders].dataType,
        callBack: this.data.headers[assingHeaders].callBack()
      })
      this.indexValues++;
      assingHeaders++;
    });
    return buildData;
  }


}
