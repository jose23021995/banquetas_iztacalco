import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SeccionService {
  private http = inject(HttpClient);
  private readonly URL_API = `${environment.baseUrl}/api/secciones`;

  async obtenerSeccionesPorColonia(idColonia: number) {
    const params = new HttpParams().set('id_colonia', idColonia.toString() || '');
    return await firstValueFrom(
      this.http.get<{ secciones: Array<{ id: number; nombre: string }> }>(
        `${this.URL_API}/por-colonia`,
        { params }
      )
    );
  }
}
