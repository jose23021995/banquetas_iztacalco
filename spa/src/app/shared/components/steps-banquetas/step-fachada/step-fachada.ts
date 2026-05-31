import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SelectModule } from 'primeng/select';

@Component({
  selector: 'app-step-fachada',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, SelectModule],
  templateUrl: './step-fachada.html'
})
export class StepFachadaComponent {
  @Input() group!: FormGroup;

  colores = [
    { label: 'Blanco', value: 1 },
    { label: 'Gris', value: 2 },
    { label: 'Azul', value: 3 }
  ];

  materiales = [
    { label: 'Cemento', value: 1 },
    { label: 'Ladrillo', value: 2 },
    { label: 'Pintura', value: 3 }
  ];
}
