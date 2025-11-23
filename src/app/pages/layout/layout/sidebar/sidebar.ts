import { Component } from '@angular/core';
import { MenuItem } from '../../../../shared/interfaces/menus.interface';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {
  menuItems!: MenuItem[];
  constructor(private router: Router) {
    this.menuItems = [
      {
        label: 'Dashboard',
        icon: 'fas fa-info-circle',
        route: '/dashboard',
        description: 'High-level understanding of Angular architecture, features, and ecosystem.',
        id: 1,
      },
      {
        label: 'Angular Overview',
        icon: 'fas fa-info-circle',
        route: '/angular/overview',
        description: 'High-level understanding of Angular architecture, features, and ecosystem.',
        id: 1,
      },
      {
        label: 'TypeScript Essentials',
        icon: 'fas fa-code',
        route: '/angular/typescript',
        description: 'Master TypeScript features required for Angular development.',
        id: 2,
      },
      {
        label: 'Components & Templates',
        icon: 'fas fa-shapes',
        route: '/angular/components',
        description: 'Deep dive into components, lifecycle hooks, templates, and bindings.',
        id: 3,
      },
      {
        label: 'Standalone APIs',
        icon: 'fas fa-box-open',
        route: '/angular/standalone',
        description: 'Build Angular apps without NgModules using Angular 17 Standalone API.',
        id: 4,
      },
      {
        label: 'Signals',
        icon: 'fas fa-wave-square',
        route: '/angular/signals',
        description: 'Reactive state management with Angular Signals.',
        id: 5,
      },
      {
        label: 'Routing & Navigation',
        icon: 'fas fa-route',
        route: '/angular/routing',
        description:
          'Pro-level routing, route guards, lazy loading, route resolvers, and nested routing.',
        id: 6,
      },
      {
        label: 'Services & DI',
        icon: 'fas fa-syringe',
        route: '/angular/services',
        description: 'Dependency Injection system, hierarchical injectors, and service patterns.',
        id: 7,
      },
      {
        label: 'RxJS Mastery',
        icon: 'fas fa-sync',
        route: '/angular/rxjs',
        description: 'Observables, Subjects, BehaviorSubjects, operators, and async streams.',
        id: 8,
      },
      {
        label: 'State Management Patterns',
        icon: 'fas fa-layer-group',
        route: '/angular/state-management',
        description: 'Signals, NgRx, services-as-state, component store, and advanced data flow.',
        id: 9,
      },
      {
        label: 'HTTP & Interceptors',
        icon: 'fas fa-plug',
        route: '/angular/http',
        description: 'REST API calls, interceptors, retry logic, caching, and error handling.',
        id: 10,
      },
      {
        label: 'Template-driven Forms',
        icon: 'fas fa-pen',
        route: '/angular/forms-template',
        description: 'Working with simple forms using Angular template-driven forms.',
        id: 11,
      },
      {
        label: 'Reactive Forms',
        icon: 'fas fa-clipboard-check',
        route: '/angular/forms-reactive',
        description: 'Advanced form controls, validation, form arrays, and dynamic forms.',
        id: 12,
      },
      {
        label: 'Custom Pipes & Directives',
        icon: 'fas fa-filter',
        route: '/angular/pipes-directives',
        description: 'Create custom pipes and attribute/structural directives.',
        id: 13,
      },
      {
        label: 'Change Detection Deep Dive',
        icon: 'fas fa-bolt',
        route: '/angular/change-detection',
        description: 'OnPush, Signals, zones, performance tuning, and manual change detection.',
        id: 14,
      },
      {
        label: 'Performance Optimization',
        icon: 'fas fa-tachometer-alt',
        route: '/angular/performance',
        description: 'Lazy loading, code splitting, memoization, and rendering optimization.',
        id: 15,
      },
      {
        label: 'Angular Animations',
        icon: 'fas fa-film',
        route: '/angular/animations',
        description: "Build smooth animations using Angular's animation system.",
        id: 16,
      },
      {
        label: 'Angular Material & CDK',
        icon: 'fas fa-layer-group',
        route: '/angular/material',
        description: 'Master Material UI and Component Dev Kit utilities.',
        id: 17,
      },
      {
        label: 'Server-Side Rendering (SSR)',
        icon: 'fas fa-server',
        route: '/angular/ssr',
        description: 'Build Angular Universal apps, hydration, and SEO optimization.',
        id: 18,
      },
      {
        label: 'PWA & Offline Features',
        icon: 'fas fa-mobile-alt',
        route: '/angular/pwa',
        description: 'Service workers, caching, offline support, and push notifications.',
        id: 19,
      },
      {
        label: 'Authentication & Authorization',
        icon: 'fas fa-user-shield',
        route: '/angular/security',
        description: 'JWT auth, route guards, RBAC, and secure Angular apps.',
        id: 20,
      },
      {
        label: 'Advanced Architecture',
        icon: 'fas fa-sitemap',
        route: '/angular/architecture',
        description: 'Smart/dumb pattern, providers, containers, micro-frontends.',
        id: 21,
      },
      {
        label: 'Testing & QA',
        icon: 'fas fa-flask',
        route: '/angular/testing',
        description: 'Unit testing, integration testing, mocks, TestBed, and e2e using Cypress.',
        id: 22,
      },
      {
        label: 'Build & Deployment',
        icon: 'fas fa-cloud-upload-alt',
        route: '/angular/deployment',
        description: 'Optimized builds, environments, CI/CD pipelines, Docker deployment.',
        id: 23,
      },
      {
        label: 'Monorepo with Nx',
        icon: 'fas fa-folder-tree',
        route: '/angular/nx',
        description: 'Nx workspaces, generators, caching, and monorepo architecture.',
        id: 24,
      },
      {
        label: 'Real-time Features',
        icon: 'fas fa-broadcast-tower',
        route: '/angular/realtime',
        description: 'WebSockets, SSE, and real-time data handling.',
        id: 25,
      },
      {
        label: 'Internationalization (i18n)',
        icon: 'fas fa-globe',
        route: '/angular/i18n',
        description: 'Translate Angular apps using Angular i18n or ngx-translate.',
        id: 26,
      },
    ];
  }

  isActiveRoute(item: MenuItem): boolean {
    return this.router.url.startsWith(item.route);
  }

  isActive(item: any): boolean {
    return this.router.url.startsWith(item.route);
  }
}
