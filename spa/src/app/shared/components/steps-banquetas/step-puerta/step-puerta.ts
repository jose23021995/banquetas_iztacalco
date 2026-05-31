import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SelectModule } from 'primeng/select';

@Component({
  selector: 'app-step-puerta',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, SelectModule],
  templateUrl: './step-puerta.html'
})
export class StepPuertaComponent {
  @Input() group!: FormGroup;

  colores = [
    { label: 'Negro', value: 1 },
    { label: 'Café', value: 2 },
    { label: 'Blanco', value: 3 }
  ];

  materiales = [
    { label: 'Metal', value: 1 },
    { label: 'Madera', value: 2 },
    { label: 'Aluminio', value: 3 }
  ];
}
