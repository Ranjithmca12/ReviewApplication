import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Checklist }  from '../model/Checklist';
import {Observable} from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ReviewService {
     // Resolve HTTP using the constructor
     constructor (private http: Http) {}
    private reviewsUrl = 'http://localhost:3000/app/assets/data/'; 
     
     // Fetch all existing comments
     getReviewChecklist(reviewType:string) : Observable<Checklist[]>{
         // ...using get request
         return this.http.get(this.reviewsUrl+reviewType+'.json')
                        // ...and calling .json() on the response to return data
                         .map((res:Response) => res.json())
                         //...errors if any
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
        
     }

}