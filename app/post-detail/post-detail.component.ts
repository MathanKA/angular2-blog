import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
    moduleId: module.id,
    selector: 'post-detail',
    templateUrl: './post-detail.component.html',
    styleUrls: ['post-detail.component.css']
})

export class PostDetailComponent implements OnInit {
    post: Post;

    constructor (
        private postService: PostService,
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.postService.getPost(+params['id']))
      .subscribe(post => this.post = post);
  }
}