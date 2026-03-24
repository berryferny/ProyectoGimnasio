import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
@Component({
  selector: 'app-entrenadores',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './entrenadores.component.html',
  styleUrl: './entrenadores.component.css'
})
export class EntrenadoresComponent {
  public trainers = [
    { 
      nombre: 'Elena G.', 
      especialidad: 'Powerlifting & Fuerza', 
      frase: 'La disciplina vence al talento.', 
   
      imagen: 'https://tse1.mm.bing.net/th/id/OIP.b782n81rUCtsslnj_U6fdwHaE7?rs=1&pid=ImgDetMain&o=7&rm=3', 
      whatsapp: '4491234567' 
    },
    { 
      nombre: 'Sofía R.', 
      especialidad: 'Funcional Training', 
      frase: 'Mente sana en cuerpo sano.', 
      
      imagen: 'https://img.freepik.com/premium-photo/woman-gym-with-blur-background-ai_431161-15111.jpg', 
      whatsapp: '4497654321' 
    },
    { 
      nombre: 'Daniela M.', 
      especialidad: 'Cycling & cardio', 
      frase: 'Si no te desafía, no te cambia.', 
      imagen: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=400&h=400&auto=format&fit=crop', 
      whatsapp: '4498889900' 
    }
  ];
}