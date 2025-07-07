import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  // CommonModule é necessário para o *ngIf e RouterOutlet para as rotas
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pizzaria-front';

  // Injetamos o AuthService para poder usá-lo no HTML e no método logout
  // A palavra 'public' o torna acessível diretamente no template
  constructor(public authService: AuthService) {}

  /**
   * Este método é chamado quando o botão "Sair" no cabeçalho é clicado.
   */
  logout() {
    this.authService.logout();
  }
}