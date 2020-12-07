import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Angular Material Modules
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';

// Plotly
import { PlotlyViaCDNModule } from 'angular-plotly.js';
PlotlyViaCDNModule.setPlotlyVersion('latest');

// Components
import { MetricsPageComponent } from './metrics-page/metrics-page.component';
import { PlotCompComponent } from './plot-comp/plot-comp.component';


@NgModule({
  declarations: [
    AppComponent,
    MetricsPageComponent,
    PlotCompComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    PlotlyViaCDNModule,
    MatToolbarModule,
    MatCardModule,
    MatGridListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
