import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { Parking } from '../parking';
import { ParkingService } from '../parking.service';

@Component({
  selector: 'app-parking-list',
  templateUrl: './parking-list.component.html',
  styleUrls: ['./parking-list.component.scss'],
})
export class ParkingListComponent implements OnInit {
  parkings$: Observable<Parking[]>;

  constructor(private parkingService: ParkingService, private router: Router) {}

  ngOnInit(): void {
    this.parkings$ = this.parkingService.getParkings();
  }

  goToDetails(id: Parking['recordid']) {
    this.router.navigate(['/parking', id]);
  }
}
