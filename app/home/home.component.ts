import { Component, OnInit} from '@angular/core';

import { Post } from '../post';
import { PostService } from '../post.service';

@Component ({
    moduleId: module.id,
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
    listPosts: Post[] = [];

    constructor(private postService: PostService){}

    ngOnInit(): void {
        this. postService.getPosts()
        .then(listPosts => this.listPosts = listPosts);
    }

}