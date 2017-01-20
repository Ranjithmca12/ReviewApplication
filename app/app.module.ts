import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule }    from '@angular/forms';
import { AppComponent } from './app.component';
import { reviewMain } from './review/review.component';
import { tableUtil } from './utility/tableUtil.component';

import { EmitterService } from './service/emitter.service';
import { ReviewService } from './service/review.service'
@NgModule({
  imports: [ BrowserModule,HttpModule, FormsModule,JsonpModule ],
  declarations:[AppComponent ,reviewMain,tableUtil],
  bootstrap:[AppComponent,reviewMain,tableUtil ],
  providers: [EmitterService,ReviewService],
})
export class AppModule { };