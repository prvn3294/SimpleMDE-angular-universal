import { Component, OnInit , ElementRef} from '@angular/core';
import { ActivatedRoute,Router , NavigationEnd } from '@angular/router';
import { BlogService }  from '../services/blog.service';
import { MetaTagService } from '../services/meta.service'

@Component({
  selector: 'app-singlepost',
  templateUrl: './singlepost.component.html',
  styleUrls: ['./singlepost.component.css']
})
export class SinglepostComponent implements OnInit {
  public id:string;  
  public user:any
  public isvalid:boolean = false

  constructor(private activated_route: ActivatedRoute,
  private blogservice : BlogService ,   
  private _router:Router,    
  private metaservice : MetaTagService ,      
  ) { }

  ngOnInit() {
    this.activated_route.params.subscribe(params =>{      
      this.id =  params['id']       
      this.blogservice.getpost(this.id).subscribe(dummyuser => {
          this.user = dummyuser.data                           
          console.log(this.user)          

          this.metaservice.settags(this.user.first_name , this.user.last_name)
          this.isvalid = true
      })            
    })          
  }
}