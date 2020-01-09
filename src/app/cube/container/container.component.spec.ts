import { TestBed, inject } from '@angular/core/testing';

import { ContainerComponent } from './container.component';

describe('a container component', () => {
  let component: ContainerComponent;

  // register all needed dependencies
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContainerComponent]
    });
  });

  // instantiation through framework injection
  beforeEach(inject([ContainerComponent], ContainerComponent => {
    component = ContainerComponent;
  }));

  it('should have an instance', () => {
    expect(component).toBeDefined();
  });
});
