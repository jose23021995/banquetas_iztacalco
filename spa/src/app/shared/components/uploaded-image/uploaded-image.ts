import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, inject, ViewChild } from '@angular/core';
import { environment } from '../../../environments/environment';
import { FileUploadModule, FileUpload } from 'primeng/fileupload'; // FileUpload es el tipo, FileUploadModule es el módulo
import { ImageModule } from 'primeng/image';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { UploadService } from '../../../core/services/upload.service';

@Component({
  selector: 'app-uploaded-image',
  templateUrl: './uploaded-image.html',
  styleUrl: './uploaded-image.scss',
  standalone: true,
  imports: [
    CommonModule,
    FileUploadModule, 
    ImageModule, 
    ProgressSpinnerModule
  ]
})
export class UploadedImage {
  @ViewChild('fileUploadComponent') fileUpload!: FileUpload;
  
  private uploadService = inject(UploadService);

  // Inputs y Outputs
  @Input() nombreDeImagen: string = '';
  @Input() idUsuario: number = 0;
  @Input() proposito: 'ANTES' | 'DESPUES' = 'ANTES';
  @Output() onUploadFinished = new EventEmitter<any>();

  // Variables de estado
  urlPendiente = `${environment.baseUrl}/uploads/banquetas/pendiente.jpg`;
  urlServidor = `${environment.baseUrl}/uploads/banquetas/antes/`;
  imagenVisualizacion: string = this.urlPendiente;
  isBase64: boolean = false;
  loading: boolean = false;
  
  private fileToUpload: File | null = null;

  constructor() {
    // Inicialización de imagen si ya existe nombre
    if (this.nombreDeImagen) {
      this.imagenVisualizacion = `${this.urlServidor}${this.nombreDeImagen}`;
    }
  }

  onFileSelect(event: any) {
    const file = event.files[0];
    if (!file) return;
    
    this.fileToUpload = file;

    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.imagenVisualizacion = e.target.result;
      this.isBase64 = true;

      const esReemplazo = this.nombreDeImagen && this.nombreDeImagen !== '';
      const accion = esReemplazo ? 'reemplazar' : 'subir';
      
      const confirmar = confirm(`¿Seguro que quiere ${accion} la imagen "${file.name}"?`);
      
      if (confirmar) {
        this.subirImagen(file);
      } else {
        // Al cancelar regresamos al estado previo
        this.imagenVisualizacion = this.nombreDeImagen 
          ? `${this.urlServidor}${this.nombreDeImagen}` 
          : this.urlPendiente;
        this.isBase64 = false;
        this.fileToUpload = null;
        // Limpiamos el componente para que el texto "naranja" se vaya si cancela
        this.fileUpload.clear();
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
        
        // Emitimos al padre
        this.onUploadFinished.emit(res);
        
        // Limpieza final del botón (aparece "No file chosen")
        this.fileUpload.clear();
        alert('Imagen actualizada con éxito');
      },
      error: (err) => {
        this.loading = false;
        alert('Hubo un error al subir la imagen');
        this.fileUpload.clear();
      }
    });
  }
}
