import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BabiesComponent } from './babies.component';

describe('BabiesComponent', () => {
  let component: BabiesComponent;
  let fixture: ComponentFixture<BabiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BabiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BabiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
