import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Auth } from '../services/auth/auth';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authservice = inject(Auth);

  if (authservice.isAuthenticatedUser()) {
    return true;
  } else {
    router.navigateByUrl('/login');
    return false;
  }
};
