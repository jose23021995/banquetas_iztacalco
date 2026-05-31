import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ColoniaService {
  private http = inject(HttpClient);
  private readonly URL_API = `${environment.baseUrl}/api/catalogos/colonias/buscar`;

  async buscarColonias(texto: string) {
    try {
      const params = new HttpParams().set('q', texto || '');
      return await firstValueFrom(
        this.http.get<{ colonias: Array<{ id: number; nombre: string }> }>(this.URL_API, { params })
      );
    } catch (error: any) {
      console.error('Error en buscarColonias:', error);
      console.error('URL intentada:', this.URL_API);
      console.error('Parámetros:', texto);
      throw error;
    }
  }
}
