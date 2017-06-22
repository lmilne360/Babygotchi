import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BabyStatusComponent } from './baby-status.component';

describe('BabyStatusComponent', () => {
  let component: BabyStatusComponent;
  let fixture: ComponentFixture<BabyStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BabyStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BabyStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
