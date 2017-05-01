import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PostsComponent } from './posts/posts.component';
import { routing } from './app.routes';

import { BlogService } from './services/blog.service';
import {Ng2PaginationModule} from 'ng2-pagination';

import { SinglepostComponent } from './singlepost/singlepost.component';

import { AppComponent } from './app.component';

import { MetaTagService } from './services/meta.service'



@NgModule({
  declarations: [
    AppComponent,          
    PostsComponent,
    SinglepostComponent,        
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'universal' }),
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    routing,
    Ng2PaginationModule,
  ],
  providers: [BlogService , MetaTagService],
  bootstrap: [AppComponent]
})
export class AppModule { }
