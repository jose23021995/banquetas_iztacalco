import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SelectModule } from 'primeng/select';
import { InputNumberModule } from 'primeng/inputnumber';

@Component({
  selector: 'app-step-banqueta',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, SelectModule, InputNumberModule],
  templateUrl: './step-banqueta.html'
})
export class StepBanquetaComponent {
  @Input() group!: FormGroup;

  estatusBanqueta = [
    { label: 'Normal', value: 'Normal' },
    { label: 'Cuarteadura', value: 'Cuarteadura' },
    { label: 'Destruida', value: 'Destruida' },
    { label: 'No existe', value: 'No existe' }
  ];
}
