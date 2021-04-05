import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-module-banner',
  templateUrl: './module-banner.component.html',
  styleUrls: ['./module-banner.component.css']
})
export class ModuleBannerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() title:string;
  @Input() heading:string;

}
