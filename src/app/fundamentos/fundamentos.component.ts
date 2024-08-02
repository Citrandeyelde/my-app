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
  imagen = "https://dummyimage.com/300"
  imagenhola= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi99zAnoi5J9MZdXgXHDxdNQL0n2bZFebK2A&s"
  constructor(){
    setInterval(()=>{this.contador++}, 100);
  }

  resetearContador(){
    this.contador=0
  }

}
