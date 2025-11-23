import { Routes } from '@angular/router';
import { Login } from './pages/auth/login/login';
import { Layout } from './pages/layout/layout/layout';
import { Dashboard } from './pages/dashboard/dashboard';
import { authGuard } from './core/guards/auth-guard';

export const routes: Routes = [
{
    path: '',
    component: Layout,
    canActivateChild: [authGuard],
    children: [
      { path: '', component: Dashboard },
      { path: 'dashboard', component: Dashboard },

    ]
  },
  // Basic CanActivate - requires authentication
  // {
  //   path: 'dashboard',
  //   component: DashboardComponent,
  //   canActivate: [authGuard]
  // },
  // Multiple CanActivate guards - requires authentication AND admin role
  // {
  //   path: 'admin',
  //   component: AdminComponent,
  //   canActivate: [authGuard, adminGuard]
  // },
  // CanActivate + CanDeactivate - protected route with unsaved changes check
  // {
  //   path: 'profile',
  //   component: ProfileComponent,
  //   canActivate: [authGuard],
  //   canDeactivate: [canDeactivateGuard]
  // },
  {
    path: 'login',
    loadComponent: () => import('./pages/auth/login/login').then(m => m.Login)
  },
   {
    path: 'sign-up',
    loadComponent: () => import('./pages/auth/sign-up/sign-up').then(m => m.SignUp)
  }
  ,
   {
    path: 'forgot-password',
    loadComponent: () => import('./pages/auth/forgot-password/forgot-password').then(m => m.ForgotPassword)
  },
  { path: '**', redirectTo: '' }
];
