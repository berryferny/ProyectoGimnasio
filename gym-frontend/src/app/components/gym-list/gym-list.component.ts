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
  public filterText: string = ''; // <--- SOLUCIONA EL ERROR DE filterText

  constructor(private _machineService: MachineService) { }

  ngOnInit(): void {
    this.cargarMaquinas();
  }

  // <--- SOLUCIONA EL ERROR DE filteredMachines
  get filteredMachines() {
    return this.machines.filter(m =>
      m.nombre.toLowerCase().includes(this.filterText.toLowerCase()) ||
      m.musculo.toLowerCase().includes(this.filterText.toLowerCase())
    );
  }

  cargarMaquinas() {
    this._machineService.getMachines().subscribe({
      next: (res) => { if (res.machines) this.machines = res.machines; },
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
    const comentario = { autor: 'Fernanda', texto: texto };
    this._machineService.addComment(id, comentario).subscribe({
      next: (res) => { this.cargarMaquinas(); },
      error: (err) => { console.log(err); }
    });
  }

  borrarMaquina(id: string) {
    const confirmar = confirm('¿Estás segura?');
    if (confirmar) {
      this._machineService.deleteMachine(id).subscribe({
        next: () => { this.cargarMaquinas(); },
        error: (err) => { console.log(err); }
      });
    }
  }
}