import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BabyControlRoomComponent } from './baby-control-room.component';

describe('BabyControlRoomComponent', () => {
  let component: BabyControlRoomComponent;
  let fixture: ComponentFixture<BabyControlRoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BabyControlRoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BabyControlRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
