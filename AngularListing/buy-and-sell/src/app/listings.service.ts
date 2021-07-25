import { Injectable } from '@angular/core';
import { observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { fakeListings } from './fake-data';
import { Listing } from './types';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'content-type': 'application/json',
  })
}
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
  getListingById(id: String): Observable<Listing>{
    return this.http.get<Listing>(`/api/listings/${id}`);
  }
  addViewToListing(id: string): Observable<Listing>{
    return this.http.post<Listing>(`/api/listings/${id}/add-view`, 
    {},
    httpOptions,
    );
  }
}
