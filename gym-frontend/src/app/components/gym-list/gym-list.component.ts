import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // <--- IMPORTANTE PARA NGMODEL
import { MachineService } from '../../services/machine.service';
import { Machine } from '../../models/machine';

@Component({
  selector: 'app-gym-list',
  standalone: true,
  imports: [CommonModule, FormsModule], // <--- AGREGADO FORMSMODULE AQUÍ
  templateUrl: './gym-list.component.html',
  styleUrl: './gym-list.component.css'
})
export class GymListComponent implements OnInit {
  public machines: Machine[] = [];
  
  // Objeto para el formulario de nueva máquina
  public newMachine = {
    nombre: '',
    uso: '',
    musculo: '',
    imagen: ''
  };

  constructor(private _machineService: MachineService) {}

  ngOnInit(): void {
    this.cargarMaquinas();
  }

  cargarMaquinas() {
    this._machineService.getMachines().subscribe({
      next: (res) => { if (res.machines) this.machines = res.machines; },
      error: (err) => { console.log(err); }
    });
  }

  guardarMaquina() {
    this._machineService.save(this.newMachine).subscribe({
      next: (res) => {
        this.cargarMaquinas(); // Recargamos la lista
        this.newMachine = { nombre: '', uso: '', musculo: '', imagen: '' }; // Limpiamos
      },
      error: (err) => { console.log(err); }
    });
  }

  valorar(id: string, event: any) {
    const rating = event.target.value;
    if (rating > 0) {
      this._machineService.rate(id, rating).subscribe({
        next: (res) => { this.cargarMaquinas(); },
        error: (err) => { console.log(err); }
      });
    }
  }

  comentar(id: string, texto: string) {
    if (texto.trim() === '') return;
    const comentario = { autor: 'Usuario', texto: texto }; // Aquí puedes cambiar 'Usuario' por el nombre de Fer
    this._machineService.addComment(id, comentario).subscribe({
      next: (res) => { this.cargarMaquinas(); },
      error: (err) => { console.log(err); }
    });
  }

  borrarMaquina(id: string) {
    const confirmar = confirm('¿Estás segura de que quieres eliminar esta máquina? No hay vuelta atrás.');
    
    if (confirmar) {
        this._machineService.deleteMachine(id).subscribe({
            next: (res) => {
                alert('Máquina eliminada con éxito 🗑️');
                this.cargarMaquinas(); // Recargamos la lista para que desaparezca de la pantalla
            },
            error: (err) => { console.log(err); }
        });
    }
}
}