import { Injectable } from '@angular/core'
import { Router, NavigationEnd } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

@Injectable()
export class MetaTagService {
    constructor(private _router: Router,private _meta: Meta, private _title: Title) {

    }
    
    settags(title , description ){                                           
                this._title.setTitle(title);
                this._meta.updateTag({ name: 'description', content: description });                                        
    }         
}