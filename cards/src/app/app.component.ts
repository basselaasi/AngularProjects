import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [
    {
      title:'Neat Tree',
      imageUrl:'assets/tree.jpeg',
      username:'nature',
      content:'I saw this neat tree today'
    },
    {
      title: 'Snowy Mountain',
      imageUrl: 'assets/mountain.jpeg',
      username: 'nmountainlover',
      content: 'Here is a picture to snowy montain'
    },
    {
      title: 'Mountain Biking',
      imageUrl: 'assets/biking.jpeg',
      username: 'Biking2222',
      content: 'I saw this I like biking'
    },
    {
      title: 'Mountain Hiking',
      imageUrl: 'assets/biking.jpeg',
      username: 'Hiker2321',
      content: 'Hiking is nice'
    },
    {
      title: 'Sea Swimming',
      imageUrl: 'assets/sea.jpg',
      username: 'Swimmer',
      content: 'I like swimming'
    },
  ];
}
