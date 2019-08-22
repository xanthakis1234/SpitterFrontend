import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpittersComponent } from './spitters.component';

describe('SpittersComponent', () => {
  let component: SpittersComponent;
  let fixture: ComponentFixture<SpittersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpittersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpittersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
