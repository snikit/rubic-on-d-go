import { Component, OnInit, ViewChild, Input, ContentChild, AfterViewInit, AfterContentInit } from '@angular/core';
import { ContainerComponent } from '../container/container.component';
import { CubeComponent } from '../cube/cube.component';

@Component({
  selector: 'rubics-cube',
  templateUrl: './rubics_cube.component.html',
  styleUrls: ['./rubics_cube.component.scss']
})
export class RubicsCubeComponent implements OnInit, AfterContentInit, AfterViewInit {
  @ContentChild(CubeComponent, {
    static: false
  })
  cubeComponent: CubeComponent;

  constructor() {
    console.log('constructor');
    CubeComponent.INIT_POSITION = {
      x: 28,
      y: -28
    };
  }

  ngOnInit() {
    console.log('ng on init');
  }

  ngAfterViewInit() {
    console.log('after view init');
  }

  ngAfterContentInit() {
    console.log('after content init');
  }
}
