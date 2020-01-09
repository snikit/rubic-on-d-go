import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { ContainerComponent } from '../container/container.component';
import { Cube } from '../cube/shell/cube';

@Component({
  selector: 'rubics-cube',
  templateUrl: './rubics_cube.component.html',
  styleUrls: ['./rubics_cube.component.scss']
})
export class RubicsCubeComponent implements OnInit {
  @Input() cube: Cube;

  constructor() {}

  ngOnInit() {}
}
