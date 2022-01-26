import { Component, OnInit } from '@angular/core';
import { Place } from './place.model';

@Component({
  selector: 'app-place-swipper',
  templateUrl: './place-swipper.component.html',
  styleUrls: ['./place-swipper.component.css'],
})
export class PlaceSwipperComponent implements OnInit {
  places: Place[] = [
    new Place(
      'Red Lobster',
      'https://media.architecturaldigest.com/photos/590cc6c3b3064307ffee59a4/master/w_3000,h_2000,c_limit/Tallest%20Restaurants%20in%20the%20World%207.jpg',
      'Hmmm, yummy. This is going to be a longer message so that we I can see how this is going to look with all of the text being displayed. It is down here where the bridge is and we need to stop so that we are ',
      '123 some street'
    ),
    new Place(
      'another test', 
      'https://images.otstatic.com/prod/24980163/1/medium.jpg', 
      'Hmmm, yummy. This is going to be a longer message so that we I can see how this is going to look with all of the text being displayed. It is down here where the bridge is and we need to stop so that we are ', 
      '123 some street'
    ),
    new Place(
      'test', 
      'https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg', 
      'Hmmm, yummy. This is going to be a longer message so that we I can see how this is going to look with all of the text being displayed. It is down here where the bridge is and we need to stop so that we are ', 
      '123 some street'
    ),
  ];

  likedPlaces: Place[] = []
  dislikedPlaces: Place[] = []

  selectedIndex = 0;

  constructor() {}

  ngOnInit(): void {}

  onLike() {
    // send event saying that the user liked this
    // make post call to server or rsocket.
    this.likedPlaces.push(this.places[this.selectedIndex])
    this.selectedIndex++;
  }

  onDislike() {
    // send event saying that the user disliked this
    // make post call to server or rsocket.
    this.dislikedPlaces.push(this.places[this.selectedIndex])
    this.selectedIndex++;
  }
}
