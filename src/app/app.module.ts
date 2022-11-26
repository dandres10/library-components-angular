import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SynergyLibraryModule } from 'synergy-library';
// import { SynergyLibraryModule } from 'projects/synergy-library/src/lib/synergy-library.module';


import { AppComponent } from './app.component';


SynergyLibraryModule
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SynergyLibraryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
