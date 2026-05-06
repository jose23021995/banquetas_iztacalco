import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { environment } from '../../../environments/environment';
import { FileUploadModule } from 'primeng/fileupload';
import { ImageModule } from 'primeng/image';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { UploadService } from '../../../core/services/upload.service';

@Component({
  selector: 'app-uploaded-image',
  templateUrl: './uploaded-image.html',
  styleUrl: './uploaded-image.scss',
  standalone: true,
  imports: [FileUploadModule, ImageModule, ProgressSpinnerModule, CommonModule]
})
export class UploadedImage {
  private uploadService = inject(UploadService);

  @Input() nombreDeImagen: string = '';
  @Input() idUsuario: number = 0;
  @Input() proposito: 'ANTES' | 'DESPUES' = 'ANTES';
  @Output() onUploadFinished = new EventEmitter<any>();

  urlPendiente = `${environment.baseUrl}/uploads/banquetas/pendiente.jpg`;
  urlServidor = `${environment.baseUrl}/uploads/banquetas/antes/`;
  
  imagenVisualizacion: string = this.urlPendiente;
  isBase64: boolean = false;
  loading: boolean = false;

  constructor() {
    if (this.nombreDeImagen) {
      this.imagenVisualizacion = `${this.urlServidor}${this.nombreDeImagen}`;
    }
  }

  // --- ESTA ES LA ÚNICA FUNCIÓN onFileSelect QUE DEBE EXISTIR ---
  onFileSelect(event: any, fileUpload: any) {
    const file = event.files[0]; // Tomamos el primer archivo del array de PrimeNG
    if (!file) return;

    // Limpiamos el componente para borrar el texto naranja del nombre
    fileUpload.clear();

    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.imagenVisualizacion = e.target.result;
      this.isBase64 = true;

      const confirmar = confirm(`¿Seguro que quiere subir la imagen "${file.name}"?`);
      if (confirmar) {
        this.subirImagen(file);
      } else {
        this.imagenVisualizacion = this.nombreDeImagen 
          ? `${this.urlServidor}${this.nombreDeImagen}` 
          : this.urlPendiente;
        this.isBase64 = false;
      }
    };
    reader.readAsDataURL(file);
  }

  subirImagen(file: File) {
    this.loading = true;
    this.uploadService.subirImagen(file, this.idUsuario, this.proposito, this.nombreDeImagen).subscribe({
      next: (res) => {
        this.loading = false;
        this.isBase64 = false;
        this.imagenVisualizacion = res.urlImagen;
        this.onUploadFinished.emit(res);
        alert('Imagen guardada con éxito');
      },
      error: () => {
        this.loading = false;
        alert('Hubo un error al subir');
      }
    });
  }
}
