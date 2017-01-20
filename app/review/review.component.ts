import { Component } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import { tableUtil } from '../utility/tableUtil.component';
import { Checklist } from '../model/Checklist';
import { ReviewService } from '../service/review.service';
import { EmitterService } from '../service/emitter.service';
@Component({
selector : 'rt-main',
templateUrl :'app/review/review.component.html'
})
export class reviewMain{
  reviewTypes:any;
  constructor(private reviewService:ReviewService){
     this.reviewTypes={type:'uiChecklist'}
  }
  private listId="REVIEW_COMPONENT_LIST"
  private checkListArray:Checklist[];
  uitag : string ='UI Select';
  checkElementList=function(reviewType:string){
    let reviewOperation:Observable<Checklist[]>;
    reviewOperation=this.reviewService.getReviewChecklist(reviewType)
    reviewOperation.subscribe( (checklists:Checklist[]) => {
                                    EmitterService.get(this.listId).emit(checklists);
                                }, 
                                (err:any) => {
                                    // Log errors if any
                                    console.log(err);
                                });
  }
}