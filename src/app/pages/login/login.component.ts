// src/app/pages/login/login.component.ts

import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

// Precisamos importar estes módulos para usar no HTML
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  // A CORREÇÃO É AQUI: Adicionamos os módulos ao array de imports
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  credentials = { email: '', password: '' };
  loginError = false;

  constructor(private authService: AuthService, private router: Router) { }

  onLogin() {
    this.loginError = false;
    this.authService.login(this.credentials).subscribe({
      next: () => {
        this.router.navigate(['/dashboard']);
      },
      error: (err: any) => {
        console.error('Erro no login:', err);
        this.loginError = true;
      }
    });
  }
}