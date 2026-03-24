import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'; 
import { MachineService } from '../../services/machine.service';
import { Machine } from '../../models/machine';

@Component({
  selector: 'app-gym-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './gym-list.component.html',
  styleUrl: './gym-list.component.css'
})
export class GymListComponent implements OnInit {
  public machines: Machine[] = [];
  public filterText: string = ''; 

  constructor(private _machineService: MachineService) { }

  ngOnInit(): void {
    this.cargarMaquinas();
  }

  // Filtro corregido con los nombres de MongoDB (name y muscle)
  get filteredMachines() {
    return this.machines.filter(m => {
      const name = (m.name || '').toLowerCase();
      const muscle = (m.muscle || '').toLowerCase();
      const search = (this.filterText || '').toLowerCase();
      
      return name.includes(search) || muscle.includes(search);
    });
  }

  cargarMaquinas() {
    this._machineService.getMachines().subscribe({
      next: (res) => { 
        if (res.machines) {
          this.machines = res.machines; 
        }
      },
      error: (err) => { 
        console.error("Error al cargar máquinas:", err); 
      }
    });
  }

  valorar(id: string | undefined, event: any) {
    if (!id) return;
    const rating = event.target.value;
    if (rating > 0) {
      this._machineService.rate(id, rating).subscribe({
        next: () => { this.cargarMaquinas(); },
        error: (err) => { console.log(err); }
      });
    }
  }

  comentar(id: string | undefined, texto: string) {
    if (!id || texto.trim() === '') return;
    const comentario = { autor: 'Fernanda', texto: texto };
    this._machineService.addComment(id, comentario).subscribe({
      next: () => { this.cargarMaquinas(); },
      error: (err) => { console.log(err); }
    });
  }

  borrarMaquina(id: string | undefined) {
    if (!id) return;
    if (confirm('¿Estás segura de eliminar esta máquina?')) {
      this._machineService.deleteMachine(id).subscribe({
        next: () => { this.cargarMaquinas(); },
        error: (err) => { console.log(err); }
      });
    }
  }
}