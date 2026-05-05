import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const adminGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  // Verificamos si la jerarquía es 1 (Admin)
  if (authService.userRole() === 1) {
    return true; // Es admin, lo dejamos pasar
  }

  // Si no es admin, lo mandamos al dashboard o una página de "Sin Permiso"
  alert('Acceso denegado: Se requieren permisos de administrador.');
  return router.parseUrl('/dashboard');
};
