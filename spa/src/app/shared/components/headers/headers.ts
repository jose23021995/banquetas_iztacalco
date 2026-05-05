import { Component, inject, signal, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
//src\app\shared\interfaces\models\banner.model.ts
@Component({
  selector: 'app-headers',
  imports: [CommonModule],
  templateUrl: './headers.html',
  styleUrl: './headers.scss',
})
export class HeadersComponent  {
  @Input() characterImage: string = '';
  @Input() title: string = 'Título por defecto';

}
