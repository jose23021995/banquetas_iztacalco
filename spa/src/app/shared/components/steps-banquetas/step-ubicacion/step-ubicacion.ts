import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { ButtonModule } from 'primeng/button';

import { StepModalGps } from '../step-components/step-modal-gps/step-modal-gps';

@Component({
  selector: 'app-step-ubicacion',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputTextModule,
    SelectModule,
    ButtonModule,
    StepModalGps
  ],
  templateUrl: './step-ubicacion.html',
  styleUrl: './step-ubicacion.scss'
})
export class StepUbicacionComponent {

  @Input() group!: FormGroup;

  modalGpsVisible = false;

  latitud = '';
  longitud = '';
  direccion = '';

  colonias = [
    {
      label: 'Agrícola Oriental',
      value: 1
    },
    {
      label: 'Pantitlán',
      value: 2
    }
  ];

  secciones = [
    {
      label: 'Sección 1',
      value: 1
    },
    {
      label: 'Sección 2',
      value: 2
    }
  ];

  claves = [
    {
      label: 'CLV-001',
      value: 1
    },
    {
      label: 'CLV-002',
      value: 2
    }
  ];

  abrirModalGps(): void {

    this.direccion =
      this.group.get('direccion_calle_numero')?.value || '';

    this.latitud =
      this.group.get('latitud')?.value || '';

    this.longitud =
      this.group.get('longitud')?.value || '';

    this.modalGpsVisible = true;
  }

  cerrarModalGps(): void {
    this.modalGpsVisible = false;
  }

  guardarGps(event: {
    latitud: string;
    longitud: string;
    direccion: string;
  }): void {

    this.group.patchValue({
      latitud: event.latitud,
      longitud: event.longitud,
      direccion_calle_numero: event.direccion
    });

    this.latitud = event.latitud;
    this.longitud = event.longitud;
    this.direccion = event.direccion;

    this.modalGpsVisible = false;
  }
}