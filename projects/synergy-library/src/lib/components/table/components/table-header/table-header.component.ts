import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ITableDTO, ITableHeadersDTO, ITableHeadersMovilDTO } from 'projects/synergy-library/src/lib/interfaces/ITableDTO';


@Component({
  selector: 'leg-table-header',
  templateUrl: './table-header.component.html',
  styleUrls: ['./table-header.component.scss']
})
export class TableHeaderComponent implements OnInit {

  @Input() headersMovil!: ITableHeadersMovilDTO;
  @Input() data!: ITableDTO

  constructor() { }

  ngOnInit() {
  }


  trackByTableMovilHeadersId(index: number, item: ITableHeadersDTO) {
    return item.id;
  }

}
