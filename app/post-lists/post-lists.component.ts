import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Post }                from '../post';
import { PostService }         from '../post.service';
@Component({
  moduleId: module.id,
  selector: 'post-lists',
  templateUrl: './post-lists.component.html',
  styleUrls: [ './post-lists.component.css' ]
})
export class PostListsComponent implements OnInit {
  postLists: Post[];
  selectedPost: Post;
  constructor(
    private postService: PostService,
    private router: Router) { }
  getPosts(): void {
    this.postService
        .getPosts()
        .then(postLists => this.postLists = postLists);
  }
  ngOnInit(): void {
    this.getPosts();
  }
  onSelect(post: Post): void {
    this.selectedPost = post;
  }
  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedPost.id]);
  }
}
