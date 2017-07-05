import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Header } from './components/header/header';
import { Slider } from './components/slider/slider';
import { Footer } from './components/footer/footer';


@NgModule({
  declarations: [
    AppComponent, Header, Slider, Footer
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
