import { Component, OnInit, NgModule } from '@angular/core';
import { Producto } from './producto';

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
 /* Segunda Parte De La Practica
  public nombre_componente:string;
  public listado_productos:string;
  public arreglo2:Array<string>;
  public varios:Array<any>;
  */
 // Tecera Parte De La Parctica
  public nombre_componentes = "Componente Producto";
  public pro!: Producto;
  public inventario!:Array<Producto>;

  constructor() {
    /* Segunda Parte De La Practica
    this.nombre_componente = "Componente De Producto";
    this.listado_productos = 'Zapatos, Tenis, Botas';
    this.arreglo2 = ['PHP', 'Java', 'Python'];
    this.varios = [1,'Julian',true];
    this.saludo();
    */
   //Cuarta Parte De La Practica
    this.pro = new Producto('Tenis', 30, 'Caja', true);
    this.inventario = [
      new Producto('Zapatos', 5, 'Caja', true),
      new Producto('Maquillaje', 3, 'Estuche', true),
      new Producto('Boxer', 3, 'Bolsa', true),
      new Producto('Jean', 2, 'Tula', true)
    ];
   }
   /* Tercera Parte De La Practica
   saludo(){
     alert("Esto es un saludo");
   }*/

  ngOnInit(): void {
    /*this.saludo();
    var uno = 8;
    var dos = 15;
    if(uno == 18) {
      let uno = 3;
      var dos = 88;
      console.log("Dentro del if"  + uno);
    }
    console.log("Fuera del if " + uno)*/
    /*Tercera Parte De La Practica
    this.pro = new Producto('Tenis', 30, 'Caja', true);
    this.inventario = [
      new Producto('Zapatos', 5, 'Caja', true),
      new Producto('Maquillaje', 3, 'Estuche', true),
      new Producto('Boxer', 3, 'Bolsa', true),
      new Producto('Jean', 2, 'Tula', true)
    ];*/
  }
  //Cuarta Parte De La Practica
  cambiarvalor1(valor: boolean){
    this.inventario[2].estado= valor;
  }
  cambiarvalor2(valor: boolean){
    this.inventario[2].estado= valor;
  }

}
