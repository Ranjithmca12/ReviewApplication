import { Component,Injectable,Input,OnChanges,NgZone } from '@angular/core';
import { Http, Response } from '@angular/http';
import { NgFor }    from '@angular/common';
import { Observable }     from 'rxjs/Observable';
import { EmitterService } from '../service/emitter.service';
import { Checklist } from '../model/Checklist';
@Component({
    selector : 'tableUtil',
    templateUrl:'app/utility/tableUtil.component.html'
})

export class tableUtil implements OnChanges{
  //  checkListArray:Checklist[];
   @Input() checkListArray: Array<Checklist>;
     
    constructor(private _zone:NgZone,) {
        this.checkListArray = new Array<Checklist>();
    }
   
    // checkListArray = [
    //         new Checklist('1','John1','Doe','pass'), 
    //         new Checklist('2','John2','Doe','pass'),
    //          new Checklist('3','John3','Doe','pass'),
    //           new Checklist('4','John4','Doe','pass')
    //     ];
    @Input() listId:string;
   ngOnChanges(){
       EmitterService.get(this.listId).subscribe((checklists:Checklist[]) => {
        this._zone.run(() => this.checkListArray = checklists)
        });
   }
   
}
    
    
