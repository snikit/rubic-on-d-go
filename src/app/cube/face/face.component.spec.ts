import { TestBed, inject } from '@angular/core/testing';

import { FaceComponent } from './face.component';

describe('a face component', () => {
  let component: FaceComponent;

  // register all needed dependencies
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FaceComponent]
    });
  });

  // instantiation through framework injection
  beforeEach(inject([FaceComponent], FaceComponent => {
    component = FaceComponent;
  }));

  it('should have an instance', () => {
    expect(component).toBeDefined();
  });
});
