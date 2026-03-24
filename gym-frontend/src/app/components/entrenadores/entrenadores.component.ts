import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // <--- ¡Vital para que funcione el *ngFor!

@Component({
  selector: 'app-entrenadores',
  standalone: true,
  imports: [CommonModule], // <--- Lo agregamos aquí también
  templateUrl: './entrenadores.component.html',
  styleUrl: './entrenadores.component.css'
})
export class EntrenadoresComponent {
  // Lista de tus coaches Pro de GIRLS GYM (con imágenes verificadas)
  public trainers = [
    { 
      nombre: 'Elena G.', 
      especialidad: 'Powerlifting & Fuerza', 
      frase: 'La disciplina vence al talento.', 
      // Reemplaza por esta URL verificada: Powerful woman lifting weights
      imagen: 'https://tse1.mm.bing.net/th/id/OIP.b782n81rUCtsslnj_U6fdwHaE7?rs=1&pid=ImgDetMain&o=7&rm=3', 
      whatsapp: '4491234567' 
    },
    { 
      nombre: 'Sofía R.', 
      specialty: 'Yoga & Bienestar', 
      frase: 'Mente sana en cuerpo sano.', 
      // Reemplaza por esta URL verificada: Peaceful but strong yoga pose
      imagen: 'https://img.freepik.com/premium-photo/woman-gym-with-blur-background-ai_431161-15111.jpg', 
      whatsapp: '4497654321' 
    },
    { 
      nombre: 'Daniela M.', 
      specialty: 'Cardio HIIT', 
      frase: 'Si no te desafía, no te cambia.', 
      // Reemplaza por esta URL verificada: Dynamic high-energy movement
      imagen: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=400&h=400&auto=format&fit=crop', 
      whatsapp: '4498889900' 
    }
  ];
}