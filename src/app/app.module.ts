import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CoreElementDirective } from 'projects/synergy-library/src/lib/directives/core-element/core-element.directive';
// import { SynergyLibraryModule } from 'synergy-library';
import { SynergyLibraryModule } from 'projects/synergy-library/src/lib/synergy-library.module';

import { AppComponent } from './app.component';


SynergyLibraryModule
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SynergyLibraryModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CoreElementDirective],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
