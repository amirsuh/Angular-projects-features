import { Routes } from '@angular/router';
import { Login } from './pages/auth/login/login';
import { Layout } from './pages/layout/layout/layout';
import { Dashboard } from './pages/dashboard/dashboard';
import { authGuard } from './core/guards/auth-guard';
import { Overview } from './pages/angular/overview/overview';
import { Typescript } from './pages/angular/typescript/typescript';
import { CompTemplate } from './pages/angular/comp-template/comp-template';
import { Standalonecomp } from './pages/angular/standalonecomp/standalonecomp';
import { SignalsInteractive } from './pages/angular/signals-interactive/signals-interactive';
import { Routings } from './pages/angular/routings/routings';
import { myDeactivateGuard } from './core/guards/deactivate-guard/my-deactivate-guard';
import { canMatchGuard } from './core/guards/routeguard/can-match-guard';
import { About } from './pages/about/about/about';
import { Rating } from './pages/about/rating/rating';
import { Feedback } from './pages/about/feedback/feedback';
import { Product } from './pages/product/product/product';
import { Productoffer } from './pages/product/productoffer/productoffer';
import { Productupdate } from './pages/product/productupdate/productupdate';
import { Home } from './pages/product/home/home';

export const routes: Routes = [
  {
    path: '',
    component: Layout,
    canActivateChild: [authGuard],
    // canMatch:[canMatchGuard],
    children: [
      { path: '', component: Dashboard },
      { path: 'dashboard', component: Dashboard },
      { path: 'angular/overview', component: Overview },
      { path: 'angular/typescript', component: Typescript },
      { path: 'angular/components', component: CompTemplate },
      { path: 'angular/standalone', component: Standalonecomp },
      { path: 'angular/signals', component: SignalsInteractive },
      { path: 'angular/routing', component: Routings, canDeactivate: [myDeactivateGuard] },
      {
    path: 'about',
    component: About,
    children: [
      { path: 'rating', outlet: 'rate', component: Rating },
      { path: 'feedback', outlet: 'feed', component: Feedback },
    ],
  },
  { path: 'home', component: Home },
  {
    path: 'product/:id', component: Product,
    children: [
      {path: '', redirectTo:'updates', pathMatch:'full'},
      { path: 'offers', component: Productoffer },
      { path: 'updates', component: Productupdate }
    ]
  },
    ],
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
    loadComponent: () => import('./pages/auth/login/login').then((m) => m.Login),
    canDeactivate: [myDeactivateGuard],
  },
  {
    path: 'sign-up',
    loadComponent: () => import('./pages/auth/sign-up/sign-up').then((m) => m.SignUp),
    canDeactivate: [myDeactivateGuard],
  },
  {
    path: 'forgot-password',
    loadComponent: () =>
      import('./pages/auth/forgot-password/forgot-password').then((m) => m.ForgotPassword),
  },
  { path: '**', redirectTo: '' },
];
