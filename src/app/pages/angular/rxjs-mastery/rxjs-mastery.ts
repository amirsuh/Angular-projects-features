import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import {
  combineLatest,
  combineLatestWith,
  debounceTime,
  delay,
  distinctUntilChanged,
  filter,
  forkJoin,
  from,
  interval,
  of,
  Subject,
  switchMap,
  take,
  takeUntil,
  timeout,
} from 'rxjs';

@Component({
  selector: 'app-rxjs-mastery',
  imports: [ReactiveFormsModule],
  templateUrl: './rxjs-mastery.html',
  styleUrl: './rxjs-mastery.scss',
})
export class RxjsMastery implements OnInit {
  searchControl: FormControl = new FormControl('');
  stateFilter: FormControl = new FormControl('');
  cityFilter: FormControl = new FormControl('');
  cityList$ = of(['Pune', 'Nagpur', 'Mumbai', 'Thane']);
  mhCityList$ = from(['Pune', 'Nagpur', 'Mumbai', 'Thane']);
  timeInterval$ = interval(10);
  stopInterval$ = new Subject<void>();
  timeTimeout$ = timeout(1000);
  timerInterval = interval(1000);
  mhCityArray = of(['Pune', 'Nagpur', 'Mumbai', 'Thane']);
  mpCityArray = of(['Bhopal', 'Indore']);

  constructor(private http: HttpClient) {
    // this.searchControl.valueChanges
    //   .pipe(
    //     debounceTime(10),
    //     distinctUntilChanged(),
    //     filter((search: string) => search.trim().length > 3),
    //     switchMap((res: string) =>
    //       this.http.get('https://jsonplaceholder.typicode.com/users?search=' + res)
    //     )
    //   )
    //   .subscribe((response: any) => {
    //     console.log(response);
    //   });

    const searchUrl = 'https://jsonplaceholder.typicode.com/users';
    this.searchControl.valueChanges
      .pipe(switchMap((res: string) =>
        this.http.get(searchUrl + '?search=' + res)))
      .subscribe((response: any) => {
        console.log(response);
      });


  // this.searchControl.valueChanges
  //   .pipe(
  //     //debounceTime(300),  // wait 300ms after user stops typing
  //     switchMap((res: string) => this.http.get(`${searchUrl}?search=${res}`))
  //   )
  //   .subscribe((response: any) => {
  //     console.log(response);
  //   });

    this.cityList$.subscribe((res: string[]) => {
      console.log(res);
    });
    this.mhCityList$.subscribe((res) => {
      console.log(res);
    });

    // this.timeInterval$.subscribe((res:Number)=>{
    //   console.log(res)
    // })
    this.timeInterval$.pipe(takeUntil(this.stopInterval$)).subscribe((res) => {
      console.log(res);
      if (res == 5) {
        this.stopInterval$.next();
      }
    });
    this.cityList$.pipe(delay(1000)).subscribe(() => console.log('Step 1'));

    this.timerInterval.pipe(take(3)).subscribe((timer: number) => {
      console.log(timer);
    });

    forkJoin([this.mhCityArray, this.mpCityArray]).subscribe((result: any) => {
      console.log(result[0]);
      console.log(result[1]);
    });
  }

  ngOnInit() {
    const stateFilter$ = this.stateFilter.valueChanges;
    const cityFilter$ = this.cityFilter.valueChanges;
    combineLatest([stateFilter$, cityFilter$]).subscribe((res: any) => {
      console.log(res);
      //this will execute when both dropdown has value
    });
    stateFilter$.pipe(combineLatestWith(cityFilter$)).subscribe((result: any) => {
      console.log(result);
      //this will execute when both dropdown has value
    });

    const searchUrl = 'https://jsonplaceholder.typicode.com/users';
    this.http
      .get(searchUrl)
      .pipe(switchMap((res: any) => this.http.get(searchUrl + '/' + res[0].id)))
      .subscribe((res: any) => {
        debugger;
      });
  }

  //   getUsers() {
  //   this.producSrv.getUsers().pipe(
  //     mergeMap((res:any)=> this.producSrv.getUserById(res[0].id))
  //   ).subscribe((result)=>{

  //   })
  // }
}
