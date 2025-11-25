import { Component, OnInit } from '@angular/core';
import { Mockdataservice } from '../../../../core/services/mock/mockdataservice';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { InfiniteScrollDirective } from '../../../../shared/directives/infinite-scroll.directive';
interface User {
  name: { title: string; first: string; last: string };
  email: string;
  picture: { thumbnail: string };
}
@Component({
  selector: 'app-virtual-scroll',
  imports: [CommonModule,InfiniteScrollDirective],
  templateUrl: './virtual-scroll.html',
  styleUrl: './virtual-scroll.scss',
})
export class VirtualScroll implements OnInit {
  allUsers: User[] = [];
  displayedUsers: User[] = [];
  chunkSize = 20;
  loading = false;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.loading = true;
    this.http.get<any>('https://randomuser.me/api/?results=1000').subscribe({
      next: (res) => {
        this.allUsers = res.results;
        this.displayedUsers = this.allUsers.slice(0, this.chunkSize);
        this.loading = false;
      },
      error: () => (this.loading = false)
    });
  }

  loadMore() {
    if (this.loading) return;

    this.loading = true;
    setTimeout(() => {
      const currentLength = this.displayedUsers.length;
      const nextChunk = this.allUsers.slice(currentLength, currentLength + this.chunkSize);
      this.displayedUsers = [...this.displayedUsers, ...nextChunk];
      this.loading = false;
    }, 500); // simulate delay
  }






  // users: any[] = [];
  // allUsers: any[] = [];
  // page = 0;
  // pageSize = 20;
  // constructor(private mockService: Mockdataservice) {}

  // ngOnInit() {
  //   this.mockService.fetchUsers().subscribe((res) => {
  //     this.allUsers = res.results;
  //     this.loadMore();
  //   });
  // }
  // loadMore(): void {
  //   const nextUsers = this.allUsers.slice(
  //     this.page * this.pageSize,
  //     (this.page + 1) * this.pageSize
  //   );
  //   this.users = [...this.users, ...nextUsers];
  //   this.page++;
  // }
}
