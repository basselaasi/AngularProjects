import { Injectable } from '@angular/core';
import { observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { fakeListings } from './fake-data';
import { Listing } from './types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListingsService {

  constructor(
    private http: HttpClient,

  ) { }

  getListings(): Observable<Listing[]> {
    return this.http.get<Listing[]>('/api/listings')
  }
}
