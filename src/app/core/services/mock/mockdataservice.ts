import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, tap,map, firstValueFrom } from 'rxjs';
import { Course } from '../../../pages/angular/signals-interactive/signals-interactive';
import {environment} from "../../../../environments/environment";


export interface RandomUserResult {
  results: any[];  // you can make a more specific interface based on API response
  info: any;
}

export interface UserWithFlag {
  user: any;
  selected: boolean;  // example flag
  index: number;       // store index for trackBy
}

@Injectable({
  providedIn: 'root',
})
export class Mockdataservice {
  http = inject(HttpClient)
  users: any[] = [];
  allUsers: any[] = [];
  private apiUrl = 'https://randomuser.me/api/?results=1000';
  env = environment;

  getMockeddata(): Observable<UserWithFlag[]>{
    return this.http.get<RandomUserResult>(this.apiUrl).pipe(
      tap((res)=>{
        console.log('Fetched data count:', res.results.length);
      }),map((response)=>{
           return response.results.map((user,id)=>{
            return {
              user,
              selected:false,
              index:id
            } as UserWithFlag
           })
      })
    )
  }


  fetchUsers():Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  //   async loadAllCourses():Promise<Course[]> {
  //   const courses$ =
  //     this.http.get<GetCoursesResponse>(`/courses`);
  //   const response = await firstValueFrom(courses$);
  //   return response.courses;
  // }

  loadAllCourses(): Promise<Course[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const courses: Course[] = [
          {
            id: '1',
            title: 'Intro to Angular',
            longDescription: 'A beginner course on Angular',
            seqNo: 1,
            iconUrl: 'path-to-icon',
            price: 100,
            uploadedImageUrl: 'image-url',
            courseListIcon: 'icon-url',
            category: 'BEGINNER',
            lessonsCount: 10,
          },
          // Add more mock courses here
        ];
        resolve(courses);
      }, 1000);
    });
  }
}
