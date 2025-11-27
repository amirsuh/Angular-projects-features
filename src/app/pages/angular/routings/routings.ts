import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ChildActivationEnd, ChildActivationStart, NavigationCancel, NavigationEnd, NavigationError, NavigationStart, RouteConfigLoadEnd, RouteConfigLoadStart, Router, RouterLink, RouterOutlet, RoutesRecognized } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Home } from "../../product/home/home";

@Component({
  selector: 'app-routings',
  imports: [ReactiveFormsModule, Home],
  templateUrl: './routings.html',
  styleUrl: './routings.scss',
})
export class Routings {
userDetailsForm!:FormGroup
isSaved = false;
isLoading: boolean = false;
errorMessage: string = '';
constructor(private fb:FormBuilder,private router: Router){
  this.userDetailsForm = this.fb.group({
    name:new FormControl(''),
     email:new FormControl('')
  })

  router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.isLoading = true;
      } else if (event instanceof RoutesRecognized) {
        console.log('RoutesRecognized event:', event);
      } else if (event instanceof RouteConfigLoadStart) {
        console.log('RouteConfigLoadStart event:', event);
      } else if (event instanceof RouteConfigLoadEnd) {
        console.log('RouteConfigLoadEnd event:', event);
      } else if (event instanceof NavigationEnd) {
        this.isLoading = false;
      } else if (event instanceof NavigationCancel) {
        this.isLoading = false;
        this.errorMessage = 'Navigation cancelled';
      } else if (event instanceof NavigationError) {
        this.isLoading = false;
        this.errorMessage = 'Navigation error';
      } else if (event instanceof ChildActivationStart) {
        const childRoute = event?.snapshot?.routeConfig?.path;
        console.log(`ChildActivationStart event for ${childRoute}`);
        // Load data specific to the child component here
      } else if (event instanceof ChildActivationEnd) {
        console.log('ChildActivationEnd event:', event);
        // Perform any necessary cleanup tasks here
      }
    });
}
onSubmit(){
this.isSaved =true
}
canDeactivate():Observable<boolean>{
 if(!this.isSaved){
  let msg = confirm('are you really want to exit')
  return  of(msg)
 }else{
  return of(true)
 }
}
}
