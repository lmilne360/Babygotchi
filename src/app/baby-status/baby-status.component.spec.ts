import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialModule } from '@angular/material';

import { BabyStatusComponent } from './baby-status.component';
import { StatusIndicatorComponent } from '../status-indicator/status-indicator.component';

describe('BabyStatusComponent', () => {
  let component: BabyStatusComponent;
  let fixture: ComponentFixture<BabyStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MaterialModule
      ],
      declarations: [ BabyStatusComponent, StatusIndicatorComponent ]
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
