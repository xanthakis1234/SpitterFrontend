import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllSpittersComponentComponent } from './all-spitters-component.component';

describe('AllSpittersComponentComponent', () => {
  let component: AllSpittersComponentComponent;
  let fixture: ComponentFixture<AllSpittersComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllSpittersComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllSpittersComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
