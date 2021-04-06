import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/user-service.service';

@Component({
  selector: 'app-blog-entries',
  templateUrl: './blog-entries.component.html',
  styleUrls: ['./blog-entries.component.css']
})
export class BlogEntriesComponent implements OnInit {

  data:any=[]
  constructor(private user:UserServiceService) {}

  ngOnInit(): void {
    this.user.getData().subscribe((data1: any | undefined) => {console.log(data1) 
      this.data=data1
      })
  }

}
