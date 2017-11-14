import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GridStatCenterRoutingModule } from './grid-stat-center-routing.module';
import { GridStatCenterComponent } from './grid-stat-center.component';
import { PageHeaderModule } from './../../shared';
import {CardStatCenterComponent} from '../card-stat-center/card-stat-center.component';
import { PowerBIModule } from 'angular2-powerbi';
import { HttpClientModule } from '@angular/common/http';
import { NgDragDropModule } from 'ng-drag-drop';

@NgModule({
    imports: [
        CommonModule,
        GridStatCenterRoutingModule,
        PageHeaderModule,
        PowerBIModule.forRoot(),
        NgDragDropModule.forRoot(),
        HttpClientModule
    ],
    declarations: [
        GridStatCenterComponent,
        CardStatCenterComponent
    ]
})
export class GridStatCenterModule { }
