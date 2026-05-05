import { Injectable, signal, computed, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private http = inject(HttpClient);
  private router = inject(Router);
  private apiUrl = 'http://localhost:3000/api/auth';

  // Signals para Token y Usuario
  private _token = signal<string | null>(localStorage.getItem('token'));
  private _user = signal<any | null>(JSON.parse(localStorage.getItem('user') || 'null'));

  // Signals computadas para estado y roles
  isAuthenticated = computed(() => !!this._token());
  userRole = computed(() => this._user()?.hierarchy); // Devuelve 1 o 2

  login(credentials: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, credentials).pipe(
      tap(res => {
        // 1. Guardar en LocalStorage
        localStorage.setItem('token', res.token);
        localStorage.setItem('user', JSON.stringify(res.usuario));

        // 2. Actualizar Signals
        this._token.set(res.token);
        this._user.set(res.usuario);
      })
    );
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this._token.set(null);
    this._user.set(null);
    this.router.navigate(['/login']);
  }

  getToken() {
    return this._token();
  }

  getUser() {
    return this._user();
  }
}
