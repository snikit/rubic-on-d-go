import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@app/core';
import { Shell } from '@app/shell/shell.service';
import { RubicsCubeComponent } from './rubics_cube.component';

const routes: Routes = [
  Shell.childRoutes([
    { path: '', redirectTo: '/cube', pathMatch: 'full' },
    { path: 'cube', component: RubicsCubeComponent, data: { title: extract('Cube') } }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class CubeRoutingModule {}
