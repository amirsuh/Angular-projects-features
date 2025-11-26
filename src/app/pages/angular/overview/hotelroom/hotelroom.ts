import { Component, Input, OnInit } from '@angular/core';
import { HotelDetail } from '../overview';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hotelroom',
  imports: [CommonModule, FormsModule],
  templateUrl: './hotelroom.html',
  styleUrl: './hotelroom.scss',
})
export class Hotelroom implements OnInit {
  @Input() hotelRoom: HotelDetail[] = [];
  allHotels: HotelDetail[] = []; // ← keep original data
  roomtype = '';
  city = '';
  constructor() {
    console.log(this.hotelRoom);
  }
  ngOnInit(): void {
    console.log(this.hotelRoom);
    this.allHotels = [...this.hotelRoom];
  }
  searchForm() {
    let c = this.city.toLowerCase().trim();
    let r = this.roomtype.toLowerCase().trim();
    this.hotelRoom = this.allHotels.filter((hotels: HotelDetail) => {
      const matchesCity = !c || hotels.city.toLowerCase().includes(c);
      const matchesRoom = !r || hotels.roomType.toLowerCase().includes(r);
      return matchesCity && matchesRoom;

      const cityMatch = c === '' || hotels.city.toLowerCase().includes(c);
      const roomMatch = r === '' || hotels.roomType.toLowerCase().includes(r);
      return cityMatch && roomMatch;
      return hotels.city.toLowerCase().includes(c) && hotels.roomType.toLowerCase().includes(r);
    });
  }
}
