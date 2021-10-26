import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    usuario:Object = {
    nombre: null,
    apellido: null,
    correo: null
  }

  constructor() { }

  ngOnInit(): void {
  }

  guardar(forma:NgForm){
    console.log("Formulario validado");
    console.log("ngForm", forma);
    console.log("Valor", forma.value);
  }
}
