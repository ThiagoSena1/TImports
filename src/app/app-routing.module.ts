import { Xbox360Component } from './components/xbox360/xbox360.component';
import { XboxSeriesSComponent } from './components/xbox-series-s/xbox-series-s.component';
import { XboxSeriesXComponent } from './components/xbox-series-x/xbox-series-x.component';
import { XboxOneComponent } from './components/xbox-one/xbox-one.component';
import { AcessoriosComponent } from './acessorios/acessorios.component';
import { Play5Component } from './components/play5/play5.component';
import { Play4Component } from './components/play4/play4.component';
import { Play3Component } from './components/play3/play3.component';
import { Play2Component } from './components/play2/play2.component';
import { Play1Component } from './components/play1/play1.component';
import { PgInicialComponent } from './pg-inicial/pg-inicial.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: '/inicio', pathMatch: 'full'},
  {path: 'inicio', component: PgInicialComponent },
  {path: 'play1', component: Play1Component },
  {path: 'play2', component: Play2Component},
  {path: 'play3', component: Play3Component},  
  {path: 'play4', component: Play4Component},
  {path: 'play5', component: Play5Component},
  {path: 'xbox360', component:Xbox360Component },
  {path: 'xboxSeriesS', component: XboxSeriesSComponent},
  {path: 'xboxSeriesX', component:XboxSeriesXComponent },
  {path: 'xboxOne', component: XboxOneComponent},
  {path: 'acessorios', component: AcessoriosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
