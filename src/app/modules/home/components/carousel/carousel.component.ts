import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() title: string;
  @Input() message: string;
  @Input() user: string;
  @Input() date: string;
  @Input() comments: string;
  // @Input() image: string;

}
