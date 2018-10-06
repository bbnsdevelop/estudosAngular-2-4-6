import { TestBed, inject } from '@angular/core/testing';

import { DiretivaNgifImplService } from './diretiva-ngif-impl.service';

describe('DiretivaNgifImplService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DiretivaNgifImplService]
    });
  });

  it('should be created', inject([DiretivaNgifImplService], (service: DiretivaNgifImplService) => {
    expect(service).toBeTruthy();
  }));
});
