import { Component } from '@angular/core';

@Component({
  selector: 'app-fundamentos',
  standalone: true,
  imports: [],
  templateUrl: './fundamentos.component.html',
  styleUrl: './fundamentos.component.css'
})
export class FundamentosComponent {
  titles="hola p#tas"
  contador= 0
  constructor(){
    setInterval(()=>{this.contador++}, 2000);
  }

}
