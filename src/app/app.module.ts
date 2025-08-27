import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { Weather } from './Result/weather';
import { WeatherBodyComponent } from './weather-body/weather-body.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WeatherBodyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    Weather,
    provideHttpClient(withInterceptorsFromDi())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
