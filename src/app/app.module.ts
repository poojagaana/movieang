import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//Adding forms module and httpclient module
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { MoviesDisplayComponent } from './movies-display/movies-display.component';
import { BodyComponent } from './body/body.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginFormComponent,
    MoviesDisplayComponent,
    BodyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule  //HttpClientModule is added here because
  ],
  providers: [HttpClient],//HttpClient is added here because
  bootstrap: [AppComponent]
})
export class AppModule { }
