import { Injectable } from '@angular/core';
import { MenuItem } from '../../shared/interfaces/menus.interface';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class Menuconfig {

private menuItems: MenuItem[] = [];

constructor(private http: HttpClient){}
  // loadMenuConfig(): Promise<MenuItem[]> {
  //   // Use firstValueFrom to convert the Observable to a Promise
  //   return firstValueFrom(this.http.get<MenuItem[]>('assets/menus-config.json'))
  //     .then(data => {
  //       this.menuItems = data;
  //       return data;
  //     });
  // }
  getMenus(){
    return this.http.get('assets/menus-config.json')
  }

  getMenuItems(): MenuItem[] {
    return this.menuItems;
  }
}
