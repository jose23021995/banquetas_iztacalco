import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { StepsModule } from 'primeng/steps';

import { StepContactoComponent } from '../../../../shared/components/steps-banquetas/step-contacto/step-contacto';
import { StepUbicacionComponent } from '../../../../shared/components/steps-banquetas/step-ubicacion/step-ubicacion';
import { StepBanquetaComponent } from '../../../../shared/components/steps-banquetas/step-banqueta/step-banqueta';
import { StepFachadaComponent } from '../../../../shared/components/steps-banquetas/step-fachada/step-fachada';
import { StepPuertaComponent } from '../../../../shared/components/steps-banquetas/step-puerta/step-puerta';
import { StepEvidenciasComponent } from '../../../../shared/components/steps-banquetas/step-evidencias/step-evidencias';
import { StepReferencias } from '../../../../shared/components/steps-banquetas/step-referencias/step-referencias';

@Component({
  selector: 'app-add-banquetas',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ButtonModule,
    StepsModule,
    StepContactoComponent,
    StepUbicacionComponent,
    StepBanquetaComponent,
    StepFachadaComponent,
    StepPuertaComponent,
    StepEvidenciasComponent,
    StepReferencias
  ],
  templateUrl: './add-banquetas.html',
  styleUrl: './add-banquetas.scss'
})
export class AddBanquetas {
  private readonly fb = inject(FormBuilder);

  stepActual = 0;

  steps = [
    { label: 'Contacto' },
    { label: 'Ubicación' },
    { label: 'Banqueta' },
    { label: 'Fachada' },
    { label: 'Puerta' },
    { label: 'Referencias' },
    { label: 'Evidencias' }
  ];

  formRegistro: FormGroup = this.fb.group({
    contacto: this.fb.group({
      nombre_contacto: ['', Validators.required],
      apellido_paterno: ['', Validators.required],
      apellido_materno: ['']
    }),
    ubicacion: this.fb.group({
      direccion_calle_numero: ['', Validators.required],
      latitud: ['', Validators.required],
      longitud: ['', Validators.required],
      id_colonia: [null, Validators.required],
      id_seccion: [null],
      id_clave: [null]
    }),
    banqueta: this.fb.group({
      estatus_banqueta: [null, Validators.required],
      ancho_banqueta: [null, Validators.required],
      largo_banqueta: [null, Validators.required]
    }),
    fachada: this.fb.group({
      color_fachada_id: [null, Validators.required],
      material_fachada_id: [null, Validators.required]
    }),
    puerta: this.fb.group({
      color_puerta_id: [null, Validators.required],
      material_puerta_id: [null, Validators.required]
    }),
    evidencias: this.fb.group({
      imagenes: [[]]
    })
  });

  get contactoGroup(): FormGroup {
    return this.formRegistro.get('contacto') as FormGroup;
  }

  get ubicacionGroup(): FormGroup {
    return this.formRegistro.get('ubicacion') as FormGroup;
  }

  get banquetaGroup(): FormGroup {
    return this.formRegistro.get('banqueta') as FormGroup;
  }

  get fachadaGroup(): FormGroup {
    return this.formRegistro.get('fachada') as FormGroup;
  }

  get puertaGroup(): FormGroup {
    return this.formRegistro.get('puerta') as FormGroup;
  }

  get evidenciasGroup(): FormGroup {
    return this.formRegistro.get('evidencias') as FormGroup;
  }

  siguiente(): void {
    if (this.stepActual < this.steps.length - 1) {
      this.stepActual++;
    }
  }

  anterior(): void {
    if (this.stepActual > 0) {
      this.stepActual--;
    }
  }

  guardar(): void {
    if (this.formRegistro.invalid) {
      this.formRegistro.markAllAsTouched();
      return;
    }

    console.log('Payload final:', this.formRegistro.value);
  }
}
