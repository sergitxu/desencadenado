import { Component, OnInit } from '@angular/core';
import { bufferToggle } from 'rxjs';
// import ciclos from '../_data/ejercicios.json';
import ejercicios from '../_data/ejercicios.json';

@Component({
  selector: 'app-ejercicio',
  templateUrl: './ejercicio.component.html',
  styleUrls: ['./ejercicio.component.scss']
})
export class EjercicioComponent implements OnInit {

  public listaEjercicios: {
    ciclo: [{
      semana: [{
        dia: [{
          fecha: Date,
          ejercicios: [{
            nombre: string,
            tandas: number,
            repeticiones: number,
            tiempo: number,
            nivel: number,
            peso: number,
            extra: boolean,
            tabata: boolean
          }]
        }]
      }]
    }]
  }[] = ejercicios;

  toggle(element: string) {
    const objeto: any = document.getElementById(element);
    const displayValue = window.getComputedStyle(objeto).display;
    if (displayValue === 'block') {
      objeto!.style.display = 'none';
    } else {
      objeto!.style.display = 'block'
    }
  }

  constructor() {

  }

  ngOnInit(): void {
  }

}
