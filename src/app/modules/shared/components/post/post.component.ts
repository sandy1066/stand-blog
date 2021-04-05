import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() image:string;
  @Input() title:string;
  @Input() heading:string;
  @Input() user:string;
  @Input() date:string;
  @Input() comments:string;
  @Input() description:string;
  @Input() tag1:string;
  @Input() tag2:string;
  @Input() tag3:string;
  @Input() tag4:string;

}
