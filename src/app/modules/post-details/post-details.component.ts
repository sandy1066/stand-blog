import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/user-service.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  public posts:any=[];
  recentPosts: any;
  constructor(private user:UserServiceService) {}

  ngOnInit(): void {
    this.user.getPosts().subscribe((posts: any) => {
      console.log(posts) 
      this.posts=posts
      })
  }

  searchFunction(){
    if(this.recentPosts == ""){
      this.ngOnInit();
    }
    else{
      this.posts = this.posts.filter((res:any) => {
        return res.recentPosts.toLocaleLowerCase().match(this.recentPosts.toLocaleLowerCase());
      })
    }
  }
}
