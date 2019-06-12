import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgxGaugeModule } from 'ngx-gauge';
import { ToppyModule } from 'toppy';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { DeviceByNameComponent } from './device-by-name/device-by-name.component';
import { PluginStatsComponent } from './plugin-stats/plugin-stats.component';
import * as more from 'highcharts/highcharts-more.src';
import * as exporting from 'highcharts/modules/exporting.src';
import { ChartModule, HIGHCHARTS_MODULES } from 'angular-highcharts';

@NgModule({
  imports: [
    DashboardRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    NgxGaugeModule,
    ToppyModule,
    TranslateModule,
    NgxDatatableModule,
    ChartModule
  ],
  declarations: [DashboardComponent, PluginStatsComponent, DeviceByNameComponent],
  providers: [{ provide: HIGHCHARTS_MODULES, useFactory: () => [more, exporting] }]
})
export class DashboardModule {}
