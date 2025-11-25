import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { InfiniteScrollDirective } from '../../../../shared/directives/infinite-scroll.directive';
import { HttpClient } from '@angular/common/http';
interface User {
  name: { title: string; first: string; last: string };
  email: string;
  picture: { thumbnail: string };
}
@Component({
  selector: 'app-virtual-scroll2',
  imports: [CommonModule,InfiniteScrollDirective],
  templateUrl: './virtual-scroll2.html',
  styleUrl: './virtual-scroll2.scss',
})
export class VirtualScroll2 {
  allUsers: User[] = [];
  ApiData: User[] = [];
  chunkSize = 20;
  loading = false;
constructor(private http: HttpClient) {}
 loadUsers() {
    this.loading = true;
    this.http.get<any>('https://randomuser.me/api/?results=1000').subscribe({
      next: (res) => {
        this.allUsers = res.results;
        this.ApiData = this.allUsers.slice(0, this.chunkSize);
        this.loading = false;
      },
      error: () => (this.loading = false)
    });
  }

  loadMore() {
    if (this.loading) return;

    this.loading = true;
    setTimeout(() => {
      const currentLength = this.ApiData.length;
      const nextChunk = this.allUsers.slice(currentLength, currentLength + this.chunkSize);
      this.ApiData = [...this.ApiData, ...nextChunk];
      this.loading = false;
    }, 500); // simulate delay
  }
trackByIndex(){

}
}
