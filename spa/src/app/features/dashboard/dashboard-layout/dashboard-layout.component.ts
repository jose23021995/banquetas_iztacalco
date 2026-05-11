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
      { label: 'Banquetas', icon: 'pi pi-users', routerLink: 'characters' },
    ];

    // 4. Si es Admin (1), agregamos la opción
    if (role === 1) {
      menu.push({
        label: 'Admin',
        icon: 'pi pi-cog',
        // Al agregar 'items', se convierte en un menú desplegable como el de tu imagen
        items: [
            {
                label: 'Imagenes de banquetas',
                icon: 'pi pi-images',
                routerLink: ['admin', 1]
            },
            {
                label: 'generacion de excel',
                icon: 'pi pi-file-excel',
                routerLink: ['admin', 2]
            },
            {
                label: 'generacion de pdf',
                icon: 'pi pi-file-pdf',
                routerLink: ['admin', 3]  
            },
            
            {
                label: 'geo localizacion de puntos',
                icon: 'pi pi-map-marker',
                routerLink: ['admin', 4]
            },
            {
                label: 'Usuarios',
                icon: 'pi pi-users',
                routerLink: ['admin', 5]
            },
            {
                label: 'catalogo de colores',
                icon: 'pi pi-palette',
                routerLink: ['admin', 6]
            }
            ,
            {
                label: 'catalogo de colores',
                icon: 'pi pi-palette',
                routerLink: ['admin', 7]
            }
            ,
            {
                label: 'catalogo de fachadas',
                icon: 'pi pi-palette',
                routerLink: ['admin', 8]
            }
            ,
            {
                label: 'catalogo de referencias',
                icon: 'pi pi-palette',
                routerLink: ['admin', 9]
            }
        ]
    });

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
