import { Component, OnInit , } from '@angular/core';
import { Http } from '@angular/http';
import { BlogService } from '../services/blog.service'
import { MetaTagService } from '../services/meta.service'

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
   
 constructor( private service: BlogService , private meta:MetaTagService ) { }
 public users = []

  ngOnInit() 
  {   
    this.service.getposts().subscribe(dummydata => {
      this.users = dummydata.data
      this.meta.settags('Users Data List' , 'This is dummy description')
    })
         
   }
}
