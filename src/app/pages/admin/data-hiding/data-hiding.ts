import { AfterViewInit, Component } from '@angular/core';
import { Master } from '../../../core/services/master';

@Component({
  selector: 'app-data-hiding',
  imports: [],
  templateUrl: './data-hiding.html',
  styleUrl: './data-hiding.scss',
})
export class DataHiding implements AfterViewInit{
    currcounter:number=0;

  constructor(private master:Master){ }

  ngAfterViewInit(): void {
    console.log("Data Hiding Component Loaded");
    this.master.$currentCounterSubject.subscribe(res=>{
      this.currcounter=res;
    })
        this.master.$currentCounterBehaiourSubject.subscribe(res=>{
    this.currcounter=res;
  });
  }

}
