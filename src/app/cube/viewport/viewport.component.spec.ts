import { TestBed, inject } from '@angular/core/testing';

import { ViewportComponent } from './viewport.component';

describe('a viewport component', () => {
  let component: ViewportComponent;

  // register all needed dependencies
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ViewportComponent]
    });
  });

  // instantiation through framework injection
  beforeEach(inject([ViewportComponent], (ViewportComponent: ViewportComponent) => {
    component = ViewportComponent;
  }));

  it('should have an instance', () => {
    expect(component).toBeDefined();
  });
});
