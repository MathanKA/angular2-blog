import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
// Router Module
import { AppRoutingModule } from './app.routing';
// Components
import { AppComponent }  from './app.component';
import { HomeComponent } from './home/home.component';
import { InMemoryDataService }  from './in-memory-data.service';
import { PostService } from './post.service';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostListsComponent } from './post-lists/post-lists.component';

@NgModule({
  imports:      [ BrowserModule, AppRoutingModule, HttpModule, InMemoryWebApiModule.forRoot(InMemoryDataService) ],
  declarations: [ AppComponent, HomeComponent, PostDetailComponent, PostListsComponent ],
  providers: [PostService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
