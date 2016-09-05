import { Injectable } from '@angular/core';
import { Configuration } from './app.constants';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class CourseService {

    private actionUrl: string;
    private headers: Headers;

    constructor( private _http: Http, private _configuration: Configuration ) {

        this.actionUrl = _configuration.ServerWithApiUrl + 'courses';

        this.headers = new Headers();
        this.headers.append( 'Content-Type', 'application/json' );
        this.headers.append( 'Accept', 'application/json' );
    }
    
    public getCourses(): Observable<string[]> {
        return this._http.get(this.actionUrl)
        .map((r: Response) => r.json() as string[]);
    }
    

}