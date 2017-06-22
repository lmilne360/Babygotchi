import { TestBed, inject } from '@angular/core/testing';

import { RandomPickerService } from './random-picker.service';

describe('RandomPickerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RandomPickerService]
    });
  });

  it('should be created', inject([RandomPickerService], (service: RandomPickerService) => {
    expect(service).toBeTruthy();
  }));
});
