import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { MaterialModule } from './material.module';
import { AppComponent } from './app.component';
import { MyFormComponent } from './my-form/my-form.component';



@NgModule({
  imports:      [ 
    BrowserModule, 
    BrowserAnimationsModule, 
    ReactiveFormsModule, 
    FormsModule,
    MaterialModule ],
  declarations: [ AppComponent, MyFormComponent,],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }