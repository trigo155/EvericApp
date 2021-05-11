import { Component } from '@angular/core';
import { EvericService } from '../../services/everic.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent {

  artistas: any [] = [];
  loading: boolean;

  constructor( private everic: EvericService ) {


    this.loading = true;
  }

  buscar(termino: string){
    console.log(termino);
    this.everic.getArtistas ( termino )
        .subscribe( (data: any) =>{
          console.log(data);
          this.artistas = data;
          this.loading = false;
        });
  }

}
