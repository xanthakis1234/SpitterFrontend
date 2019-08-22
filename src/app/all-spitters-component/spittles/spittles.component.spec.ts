import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpittlesComponent } from './spittles.component';

describe('SpittlesComponent', () => {
  let component: SpittlesComponent;
  let fixture: ComponentFixture<SpittlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpittlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpittlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
