import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-c2',
  templateUrl: './c2.component.html',
  styleUrls: ['./c2.component.css']
})
export class C2Component implements OnInit {
  lista:any= new Array;
  tarea:string="";
  descripcion:string ="";
  error:string = "";
  Agregar(){
    if(this.tarea !=="" && this.descripcion !== ""){
          this.lista.push({'tarea':this.tarea,'descripcion':this.descripcion});
          this.tarea="";
          this.descripcion="";
    }else{
     this.error = "Complete los campos por favor"
    }
  }
  Eliminar(indice:number) {
    this.lista.splice(indice, 1);
  }
  constructor() { }

  ngOnInit(): void {
  }
}
