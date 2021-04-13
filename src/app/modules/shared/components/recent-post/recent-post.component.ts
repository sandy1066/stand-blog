import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/user-service.service';

@Component({
  selector: 'app-recent-post',
  templateUrl: './recent-post.component.html',
  styleUrls: ['./recent-post.component.css']
})
export class RecentPostComponent implements OnInit {

  constructor(private user:UserServiceService) { }

  public posts:any=[];
  public posts1:any=[];
  ngOnInit(): void {
    this.user.getPosts().subscribe((posts: any) => {
      console.log(posts) 
      this.posts=posts;
      this.posts1=posts;
      })
  }

  recentTitle: any;
  searchFunction(){
    if(this.recentTitle == ""){
      this.ngOnInit();
    }
    else{
      this.posts1 = this.posts1.filter((res:any) => {
        return res.recentPosts.toLocaleLowerCase().match(this.recentTitle.toLocaleLowerCase());
      })
      console.log(this.recentTitle)
    }
  }

}
