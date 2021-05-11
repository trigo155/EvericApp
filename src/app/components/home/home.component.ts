import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EvericService } from '../../services/everic.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent {

  nuevasCanciones:any [] = [];
  loading: boolean;

  error: boolean;
  mensajeError: string;

  constructor( private  everic: EvericService ) {

    this.loading = true;
    this.error = false;

    this.everic.getNewReleases()
    .subscribe( (data: any) =>{
      console.log(data);
      this.nuevasCanciones = data;
      this.loading = false;
    }, ( errorServicio ) => {

      this.error = true;
      this.loading = false;
      console.log(errorServicio);
      this.mensajeError = errorServicio.error.error.message;

    });

        }




}
