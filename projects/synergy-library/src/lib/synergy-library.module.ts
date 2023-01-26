import { NgModule } from '@angular/core';
import { TableComponent } from './components/table/table.component';
import { BrowserModule } from '@angular/platform-browser';
import { CoreElementDirective } from './directives/core-element/core-element.directive';
import { SouthArrowComponent } from './components/south-arrow/south-arrow.component';
import { NorthArrowComponent } from './components/north-arrow/north-arrow.component';
import { TableHeaderComponent } from './components/table/components/table-header/table-header.component';
import { TableRowComponent } from './components/table/components/table-row/table-row.component';
import { FiltreComponent } from './components/filtre/filtre.component';
import { PopupFiltersTableComponent } from './components/table/components/popup-filters-table/popup-filters-table.component';
import { TooltipFilterTableDirective } from './directives/tooltip-filter-table/tooltip-filter-table.directive';
import { ButtonComponent } from './components/button/button.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { DoveComponent } from './components/dove/dove.component';
import { InputTextComponent } from './components/input-text/input-text.component';
import { IconXComponent } from './components/icon-x/icon-x.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputSelectComponent } from './components/input-select/input-select.component';
import { IconDownArrowComponent } from './components/icon-down-arrow/icon-down-arrow.component';


const COMPONENTS = [
  TableComponent,
  CoreElementDirective,
  SouthArrowComponent,
  NorthArrowComponent,
  TableHeaderComponent,
  TableRowComponent,
  FiltreComponent,
  PopupFiltersTableComponent,
  TooltipFilterTableDirective,
  ButtonComponent,
  CheckboxComponent,
  DoveComponent,
  InputTextComponent,
  IconXComponent,
  InputSelectComponent,
  IconDownArrowComponent
];

@NgModule({
  declarations: COMPONENTS,
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: COMPONENTS
})
export class SynergyLibraryModule { }
