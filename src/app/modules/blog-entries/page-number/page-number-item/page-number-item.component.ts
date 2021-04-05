import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-page-number-item',
  templateUrl: './page-number-item.component.html',
  styleUrls: ['./page-number-item.component.css']
})
export class PageNumberItemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() num:string;

}
