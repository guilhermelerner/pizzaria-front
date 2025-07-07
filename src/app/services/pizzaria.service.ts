// src/app/services/pizzaria.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PizzariaService {
  // Usaremos a mesma URL base do AuthService
  private readonly apiUrl = 'http://localhost:3333';

  constructor(private http: HttpClient) { }

  // Método para buscar todas as pizzarias
  getPizzarias() {
    // O Interceptor cuidará de adicionar o token a esta requisição
    return this.http.get(`${this.apiUrl}/pizzarias`);
  }
}