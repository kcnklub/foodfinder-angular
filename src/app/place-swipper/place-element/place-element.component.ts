import { Component, Input, OnInit } from '@angular/core';
import { Place } from '../place.model';

@Component({
  selector: 'app-place-element',
  templateUrl: './place-element.component.html',
  styleUrls: ['./place-element.component.css']
})
export class PlaceElementComponent implements OnInit {

  @Input()
  place: Place;

  constructor() { }

  ngOnInit(): void {
  }

}
