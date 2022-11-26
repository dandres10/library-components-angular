import { NgModule } from '@angular/core';
import { TableComponent } from './components/table/table.component';

const COMPONENTS = [TableComponent];

@NgModule({
  declarations: COMPONENTS,
  imports: [
  ],
  exports: COMPONENTS
})
export class SynergyLibraryModule { }
