import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  private http = inject(HttpClient);
  private readonly URL_API = `${environment.baseUrl}/api/upload-banqueta`;

  subirImagen(file: File, id_registro: number, proposito: string, nombreDeseado: string): Observable<any> {
    const formData = new FormData();
    
    // 1. Extraemos la extensión original (ej: .jpg o .png)
    const extension = file.name.split('.').pop();
    
    // 2. Creamos el nombre final (ej: foto_banqueta_1.jpg)
    const nombreFinal = `${nombreDeseado}.${extension}`;

    // 3. Pasamos el nombreFinal como tercer parámetro para que Express lo reciba
    formData.append('foto', file, nombreFinal);
    formData.append('id_registro', id_registro.toString());
    formData.append('proposito', proposito);

    return this.http.post(this.URL_API, formData);
  }
}
