import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { FormComponent } from './form-based/form.component';
import { ModelComponent } from './reactive/reactive.component';
import { LoginOneComponent } from './login/login-one.component';
import { LoginTwoComponent } from './login/login-two.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    LoginOneComponent,
    LoginTwoComponent,
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
