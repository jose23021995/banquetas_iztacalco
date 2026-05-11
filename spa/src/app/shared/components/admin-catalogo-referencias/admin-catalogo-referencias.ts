import { Component, OnInit, signal } from '@angular/core';
import { PickListModule } from 'primeng/picklist';
import { CommonModule } from '@angular/common';

// 1. La interfaz siempre fuera del @Component
export interface ProductoReferencia {
  id?: string;
  name?: string;
  category?: string;
  image?: string;
  color?: string;
  hasColor?: boolean;
  more_than_one_color?: true;

}

@Component({
  selector: 'app-admin-catalogo-referencias',
  standalone: true, // Asegúrate de que tenga esto
  imports: [PickListModule, CommonModule], // ¡Importante! Agrega los módulos aquí
  templateUrl: './admin-catalogo-referencias.html',
  styleUrl: './admin-catalogo-referencias.scss',
})
export class AdminCatalogoReferencias implements OnInit {
  // 2. Señales con datos locales
  sourceProducts = signal<ProductoReferencia[]>([
    { id: '1', name: 'Concreto Escobillado', category: 'piso', image: 'concreto-escobillado.jpg' },
    { id: '2', name: 'Concreto Estampado', category: 'piso', image: 'concreto-estampado.jpg' },
    { id: '4', name: 'Concreto Permeable', category: 'piso', image: 'concreto-permeable.jpg' },
    { id: '5', name: 'Adoquin de Concreto', category: 'piso', image: 'adoquin-concreto.png' },
    { id: '6', name: 'Adoquin Ceramico', category: 'piso', image: 'adoquin-ceramico.jpg' },
    { id: '7', name: 'Piedra Natural', category: 'piso', image: 'piedra-natural.jpg' },
    { id: '8', name: 'Laja de Piedra', category: 'piso', image: 'laja-piedra.jpg' },
    { id: '9', name: 'Loseta de Cemento', category: 'piso', image: 'loseta-cemento.jpg' },
    { id: '10', name: 'Baldosa de Terrazo', category: 'piso', image: 'baldosa-terrazo.jpg' },
    { id: '11', name: 'Asfalto', category: 'piso', image: 'asfalto.jpg' },
    { id: '12', name: 'Gravilla Estabilizada', category: 'piso', image: 'gravilla.jpg' },
    { id: '13', name: 'Pavimento Tactil', category: 'piso', image: 'pavimento-tactil.jpg' },
    { id: '14', name: 'Madera Deck', category: 'piso', image: 'madera-deck.jpg' },
    { id: '15', name: 'Coladera simple', category: 'coladera', image: 'coladera_simple.jpg' },
    { id: '16', name: 'Coladera de rejilla', category: 'coladera', image: 'coladera_rejilla.jpg' },
    { id: '17', name: 'Canaleta Trench Drain', category: 'coladera', image: 'Canaleta_Trench_Drain.jpg' },
    { id: '19', name: 'Canaleta Trench Drain', category: 'colores', color:"#000000" },
    { id: '20', name: 'blanco', category: 'colores',  color: '#FFFFFF' },
    { id: '21', name: 'amarillo', category: 'colores',  color: '#FFD700'},
    { id: '22', name: 'amarillo oscuro', category: 'colores', color: '#E99210' },
    { id: '23', name: 'naranja', category: 'colores',  color: '#F05423' },
    { id: '24', name: 'rojo', category: 'colores',  color: '#E41E26' },
    { id: '25', name: 'magenta', category: 'colores',  color: '#DA1E7E' },
    { id: '26', name: 'lila', category: 'colores',  color: '#9187C1' },
    { id: '27', name: 'violeta', category: 'colores', color: '#5C337D' },
    { id: '28', name: 'cielo', category: 'colores',  color: '#009AD9' },
    { id: '29', name: 'azul', category: 'colores',  color: '#1B56AA' },
    { id: '30', name: 'turquesa', category: 'colores',  color: '#26B4C4' },
    { id: '31', name: 'manzana', category: 'colores',  color: '#8AC33E' },
    { id: '32', name: 'verde', category: 'colores',  color:'#008D36' },
    { id: '33', name: 'gris', category: 'colores',  color: '#A0A0A0' },
    { id: '34', name: 'pintada', category: 'fachada', image: 'pintura_morteros.jpg' , hasColor: true, more_than_one_color: true },
    { id: '35', name: 'ladrillo rojo', category: 'fachada', image: 'ladrillo_rojo.jpg'},
    { id: '36', name: 'Madera natural', category: 'fachada', image: 'madera_natural.jpg'  },
    { id: '37', name: 'Madera pintada', category: 'fachada', image: 'madera_pintada.jpg' , hasColor: true, more_than_one_color: true },
    { id: '38', name: 'Cerámica y Porcelanato fachada', category: 'fachada', image: 'ceramica_y_porcelanato_fachada.jpg' , hasColor: true, more_than_one_color: true },
    { id: '39', name: 'Paneles Metálicos', category: 'fachada', image: 'paneles_metalicos.jpg'},
    { id: '40', name: 'vidrio', category: 'fachada', image: 'vidrio.jpg' },
    { id: '41', name: 'rejas', category: 'fachada', image: 'rejas.jpg' },
    { id: '42', name: 'barrotes', category: 'fachada', image: 'barrotes.jpg' , hasColor: true, more_than_one_color: true},
    { id: '43', name: 'grafitti', category: 'fachada', image: 'grafitti.jpg' , hasColor: true, more_than_one_color: true},
    { id: '44', name: 'franja de división', category: 'fachada', image: 'liston.jpg' , hasColor: true, more_than_one_color: true},
    { id: '45', name: 'azulejo', category: 'fachada', image: 'azulejos.jpg' , hasColor: true, more_than_one_color: true},
    { id: '35', name: 'diseño fachada bitono', category: 'diseños', image: '', hasColor: true, more_than_one_color: true },
    { id: '36', name: 'madera de encino', category: 'puerta', image: '', hasColor: true },
    { id: '37', name: 'madera de pino', category: 'puerta', image: '', hasColor: true },
    { id: '38', name: 'caoba barnizada', category: 'puerta', image: '', hasColor: true, more_than_one_color: true },
    { id: '39', name: 'nogal oscuro', category: 'puerta', image: '', hasColor: true },
    { id: '40', name: 'aluminio blanco', category: 'puerta', image: '', hasColor: true },
    { id: '41', name: 'aluminio negro mate', category: 'puerta', image: '', hasColor: true },
    { id: '42', name: 'acero reforzado', category: 'puerta', image: '', hasColor: true },
    { id: '43', name: 'hierro fundido', category: 'puerta', image: '', hasColor: true },
    { id: '44', name: 'pvc imitación madera', category: 'puerta', image: '', hasColor: true, more_than_one_color: true },
    { id: '45', name: 'vidrio translúcido', category: 'puerta', image: '', hasColor: true },
    { id: '46', name: 'fibra de vidrio', category: 'puerta', image: '', hasColor: true },
    { id: '47', name: 'chapa de acero', category: 'puerta', image: '', hasColor: true },
    { id: '48', name: 'multilaminado', category: 'puerta', image: '', hasColor: true, more_than_one_color: true },
    { id: '60', name: 'casa habitación', category: 'tipo_inmueble', image: 'casa_normal.jpg', hasColor: true },
    { id: '61', name: 'escuela / colegio', category: 'tipo_inmueble', image: 'escuela.jpg', hasColor: true },
    { id: '62', name: 'negocio de comida', category: 'tipo_inmueble', image: 'restaurante.jpg', hasColor: true, more_than_one_color: true },
    { id: '63', name: 'tiendita de abarrotes', category: 'tipo_inmueble', image: 'tiendita.jpg', hasColor: true, more_than_one_color: true },
    { id: '64', name: 'mercado municipal', category: 'tipo_inmueble', image: 'mercado.jpg', hasColor: true, more_than_one_color: true },
    { id: '65', name: 'local comercial', category: 'tipo_inmueble', image: 'local.jpg', hasColor: true },
    { id: '66', name: 'edificio de departamentos', category: 'tipo_inmueble', image: 'departamentos.jpg', hasColor: true },
    { id: '67', name: 'oficinas', category: 'tipo_inmueble', image: 'oficinas.jpg', hasColor: true },
    { id: '68', name: 'taller mecánico', category: 'tipo_inmueble', image: 'taller.jpg', hasColor: true },
    { id: '69', name: 'iglesia / templo', category: 'tipo_inmueble', image: 'iglesia.jpg', hasColor: true },
    { id: '70', name: 'hospital / clínica', category: 'tipo_inmueble', image: 'hospital.jpg', hasColor: true },
    { id: '71', name: 'parque / espacio público', category: 'tipo_inmueble', image: 'parque.jpg', hasColor: true, more_than_one_color: true }

  ]);

  targetProducts = signal<ProductoReferencia[]>([]);

  ngOnInit() {
    console.log('Componente de Referencias cargado con datos locales');
  }
}
