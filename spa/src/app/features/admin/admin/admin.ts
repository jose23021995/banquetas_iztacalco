import { Component, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { HeadersComponent } from '../../../shared/components/headers/headers';
import texto  from '../../../shared/interfaces/text/admin-text.json';
import {BannerInterface}  from '../../../shared/interfaces/models/banner.model';
import {UploadedImage} from '../../../shared/components/uploaded-image/uploaded-image';
const { banner }=texto;
@Component({ 
  selector: 'app-admin', 
  standalone: true, 
  imports: [
    CommonModule, 
    CardModule, 
    HeadersComponent, 
    UploadedImage // <--- AGREGA ESTO AQUÍ
  ], 
  templateUrl: './admin.component.html', 
  styleUrl: './admin.component.scss' 
})
export class AdminComponent implements OnInit {
  // Signal para el título dinámico
  public bannerBody = signal(<BannerInterface>{});
  public title = signal("");
  public img = signal("");
  public datosDeLaBanqueta: any;
  
  ngOnInit(): void {
    this.bannerBody=signal(banner[0]);
    const {image,title}=this.bannerBody();
    this.title.set(title);
    this.img.set(image);
  }
  // componente-padre.component.ts

manejarRespuestaHijo(datos: any) {
  console.log('¡Datos recibidos del hijo!', datos);
  
  // Aquí ya tienes acceso a:
  // datos.nombreDeImagen
  // datos.urlImagen
  // datos.idUsuario

  // Ejemplo: Guardar en una variable local o enviarlo a un servicio
  this.datosDeLaBanqueta = datos;
  
  // Opcional: Mostrar una notificación de éxito con PrimeNG Toast
  // this.messageService.add({severity:'success', summary:'Subida', detail:'Imagen lista'});
}

  
}
