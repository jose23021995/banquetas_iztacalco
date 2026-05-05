import { Component, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { HeadersComponent } from '../../../shared/components/headers/headers';
import texto  from '../../../shared/interfaces/text/admin-text.json';
import {BannerInterface}  from '../../../shared/interfaces/models/banner.model';
const { banner }=texto;
@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, CardModule, HeadersComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent implements OnInit {
  // Signal para el título dinámico
  public bannerBody = signal(<BannerInterface>{});
  public title = signal("");
  public img = signal("");
  
  ngOnInit(): void {
    this.bannerBody=signal(banner[0]);
    const {image,title}=this.bannerBody();
    this.title.set(title);
    this.img.set(image);
  }
  
}
