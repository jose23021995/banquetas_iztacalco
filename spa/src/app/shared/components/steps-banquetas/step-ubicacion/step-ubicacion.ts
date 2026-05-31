import { Component, Input, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { ButtonModule } from 'primeng/button';

import { StepModalGps } from '../step-components/step-modal-gps/step-modal-gps';
import { ColoniaService } from '../../../../core/services/colonia.service';
import { SeccionService } from '../../../../core/services/seccion.service';

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
export class StepUbicacionComponent implements OnInit {
  private coloniaService = inject(ColoniaService);
  private seccionService = inject(SeccionService);

  @Input() group!: FormGroup;

  modalGpsVisible = false;

  latitud = '';
  longitud = '';
  direccion = '';

  colonias: Array<{ label: string; value: number }> = [];
  secciones: Array<{ label: string; value: number }> = [];

  

  ngOnInit(): void {
    this.cargarColonias();
    this.escucharCambiosColonia();
  }

  async cargarColonias(): Promise<void> {
    try {
      // Busca con un texto vacío para obtener todas las colonias
      const resultado = await this.coloniaService.buscarColonias('');
      
      // Convierte el resultado al formato esperado por p-select
      this.colonias = (resultado.colonias || []).map((col: any) => ({
        label: col.nombre,
        value: col.id
      }));
      
      console.log('Colonias cargadas:', this.colonias);
    } catch (error) {
      console.error('Error al cargar colonias:', error);
    }
  }

  escucharCambiosColonia(): void {
    const controlColonia = this.group.get('id_colonia');
    if (controlColonia) {
      controlColonia.valueChanges.subscribe((idColonia: number) => {
        if (idColonia) {
          console.log('Colonia seleccionada:', idColonia);
          this.cargarSeccionesPorColonia(idColonia);
        }
      });
    }
  }

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

  async guardarGps(event: {
    latitud: string;
    longitud: string;
    direccion: string;
    colonia: string;
  }): Promise<void> {
    console.log('Datos GPS recibidos desde el hijo:', event);

    const coloniaNombre = event.colonia || event.direccion;
    const resultado = await this.coloniaService.buscarColonias(coloniaNombre);

    console.log('Respuesta de colonias desde el backend:', resultado);

    // Verificar si encontró colonias
    if (!resultado.colonias || resultado.colonias.length === 0) {
      alert(
        'La colonia no se encuentra en el registro de Iztacalco.\n\n' +
        'Por favor, intenta:\n' +
        '- Seleccionar un punto en el mapa con el puntero\n' +
        '- O desplazarte a la zona de Iztacalco'
      );
      this.modalGpsVisible = false;
      return;
    }

    // Si encontró colonias, tomar la primera (la más corta según el ordenamiento)
    const coloniaEncontrada = resultado.colonias[0];

    // Precargar el formulario con la colonia
    this.group.patchValue({
      latitud: event.latitud,
      longitud: event.longitud,
      direccion_calle_numero: event.direccion,
      id_colonia: coloniaEncontrada.id
    });

    this.latitud = event.latitud;
    this.longitud = event.longitud;
    this.direccion = event.direccion;

    // Cargar las secciones de esta colonia
    await this.cargarSeccionesPorColonia(coloniaEncontrada.id);

    this.modalGpsVisible = false;
  }

  async cargarSeccionesPorColonia(idColonia: number): Promise<void> {
    try {
      const resultado = await this.seccionService.obtenerSeccionesPorColonia(idColonia);

      // Convierte el resultado al formato esperado por p-select
      this.secciones = (resultado.secciones || []).map((sec: any) => ({
        label: sec.nombre,
        value: sec.id
      }));

      console.log('Secciones cargadas para colonia', idColonia, ':', this.secciones);

      // Preseleccionar la primera sección si existe
      if (this.secciones.length > 0) {
        this.group.patchValue({
          id_seccion: this.secciones[0].value
        });
      }
    } catch (error) {
      console.error('Error al cargar secciones:', error);
    }
  }
}