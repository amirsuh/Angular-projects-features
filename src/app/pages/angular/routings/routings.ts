import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
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
constructor(private fb:FormBuilder){
  this.userDetailsForm = this.fb.group({
    name:new FormControl(''),
     email:new FormControl('')
  })
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
