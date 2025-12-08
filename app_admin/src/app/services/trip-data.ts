import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Trip } from '../models/trip';

@Injectable({
  providedIn: 'root',
})
export class TripData {
  [x: string]: any;
  
  constructor(private http: HttpClient) {}

  getTrips() : Observable<Trip[]> {
    // console.log('Inside TripDataService::addTrips');
    return this.http.get<Trip[]>(URL);
  }

  addTrip(formData: Trip) : Observable<Trip> {
    return this.http.post<Trip>(URL, formData);
  }

  getTrip(tripCode: string) : Observable<Trip[]> {
    return this.http.get<Trip[]>(URL + '/' + tripCode);
  }

  updateTrip(formData: Trip) : Observable<Trip> {
    return this.http.put<Trip>(URL + '/' + formData.code, formData);
  }

}
