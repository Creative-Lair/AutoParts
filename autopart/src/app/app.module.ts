import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Header } from './components/header/header';
import { Slider } from './components/slider/slider';
import { Footer } from './components/footer/footer';
import { Body } from './components/body/body';
import { Topbar } from './components/topbar/topbar';
import { Home } from './components/home/home';
import {routing} from './app.router'

@NgModule({
  declarations: [
    AppComponent, Header, Slider, Footer, Body, Topbar,Home
  ],
  imports: [
    BrowserModule, routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
