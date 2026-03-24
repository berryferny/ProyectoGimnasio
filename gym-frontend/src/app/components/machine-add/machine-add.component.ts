import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // <--- ESTO FALTABA
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'; // <--- ESTO TAMBIÉN FALTABA
import { MachineService } from '../../services/machine.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-machine-add',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule], // Ahora sí Angular sabe qué son
  templateUrl: './machine-add.component.html',
  styleUrl: './machine-add.component.css'
})
export class MachineAddComponent {
  public newMachine = {
    nombre: '',
    uso: '',
    musculo: '',
    imagen: ''
  };

  constructor(
    private _machineService: MachineService,
    private _router: Router
  ) {}

  guardar() {
    if (this.newMachine.nombre && this.newMachine.uso) {
      this._machineService.save(this.newMachine).subscribe({
        next: (res) => {
          alert('¡Máquina añadida al Gym! 🏋️‍♀️');
          this._router.navigate(['/']); // Te regresa a la lista automáticamente
        },
        error: (err) => {
          console.log('Error al guardar:', err);
        }
      });
    } else {
      alert('Llena al menos el nombre y el uso, no seas así jaja');
    }
  }
}