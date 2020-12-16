import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Parking } from './parking';
import { QueryResult } from './queryResult';

@Injectable({
  providedIn: 'root',
})
export class ParkingService {
  private uri =
    'https://data.stad.gent/api/records/1.0/search/?dataset=bezetting-parkeergarages-real-time&q=&facet=description';

  constructor(private http: HttpClient) {}

  getParkings(): Observable<Parking[]> {
    return this.http.get<QueryResult<Parking>>(this.uri).pipe(
      map((result) => result.records)
      // TODO: handle error
    );
  }

  getParking(recordid: Parking['recordid']): Observable<Parking> {
    const getById = (id: typeof recordid) => (parkings: Parking[]) =>
      parkings.find((parking) => parking.recordid === id);

    return this.getParkings().pipe(
      map(getById(recordid))
      // TODO: handle error
    );
  }
}
