import { Injectable } from '@angular/core'
import { Http, Response, Headers, RequestOptions } from '@angular/http'
import { Observable } from 'rxjs/Rx'

import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'


@Injectable()
export class BlogService {

    constructor(private http: Http) {

    }

    getposts(): Observable<any> {
        return this.http.get('https://reqres.in/api/users')
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    getpost(id: string): Observable<any> {
        return this.http.get('https://reqres.in/api/users/' + id)
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }
    
}