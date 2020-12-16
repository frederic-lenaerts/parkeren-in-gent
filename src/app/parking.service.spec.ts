import { HttpClient } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { ParkingService } from './parking.service';

describe('ParkingService', () => {
  let httpClient: HttpClient;
  let httpMock: HttpTestingController;
  let service: ParkingService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ParkingService],
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(ParkingService);
    httpClient = TestBed.inject(HttpClient);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
