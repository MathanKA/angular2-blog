import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PostDetailComponent }  from './post-detail/post-detail.component';
import { PostListsComponent } from './post-lists/post-lists.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    { path: 'detail/:id', component: PostDetailComponent },
    {path: 'posts', component: PostListsComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}
