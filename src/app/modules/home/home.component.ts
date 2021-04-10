import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/user-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public posts:any=[];
  constructor(private user:UserServiceService) {}

  ngOnInit(): void {
      this.user.getPosts().subscribe((posts: any) => {
        console.log(posts) 
        this.posts=posts
        })
  }

}
