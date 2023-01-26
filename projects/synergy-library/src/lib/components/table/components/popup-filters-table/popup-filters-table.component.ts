import { FunctionCall } from '@angular/compiler';
import { Component, Input, OnInit, OnChanges, SimpleChanges, OnDestroy, HostListener } from '@angular/core';
import { DataType } from 'projects/synergy-library/src/lib/enums/GlobalEnum';
import { ITableHeadersDTO } from 'projects/synergy-library/src/lib/interfaces/ITableDTO';

@Component({
  selector: 'leg-popup-filters-table',
  templateUrl: './popup-filters-table.component.html',
  styleUrls: ['./popup-filters-table.component.scss']
})
export class PopupFiltersTableComponent implements OnChanges {

  @Input() data: ITableHeadersDTO[] = []
  left: number = 0;
  top: number = 0;
  destroyComponent: Function = () => { }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.destroyComponent()
  }

  constructor() { }


  ngOnChanges(changes: SimpleChanges): void {
    if (changes.data) {
      this.clearHeaders();
    }
  }

  private clearHeaders() {
    this.data = this.data.filter(x => x.dataType !== DataType.collapse);
  }

  trackByTableMovilHeadersId(index: number, item: ITableHeadersDTO) {
    return item.id;
  }

  filter() {
    this.destroyComponent()
  }



}
