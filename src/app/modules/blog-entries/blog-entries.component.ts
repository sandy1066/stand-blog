import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/user-service.service';

@Component({
  selector: 'app-blog-entries',
  templateUrl: './blog-entries.component.html',
  styleUrls: ['./blog-entries.component.css']
})
export class BlogEntriesComponent implements OnInit {

  public posts:any=[];
  constructor(private user:UserServiceService) {}

  ngOnInit(): void {
    this.user.getPosts().subscribe((posts: any) => {
      console.log(posts) 
      this.posts=posts
      })
  }

  recieveIndex(indexElement:any) {
    this.posts.splice(indexElement,1)
    console.log(indexElement)
  }

}
