import { Routes } from '@angular/router';
//🛡️ Documentación de auth.guard.ts (Seguridad de Rutas)
import { authGuard } from './core/guards/auth.guard';
import { adminGuard } from './core/guards/admin.guard';
import { DashboardLayoutComponent } from './features/dashboard/dashboard-layout/dashboard-layout.component';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./features/auth/login/login.component').then(m => m.LoginComponent)
  },
  {
    path: 'dashboard',
    component: DashboardLayoutComponent, // Este es el padre que tiene el <router-outlet>
    canActivate: [authGuard],
    children: [
      // Rutas Hijas (Children):/dashboard/characters: Es la vista principal del panel 
      // (redirigida por defecto desde el dashboard vacío). Carga el listado de personajes
      // ./dashboard/stats: Carga la sección de estadísticas.
      {
        path: 'characters', // Se accede como /dashboard/characters
        loadComponent: () => import('./features/dashboard/children/characters/character-list/character-list.component')
          .then(m => m.CharacterListComponent)
      },
      {
        path: 'stats', // Se accede como /dashboard/stats
        loadComponent: () => import('./features/dashboard/children/stats/stats')
          .then(m => m.Stats)
      },
      { 
        path: 'admin', 
        canActivate: [adminGuard],
        children: [
          { 
            path: ':id', // Esto atrapa el parámetro 1, 2, 3...
            loadComponent: () => import('./features/admin/admin/admin').then(m => m.AdminComponent) 
          },
          {
            path: '', // Esto es para cuando entras a /admin sin número
            loadComponent: () => import('./features/admin/admin/admin').then(m => m.AdminComponent)
          }
        ]
      },

      {
        path: '', 
        redirectTo: 'characters', 
        pathMatch: 'full' 
      }
    ]
  
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login' }
];
