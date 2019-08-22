import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpittleComponent } from './spittle.component';

describe('SpittleComponent', () => {
  let component: SpittleComponent;
  let fixture: ComponentFixture<SpittleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpittleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpittleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
