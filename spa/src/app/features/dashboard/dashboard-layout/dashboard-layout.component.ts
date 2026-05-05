import { Component, inject, signal, computed } from '@angular/core';
import { Router, RouterOutlet, RouterModule } from '@angular/router';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { MenuItem } from 'primeng/api';
import { DarkModeComponent } from '../../../shared/components/dark-mode/dark-mode.component';
import { DividerModule } from 'primeng/divider';
import { CharacterService } from "../../../core/services/character.service";
import { AuthService } from "../../../core/services/auth.service"; // 1. Importa AuthService

@Component({
  selector: 'app-dashboard-layout',
  standalone: true,
  imports: [DividerModule, RouterOutlet, RouterModule, MenubarModule, ButtonModule, DarkModeComponent],
  templateUrl: './dashboard-layout.component.html',
  styleUrl: './dashboard-layout.component.scss'
})
export class DashboardLayoutComponent {
  private router = inject(Router);
  private charService = inject(CharacterService);
  private authService = inject(AuthService); // 2. Inyecta el servicio

  // 3. Cambiamos signal por computed para que el menú dependa del rol
  public items = computed<MenuItem[]>(() => {
    const role = this.authService.userRole(); // Obtiene 1 o 2
    
    const menu: MenuItem[] = [
      { label: 'Personajes', icon: 'pi pi-users', routerLink: 'characters' },
      { label: 'Estadísticas', icon: 'pi pi-chart-bar', routerLink: 'stats' }
    ];

    // 4. Si es Admin (1), agregamos la opción
    if (role === 1) {
      menu.push({ label: 'Admin', icon: 'pi pi-cog', routerLink: 'admin' });
    }

    menu.push({ 
      label: 'Prueba Interceptor', 
      icon: 'pi pi-exclamation-triangle', 
      command: () => this.pruebaInterceptor() 
    });

    return menu;
  });

  async pruebaInterceptor(){
    const response = await this.charService.getPrueba();
    console.log(response);
  }

  logout() {
    this.authService.logout(); // 5. Usa el logout del servicio para limpiar TODO
  }
}
