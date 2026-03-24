import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy {
  // Fotos increíbles para el inicio de GIRLS GYM
  public images = [
    { url: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200', title: 'POTENCIA TU FUERZA' },
    { url: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=1200', title: 'COMUNIDAD QUE MOTIVA' },
    { url: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=1200', title: 'GIRLS GYM AGUASCALIENTES' }
  ];

  public currentIndex = 0;
  private interval: any;

  ngOnInit() {
    this.startCarousel();
  }

  ngOnDestroy() {
    if (this.interval) clearInterval(this.interval); // Limpiamos la memoria al salir
  }

  startCarousel() {
    this.interval = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    }, 4000); // Cambia cada 4 segundos
  }
}