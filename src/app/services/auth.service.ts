// src/app/services/auth.service.ts

import { Injectable } from '@angular/core'; // Garanta que esta linha existe
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({ // <-- ESTE DECORADOR É ESSENCIAL
  providedIn: 'root'
})
export class AuthService {
  private readonly apiUrl = 'http://localhost:3333'; // URL da nossa API
  private readonly TOKEN_NAME = 'pizzaria_token';

  constructor(private http: HttpClient, private router: Router) { }

  login(credentials: { email: string, password: string }) {
    return this.http.post(`${this.apiUrl}/sessions`, credentials).pipe(
      tap((response: any) => {
        localStorage.setItem(this.TOKEN_NAME, response.token);
      })
    );
  }

  logout() {
    localStorage.removeItem(this.TOKEN_NAME);
    this.router.navigate(['/login']);
  }

  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_NAME);
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }
}