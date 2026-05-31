import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-step-contacto',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, InputTextModule],
  templateUrl: './step-contacto.html'
})
export class StepContactoComponent {
  @Input() group!: FormGroup;
}