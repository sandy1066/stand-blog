import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-brief-description',
  templateUrl: './brief-description.component.html',
  styleUrls: ['./brief-description.component.css']
})
export class BriefDescriptionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() heading:string;
  @Input() text:string;
 
}
