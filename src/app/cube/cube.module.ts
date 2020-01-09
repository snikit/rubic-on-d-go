import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RubicsCubeComponent } from './rubics_cube/rubics_cube.component';
import { ContainerComponent } from './container/container.component';
import { ViewportComponent } from './viewport/viewport.component';
import { CubeComponent } from './cube/cube.component';
import { CubieComponent } from './cubie/cubie.component';
import { FaceComponent } from './face/face.component';
import { CubeRoutingModule } from './shell/cube.routing';

@NgModule({
  declarations: [
    RubicsCubeComponent,
    ContainerComponent,
    ViewportComponent,
    CubeComponent,
    CubieComponent,
    FaceComponent
  ],
  imports: [CommonModule, CubeRoutingModule],
  exports: [RubicsCubeComponent]
})
export class CubeModule {}
