import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  /*Primera Parte De la Practica
  public nombre_componentes = "Componente Productos";
  public listado_productos = "Zapatos, Tenis, Ropa";
  public nombre:string = "Julian Andres Lozada Valencia"
  public dia:[string,string]=["Lunes","Viernes"];
  public B:boolean = false;
  public numero:number = 7;
  public arreglo1: number[] = [1, 2, 3];
  public arreglo2:Array<string> = ['first', '2nd', '3rd'];
  public varios:Array<any> = [1, 'Julian', true];
  */
 // Segunda Parte De La Practica
  public nombre_componente:string;
  public listado_productos:string;
  public arreglo2:Array<string>;
  public varios:Array<any>;

  constructor() {
    this.nombre_componente = "Componente De Producto";
    this.listado_productos = 'Zapatos, Tenis, Botas';
    this.arreglo2 = ['PHP', 'Java', 'Python'];
    this.varios = [1,'Julian',true];
    this.saludo();
   }
   saludo(){
     alert("Esto es un saludo");
   }

  ngOnInit(): void {
  }

}
