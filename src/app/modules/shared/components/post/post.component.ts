import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() indexElement:number;
  @Output() sendIndex = new EventEmitter<any>();

  deletePost(indexElement:any) {
    this.sendIndex.emit(this.indexElement)
  }

}
