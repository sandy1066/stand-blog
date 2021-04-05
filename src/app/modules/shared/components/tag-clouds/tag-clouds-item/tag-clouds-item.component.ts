import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tag-clouds-item',
  templateUrl: './tag-clouds-item.component.html',
  styleUrls: ['./tag-clouds-item.component.css']
})
export class TagCloudsItemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() name:string;

}
