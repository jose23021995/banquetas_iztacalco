import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FileUploadModule } from 'primeng/fileupload';

@Component({
  selector: 'app-step-evidencias',
  standalone: true,
  imports: [CommonModule, FileUploadModule],
  templateUrl: './step-evidencias.html'
})
export class StepEvidenciasComponent {
  @Input() group!: FormGroup;

  onSelect(event: any): void {
    const files = event.files || [];
    this.group.patchValue({
      imagenes: files
    });
  }
}