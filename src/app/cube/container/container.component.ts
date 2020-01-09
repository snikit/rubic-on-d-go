import { Output, Component, OnInit, HostListener, EventEmitter } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'cube-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  @Output() onSwipe$ = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  @HostListener('swipe', ['$event']) onSwipe(event: Event) {
    console.log('component is swiped');
    console.log(event);

    //! we need to map directions her

    this.onSwipe$.emit(event);
  }
}
