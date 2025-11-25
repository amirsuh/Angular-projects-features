import { inject } from '@angular/core';
import { CanMatchFn, Router } from '@angular/router';

export const canMatchGuard: CanMatchFn = (route, segments) => {
  const router = inject(Router)
  const isLoggedIn =localStorage.getItem('isLoggedIn')
  if(isLoggedIn === 'true'){
  return true; //Allow
  }else{
    alert('Access denied! Please login first')
    router.navigateByUrl('/login');
    return false //deny
  }
};
