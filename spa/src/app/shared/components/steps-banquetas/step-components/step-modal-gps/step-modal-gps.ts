import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import { CommonModule } from '@angular/common';

import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';

import * as L from 'leaflet';

@Component({
  selector: 'app-step-modal-gps',
  standalone: true,
  imports: [
    CommonModule,
    DialogModule,
    ButtonModule
  ],
  templateUrl: './step-modal-gps.html',
  styleUrl: './step-modal-gps.scss',
})
export class StepModalGps implements AfterViewInit {
  @Input() visible = false;
  @Input() latitud = '';
  @Input() longitud = '';
  @Input() direccion = '';

  @Output() cerrar = new EventEmitter<void>();

  @Output() confirmar = new EventEmitter<{
    latitud: string;
    longitud: string;
    direccion: string;
  }>();

  map!: L.Map;
  marker!: L.Marker;

  cargando = false;
  errorMsg = '';

  colonia = '';

  datosUbicacion: {
    latitud: string;
    longitud: string;
    direccion: string;
    colonia: string;
  } | null = null;

  centroInicial: L.LatLngExpression = [19.4326, -99.1332];

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.inicializarMapa();
    }, 300);
  }

  inicializarMapa(): void {
    if (this.map) {
      return;
    }

    this.map = L.map('mapaGps').setView(this.centroInicial, 12);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap'
    }).addTo(this.map);

    this.map.on('click', async (event: L.LeafletMouseEvent) => {
      const lat = event.latlng.lat;
      const lng = event.latlng.lng;

      await this.seleccionarCoordenadas(lat, lng);
    });

    setTimeout(() => {
      this.map.invalidateSize();
    }, 300);
  }

  async obtenerUbicacionGps(): Promise<void> {
    if (!navigator.geolocation) {
      this.errorMsg = 'Tu navegador no soporta geolocalización.';
      return;
    }

    this.cargando = true;
    this.errorMsg = '';

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;

        await this.seleccionarCoordenadas(lat, lng);

        this.cargando = false;
      },
      () => {
        this.errorMsg = 'Permiso de ubicación denegado o señal GPS débil.';
        this.cargando = false;
      },
      {
        enableHighAccuracy: true,
        timeout: 12000,
        maximumAge: 0
      }
    );
  }

  async seleccionarCoordenadas(lat: number, lng: number): Promise<void> {
    this.cargando = true;

    this.latitud = String(lat);
    this.longitud = String(lng);

    this.actualizarMarcador(lat, lng);

    const direccionObtenida = await this.consultarDireccion(lat, lng);

    this.direccion = direccionObtenida;

    this.datosUbicacion = {
      latitud: this.latitud,
      longitud: this.longitud,
      direccion: this.direccion,
      colonia: this.colonia
    };

    this.cargando = false;
  }

  actualizarMarcador(lat: number, lng: number): void {
    const posicion: L.LatLngExpression = [lat, lng];

    if (this.marker) {
      this.marker.setLatLng(posicion);
    } else {
      this.marker = L.marker(posicion).addTo(this.map);
    }

    this.marker
      .bindPopup(`Ubicación marcada<br>${lat.toFixed(5)}, ${lng.toFixed(5)}`)
      .openPopup();

    this.map.setView(posicion, 16);
  }

  async consultarDireccion(lat: number, lng: number): Promise<string> {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}`,
        {
          headers: {
            'Accept-Language': 'es'
          }
        }
      );

      const data = await response.json();

      const address = data.address || {};

      const calle =
        address.road ||
        address.pedestrian ||
        address.residential ||
        '';

      const colonia =
        address.suburb ||
        address.neighbourhood ||
        address.city_district ||
        '';

      this.colonia = colonia;
      console.log('Nombre de la colonia:', colonia);

      if (calle && colonia) {
        return `${calle}, ${colonia}`;
      }

      if (calle) {
        return calle;
      }

      if (colonia) {
        return colonia;
      }

      return data.display_name || `Punto en mapa (${lat.toFixed(4)}, ${lng.toFixed(4)})`;
    } catch {
      return `Punto en mapa (${lat.toFixed(4)}, ${lng.toFixed(4)})`;
    }
  }

  onCerrar(): void {
    this.cerrar.emit();
  }

  onConfirmar(): void {
    this.confirmar.emit({
      latitud: this.latitud,
      longitud: this.longitud,
      direccion: this.direccion
    });
  }
}