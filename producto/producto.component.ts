import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  public nombre_componentes = "Componente Productos";
  public listado_productos = "Zapatos, Tenis, Ropa";
  public nombre:string = "Julian Andres Lozada Valencia"
  public dia:[string,string]=["Lunes","Viernes"];
  public B:boolean = false;
  public numero:number = 7;
  public arreglo1: number[] = [1, 2, 3];
  public arreglo2:Array<string> = ['first', '2nd', '3rd'];
  public varios:Array<any> = [1, 'Julian', true];
  constructor() { }

  ngOnInit(): void {
  }

}
