import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { AboutUsComponent } from './modules/about-us/about-us.component';
import { ContactUsComponent } from './modules/contact-us/contact-us.component';
import { BlogEntriesComponent } from './modules/blog-entries/blog-entries.component';
import { PostDetailsComponent } from './modules/post-details/post-details.component';
import { PageNotFoundComponent } from './modules/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "aboutus", component: AboutUsComponent },
  { path: "blogentries", component: BlogEntriesComponent },
  { path: "postdetails", component: PostDetailsComponent },
  { path: "contactus", component: ContactUsComponent },
  { path: "**", component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
