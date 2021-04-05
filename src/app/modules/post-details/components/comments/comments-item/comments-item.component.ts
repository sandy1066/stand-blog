import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-comments-item',
  templateUrl: './comments-item.component.html',
  styleUrls: ['./comments-item.component.css']
})
export class CommentsItemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() image:string;
  @Input() name:string;
  @Input() date:string;
  @Input() comment:string;

}
