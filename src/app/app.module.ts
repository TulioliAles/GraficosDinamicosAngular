import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChartsModule } from 'ng2-charts';
import { LinhasComponent } from './components/linhas/linhas.component';
import { BarrasComponent } from './components/barras/barras.component';
import { DonutsComponent } from './components/donuts/donuts.component';
import { RadarComponent } from './components/radar/radar.component';
import { PizzaComponent } from './components/pizza/pizza.component';
import { PolarComponent } from './components/polar/polar.component';
import { DinamicoComponent } from './components/dinamico/dinamico.component';

@NgModule({
  declarations: [
    AppComponent,
    LinhasComponent,
    BarrasComponent,
    DonutsComponent,
    RadarComponent,
    PizzaComponent,
    PolarComponent,
    DinamicoComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
