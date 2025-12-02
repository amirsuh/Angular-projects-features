import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Master {
  currenCounter:number = 0;
  $currentCounterSubject: Subject<number>= new Subject<number>;
  $currentCounterBehaiourSubject:BehaviorSubject<number>=new BehaviorSubject<number>(0);

  constructor() {}

}
