import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { ParkingDetailsComponent } from './parking-details.component';

describe('ParkingDetailsComponent', () => {
  let component: ParkingDetailsComponent;
  let fixture: ComponentFixture<ParkingDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({
              id: 'a2cdb8d39408053b8baaccf66aa408902c0aec56',
            }),
          },
        },
      ],
      declarations: [ParkingDetailsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParkingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
