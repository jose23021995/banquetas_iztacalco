import { CommonModule } from '@angular/common'
import { Component, Input, Output, EventEmitter, } from '@angular/core';
import { environment } from '../../../environments/environment'; // Asegúrate de tener tu URL base aquí
import { FileUploadModule } from 'primeng/fileupload';
import { ImageModule } from 'primeng/image';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@Component({
  selector: 'app-uploaded-image',
  templateUrl: './uploaded-image.html',
  styleUrl: './uploaded-image.scss',
   standalone: true,
  imports: [FileUploadModule, ImageModule, ProgressSpinnerModule,CommonModule]
})


export class UploadedImage {
  @Input() nombreDeImagen: string = '';
  @Input() idUsuario: number = 0;
  @Input() proposito: 'ANTES' | 'DESPUES' = 'ANTES';
  
  @Output() onUploadFinished = new EventEmitter<any>();

  // URL por defecto del servidor
  urlPendiente = `${environment.baseUrl}/uploads/banquetas/pendiente.jpg`;
  urlServidor  = `${environment.baseUrl}/uploads/banquetas/antes/`;
  
  imagenVisualizacion: string = this.urlPendiente;
  isBase64: boolean = false;
  loading: boolean = false;

  constructor() {
    // Al iniciar, si ya tenemos un nombre de imagen, intentamos mostrar la del servidor
    if (this.nombreDeImagen) {
      this.imagenVisualizacion = `${this.urlServidor}${this.nombreDeImagen}`;
    }
  }

  onFileSelect(event: any) {
    const file = event.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e: any) => {
      // 1. Sustituir por Base64 para previsualizar
      this.imagenVisualizacion = e.target.result;
      this.isBase64 = true;

      // 2. Lanzar pregunta de confirmación
      const confirmar = confirm(`¿Seguro que quiere subir la imagen "${file.name}"?`);
      
      if (confirmar) {
        this.subirImagen(file);
      } else {
        // Resetear si cancela
        this.imagenVisualizacion = this.nombreDeImagen ? `${this.urlServidor}${this.nombreDeImagen}` : this.urlPendiente;
        this.isBase64 = false;
      }
    };
    reader.readAsDataURL(file);
  }

  subirImagen(file: File) {
    this.loading = true;
    
    // Simulación de subida al servidor (aquí iría tu llamada al servicio)
    setTimeout(() => {
      this.loading = false;
      this.isBase64 = false;
      
      // Una vez "subida", volvemos a apuntar a la URL del servidor
      this.imagenVisualizacion = `${this.urlServidor}${file.name}`;
      
      // Emitir el objeto final
      this.onUploadFinished.emit({
        nombreDeImagen: file.name,
        urlImagen: this.imagenVisualizacion,
        idUsuario: this.idUsuario
      });

      alert('Imagen reemplazada con éxito');
    }, 2000);
  }
}
