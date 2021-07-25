import { Component, OnInit } from '@angular/core';
import { fakeListings, fakeMyListings } from '../fake-data';
import { ActivatedRoute } from '@angular/router';
import { Listing } from '../types';

@Component({
  selector: 'app-my-listings-page',
  templateUrl: './my-listings-page.component.html',
  styleUrls: ['./my-listings-page.component.css']
})
export class MyListingsPageComponent implements OnInit {
  listings: Listing[] = []; 
  constructor() { }

  ngOnInit(): void {
    this.listings = fakeMyListings;
  }
  onDeleteClicked(listingId: string): void {
    alert(`Deleting your listing with id ${listingId}`)
  }
}
