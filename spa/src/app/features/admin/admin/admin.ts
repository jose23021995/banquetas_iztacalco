import { Component, signal, OnInit,input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { HeadersComponent } from '../../../shared/components/headers/headers';
import texto  from '../../../shared/interfaces/text/admin-text.json';
import {BannerInterface}  from '../../../shared/interfaces/models/banner.model';
//componentes reutilizables
import {UploadedImage} from '../../../shared/components/uploaded-image/uploaded-image';
import {AdminCatalogoReferencias} from '../../../shared/components/admin-catalogo-referencias/admin-catalogo-referencias';
const { banner }=texto;
@Component({ 
  selector: 'app-admin', 
  standalone: true, 
  imports: [
    CommonModule, 
    CardModule, 
    HeadersComponent, 
    UploadedImage, // <--- AGREGA ESTO AQUÍ
    AdminCatalogoReferencias
  ], 
  templateUrl: './admin.component.html', 
  styleUrls: ['./admin.component.scss','./imagenes.scss','./referencias.scss' ]
})
export class AdminComponent implements OnInit {
  
  // Signal para el título dinámico
  //header
  public bannerBody = signal(<BannerInterface>{});
  public title = signal("");
  // variable signal para elegir componente 
  public id = input<string>(); 
  // variable de componente imagenes banquetas
  public img = signal("");
  public datosDeLaBanqueta: any;


  ngOnInit(): void {
    this.requetsImagen();
  }
  // componente-padre.component.ts

requetsImagen(datos?: any) {
  if (datos) 
  {
    console.log('¡Datos recibidos del hijo!', datos);
    this.datosDeLaBanqueta = datos;
  }else{
    this.bannerBody=signal(banner[0]);
    const {image,title}=this.bannerBody();
    this.title.set(title);
    this.img.set(image);
  }
}

  
}
