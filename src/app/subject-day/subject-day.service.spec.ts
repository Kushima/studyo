import { TestBed, inject } from '@angular/core/testing';

import { SubjectDayService } from './subject-day.service';

describe('SubjectDayService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SubjectDayService]
    });
  });

  it('should be created', inject([SubjectDayService], (service: SubjectDayService) => {
    expect(service).toBeTruthy();
  }));
});
