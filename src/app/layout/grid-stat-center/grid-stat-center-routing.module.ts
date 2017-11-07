import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GridStatCenterComponent } from './grid-stat-center.component';

const routes: Routes = [
    { path: '', component: GridStatCenterComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GridStatCenterRoutingModule { }
