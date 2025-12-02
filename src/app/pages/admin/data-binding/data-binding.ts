import { Component } from '@angular/core';
import { Master } from '../../../core/services/master';

@Component({
  selector: 'app-data-binding',
  imports: [],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.scss',
})
export class DataBinding {

currcounter:number=0;
  constructor(private master:Master){
    this.master.$currentCounterSubject.subscribe(res=>{
      this.currcounter=res;
    })
        this.master.$currentCounterBehaiourSubject.subscribe(res=>{
    this.currcounter=res;
  });
   }

   callafunction(){
    this.currcounter=this.master.currenCounter;

   }
}
