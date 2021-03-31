import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './modules/about-us/about-us.component';
import { ContactUsComponent } from './modules/contact-us/contact-us.component';
import { BlogEntriesComponent } from './modules/blog-entries/blog-entries.component';
import { HomeComponent } from './modules/home/home.component';
import { PostDetailsComponent } from './modules/post-details/post-details.component';
import { AboutUsDetailComponent } from './modules/about-us/components/about-us-detail/about-us-detail.component';
import { BriefDescriptionComponent } from './modules/about-us/components/brief-description/brief-description.component';
import { AddressGeoMapComponent } from './modules/contact-us/components/address-geo-map/address-geo-map.component';
import { ContactInformationComponent } from './modules/contact-us/components/contact-information/contact-information.component';
import { SendUsMessageComponent } from './modules/contact-us/components/send-us-message/send-us-message.component';
import { HeaderComponent } from './modules/core/components/header/header.component';
import { FooterComponent } from './modules/core/components/footer/footer.component';
import { CarouselComponent } from './modules/home/components/carousel/carousel.component';
import { CommentsComponent } from './modules/post-details/components/comments/comments.component';
import { YourCommentComponent } from './modules/post-details/components/your-comment/your-comment.component';
import { CategoriesComponent } from './modules/shared/components/categories/categories.component';
import { ModuleBannerComponent } from './modules/shared/components/module-banner/module-banner.component';
import { PostComponent } from './modules/shared/components/post/post.component';
import { PostSearchComponent } from './modules/shared/components/post-search/post-search.component';
import { RecentPostComponent } from './modules/shared/components/recent-post/recent-post.component';
import { TagCloudsComponent } from './modules/shared/components/tag-clouds/tag-clouds.component';
import { TemplateBannerComponent } from './modules/shared/components/template-banner/template-banner.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    ContactUsComponent,
    BlogEntriesComponent,
    HomeComponent,
    PostDetailsComponent,
    AboutUsDetailComponent,
    BriefDescriptionComponent,
    AddressGeoMapComponent,
    ContactInformationComponent,
    SendUsMessageComponent,
    HeaderComponent,
    FooterComponent,
    CarouselComponent,
    CommentsComponent,
    YourCommentComponent,
    CategoriesComponent,
    ModuleBannerComponent,
    PostComponent,
    PostSearchComponent,
    RecentPostComponent,
    TagCloudsComponent,
    TemplateBannerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
