import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {FormComponent} from './form-based/form.component';
import {ModelComponent} from './model-driven/model.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ModelComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
