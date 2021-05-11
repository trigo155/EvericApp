import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EvericService } from '../../services/everic.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: [
  ]
})
export class ArtistaComponent  {

  artista: any = {};
  topTracks: any [] = [];

  loadingArtist: boolean;

  constructor( private router: ActivatedRoute,
               private everic: EvericService ) {

    this.loadingArtist = true;

    this.router.params.subscribe( params => {

      this.getArtista( params['id'] );
      this.getTopTracks( params['id'] );
    });
  }

  getArtista( id: string ){

    this.loadingArtist = true;

    this.everic.getArtista( id )
      .subscribe( artista => {
        console.log(artista);
        this.artista = artista;
        this.loadingArtist = false;
      })
  }

  getTopTracks( id: string ){

    this.everic.getTopTracks( id )
        .subscribe( topTracks => {
          console.log(topTracks);
          this.topTracks = topTracks;
        })

  }

}
