// src/app/pages/dashboard/dashboard.component.ts

import { Component, OnInit } from '@angular/core';
// A CORREÇÃO É NESTA LINHA:
import { PizzariaService } from '../../services/pizzaria.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  pizzarias: any[] = [];
  isLoading = true;

  // O Angular vai injetar a instância correta do PizzariaService aqui
  constructor(private pizzariaService: PizzariaService) { }

  ngOnInit(): void {
    this.pizzariaService.getPizzarias().subscribe({
      next: (data: any) => {
        this.pizzarias = data;
        this.isLoading = false;
      },
      error: (err: any) => {
        console.error('Erro ao buscar pizzarias:', err);
        alert('Não foi possível carregar os dados. Por favor, tente fazer login novamente.');
        this.isLoading = false;
      }
    });
  }
}