import { Component } from '@angular/core';
import { Menuconfig } from '../../core/services/menuconfig';
import { MenuItem } from '../../shared/interfaces/menus.interface';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-dashboard',
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
constructor(){

}
ngOnInit() {

//     this.menuConfigService.getMenus().subscribe(res=>{
//     });
// fetch('assets/menus-config.json')   // ❗ no leading slash
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('Config file not found');
//     }
//     return response.json();
//   })
//   .then(config => {
//     console.log('Loaded config:', config);
//   })
//   .catch(err => console.error(err));
//   }

}
}
