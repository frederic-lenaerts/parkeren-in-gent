import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { Parking } from '../parking';
import { ParkingService } from '../parking.service';

@Component({
  selector: 'app-parking-details',
  templateUrl: './parking-details.component.html',
  styleUrls: ['./parking-details.component.scss'],
})
export class ParkingDetailsComponent implements OnInit {
  parking$: Observable<Parking>;

  constructor(
    private route: ActivatedRoute,
    private parkingService: ParkingService
  ) {}

  ngOnInit(): void {
    this.parking$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.parkingService.getParking(params.get('id'))
      )
    );
  }
}
