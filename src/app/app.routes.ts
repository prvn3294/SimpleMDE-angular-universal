import { Routes , RouterModule } from '@angular/router'
import { SinglepostComponent} from './singlepost/singlepost.component'
import { PostsComponent } from './posts/posts.component';

const appRoutes : Routes = [  
    {path : 'posts' , component : PostsComponent },  
    {path : ':id' , component : SinglepostComponent },
    {path : '' , redirectTo: '/posts' , pathMatch :'full' },  
]

export const routing = RouterModule.forRoot(appRoutes)