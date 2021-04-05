import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recent-post-item',
  templateUrl: './recent-post-item.component.html',
  styleUrls: ['./recent-post-item.component.css']
})
export class RecentPostItemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() title:string;
  @Input() date:string;

}
