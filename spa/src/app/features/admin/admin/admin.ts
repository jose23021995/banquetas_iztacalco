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
  //header
  public bannerBody = signal(<BannerInterface>{});
  public title = signal("");
  public img = signal("");
  //banner
  
  //imagenesBanquetas
  public datosDeLaBanqueta: any;


  ngOnInit(): void {
    //banner
    this.bannerBody=signal(banner[0]);
    const {image,title}=this.bannerBody();
    this.title.set(title);
    this.img.set(image);
  }
  // componente-padre.component.ts

requetsImagen(datos: any) {
  console.log('¡Datos recibidos del hijo!', datos);
  this.datosDeLaBanqueta = datos;
}

  
}
