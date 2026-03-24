import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sucursales',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sucursales.component.html',
  styleUrl: './sucursales.component.css'
})
export class SucursalesComponent {

  // Esta es la función mágica que te faltaba
  abrirMapa(zona: string) {
    let url = '';

    if (zona === 'norte') {
      // Coordenadas cerca de Altaria, Ags
      url = 'https://www.google.com/maps/search/Altaria+Aguascalientes';
    } else {
      // Coordenadas cerca de Casablanca, Ags
      url = 'https://www.google.com/maps/search/Casablanca+Aguascalientes';
    }

    // Abre la ubicación en una pestaña nueva
    window.open(url, '_blank');
  }
}