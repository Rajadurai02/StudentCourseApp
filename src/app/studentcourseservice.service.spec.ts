import { TestBed } from '@angular/core/testing';

import { StudentcourseserviceService } from './studentcourseservice.service';

describe('StudentcourseserviceService', () => {
  let service: StudentcourseserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentcourseserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
