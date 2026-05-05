import { Injectable, signal, computed, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private http = inject(HttpClient);
  private router = inject(Router);
  private apiUrl = 'http://localhost:3000/api/auth'; 

  private _token = signal<string | null>(localStorage.getItem('token'));
  isAuthenticated = computed(() => !!this._token());

  login(credentials: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, credentials).pipe(
      tap(res => {
        // Guardamos el token exacto que mandó tu Backend
        localStorage.setItem('token', res.token);
        this._token.set(res.token);
      })
    );
  }

  logout() {
    localStorage.removeItem('token');
    this._token.set(null);
    this.router.navigate(['/login']);
  }

  getToken() {
    return this._token();
  }
}
