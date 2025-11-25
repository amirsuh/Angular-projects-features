import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Mockdataservice, UserWithFlag } from '../../../../core/services/mock/mockdataservice';
import { CommonModule } from '@angular/common';
import { FormatNamePipe } from "../../../../shared/pipes/format-name.pipe";

@Component({
  selector: 'app-structural-dir',
  imports: [CommonModule, FormatNamePipe],
  templateUrl: './structural-dir.html',
  styleUrl: './structural-dir.scss',
})
export class StructuralDir implements OnInit{
apiData:any
visibleItems:any;
loading=false
constructor(private mockDataService:Mockdataservice){}

ngOnInit(){

this.mockDataService.getMockeddata().subscribe({
      next: (data) => {
        console.log(data)
        this.apiData = data;
      },
      error: (err) => {
        console.error('Error fetching mock data', err);
      }
    });
  }
  trackByIndex(index: number, item: UserWithFlag): number {
    return item.index;
  }
  loadMore() {
    if (this.loading) return;

    this.loading = true;
    setTimeout(() => {
      const currentLength = this.apiData.length;
      //const nextChunk = this.allUsers.slice(currentLength, currentLength + this.chunkSize);
      //this.apiData = [...this.apiData, ...nextChunk];
      this.loading = false;
    }, 500); // simulate delay
  }
}

