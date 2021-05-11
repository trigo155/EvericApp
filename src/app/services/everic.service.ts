import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EvericService {

  constructor( private http: HttpClient) { }



  getQuery( query: string ){

    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBDFRXSOkoCVvCefJx3h9di-Jc4lmffWZzbtovrnWbZno1Jx7pVQkjF0h9ju2f3g2mIlI2642YR1ZulhtY'
    });

    return this.http.get( url, { headers });

  }



  getNewReleases(){

    /*const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCUoWQpGG-uCzKr_9i3EWDg3boKxthc-EvB_Mbhj5DCG1bq_hmvVdyVDZHEbSp6PiQ5soP30Jnc80SPOqo'
    });*/

    return this.getQuery('browse/new-releases')
          .pipe( map( data => data['albums'].items));

   }



  getArtistas( termino: string ){

    /*const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCUoWQpGG-uCzKr_9i3EWDg3boKxthc-EvB_Mbhj5DCG1bq_hmvVdyVDZHEbSp6PiQ5soP30Jnc80SPOqo'
    });*/

    return this.getQuery(`search?q=${ termino }&type=artist&limit=15`)
          .pipe( map( data => data['artists'].items));

    /*this.http.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist&limit=15`, { headers })
              .pipe( map( data => data['artists'].items));*/

  }


  getArtista( id: string ){

    return this.getQuery(`artists/${ id }`);
          //.pipe( map( data => data['artists'].items));



  }

  getTopTracks( id: string ){

    return this.getQuery(`artists/${ id }/top-tracks?country=us`)
          .pipe( map( data => data['tracks']));



  }
}
