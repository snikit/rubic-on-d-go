import {
  Component,
  OnInit,
  AfterViewInit,
  ChangeDetectorRef,
  ElementRef,
  ViewChild,
  AfterContentInit,
  HostBinding,
  HostListener,
  SecurityContext
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  moduleId: module.id,
  selector: 'cube',
  templateUrl: './cube.component.html',
  styleUrls: ['./cube.component.css']
})
export class CubeComponent implements OnInit, AfterViewInit, AfterContentInit {
  static INIT_POSITION: { x: number; y: number };
  position: { x: number; y: number };

  @ViewChild('cube', {
    static: false
  })
  _cube: ElementRef<HTMLDivElement>;

  readonly INIT_CONFIG = {
    front: 'blue',
    back: 'green',
    up: 'red',
    down: 'white',
    left: 'orange',
    right: 'yellow'
  };

  constructor(private _detectChanges: ChangeDetectorRef, private _sanitizer: DomSanitizer) {}

  ngOnInit() {}

  ngAfterViewInit(): void {
    const { x, y } = CubeComponent.INIT_POSITION;
    // this.style.transform = `rotateX(${y}deg) rotateY(${x}deg)`;
    // this._cube.nativeElement.style.transform = `rotateX(' + y + 'deg) rotateY(' + x + 'deg)`;

    this.setColors({});
  }

  ngAfterContentInit() {}

  @HostListener('mousedown', ['$event'])
  onMouseDown(event: Event) {
    const { x, y } = CubeComponent.INIT_POSITION;

    this.position = {
      x,
      y
    };

    this._cube.nativeElement.style.transform = `rotateX(${x}deg) rotateY(${y}deg)`;
  }

  setColors(colors: any) {
    // tslint:disable-next-line: forin
    for (const face in this.INIT_CONFIG) {
      document.querySelectorAll(` .${face} div`).forEach((faceDiv: HTMLDivElement) => {
        faceDiv.classList.add(this.INIT_CONFIG[face]);
      });
    }
    //  Y.all('.' + face + ' > div').addClass(INIT_CONFIG[face]);
  }
}
