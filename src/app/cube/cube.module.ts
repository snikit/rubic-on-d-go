import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RubicsCubeComponent } from './rubics_cube/rubics_cube.component';
import { CubeRoutingModule } from './rubics_cube/rubics_cube-routing.module';
import { ContainerComponent } from './container/container.component';
import { ViewportComponent } from './viewport/viewport.component';
import { CubeComponent } from './cube/cube.component';
import { CubieComponent } from './cubie/cubie.component';

@NgModule({
  declarations: [RubicsCubeComponent, ContainerComponent, ViewportComponent, CubeComponent, CubieComponent],
  imports: [CommonModule, CubeRoutingModule],
  exports: [RubicsCubeComponent]
})
export class CubeModule {}