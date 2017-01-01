import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Post } from './post';

@Injectable()

export class PostService {
    private headers = new Headers({'Content-t=Type': 'application/json'});
    private postsUrl = 'api/posts';

    constructor(private http: Http){
        console.log('Service started');
    }

    getPosts(): Promise<Post[]> {
        return this.http.get(this.postsUrl)
                    .toPromise()
                    .then(response => response.json().data as Post[])
                    .catch(this.handleError);
    }

    getPost(id: number): Promise<Post> {
        const url = `${this.postsUrl}/${id}`;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json().data as Post)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}