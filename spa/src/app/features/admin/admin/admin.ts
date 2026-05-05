import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { HeadersComponent } from '../../../shared/components/headers/headers';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, CardModule, HeadersComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {
  // Signal para el título dinámico
  public title = signal('Panel de Administración');
  public subtitle = signal('Bienvenido, José Armando');
}
