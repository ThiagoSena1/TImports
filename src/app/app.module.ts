import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Play1Component } from './components/play1/play1.component';
import { Play2Component } from './components/play2/play2.component';
import { Play3Component } from './components/play3/play3.component';
import { Play4Component } from './components/play4/play4.component';
import { Play5Component } from './components/play5/play5.component';
import { Xbox360Component } from './components/xbox360/xbox360.component';
import { XboxOneComponent } from './components/xbox-one/xbox-one.component';
import { XboxOneXComponent } from './components/xbox-one-x/xbox-one-x.component';
import { XboxSeriesSComponent } from './components/xbox-series-s/xbox-series-s.component';
import { XboxSeriesXComponent } from './components/xbox-series-x/xbox-series-x.component';
import { MenuComponent } from './menu/menu.component';
import { PgInicialComponent } from './pg-inicial/pg-inicial.component';
import { AcessoriosComponent } from './acessorios/acessorios.component';

@NgModule({
  declarations: [
    AppComponent,
    Play1Component,
    Play2Component,
    Play3Component,
    Play4Component,
    Play5Component,
    Xbox360Component,
    XboxOneComponent,
    XboxOneXComponent,
    XboxSeriesSComponent,
    XboxSeriesXComponent,
    MenuComponent,
    PgInicialComponent,
    AcessoriosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
