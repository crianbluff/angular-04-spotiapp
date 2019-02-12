import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http:HttpClient ) {
    // console.log('Spotify Service Listo');
  }

  getQuery( query:string ) {
    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCEuh5Q5p2EPoeyGPOQJqR_Hu7u3ORPiPbtMcu1iVMWFxvdOQkqdkBNoz7qnflugf4BnfpT9cbc-qMROLQ'
    });

    return this.http.get(url, { headers });
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases?limit=20')
    .pipe( map( data => data['albums'].items ));
  }

  getArtist( id:string ) {
    return this.getQuery(`artists/${ id }`);
  }

  getArtists( term:string ) {
    return this.getQuery(`search?q=${ term }&type=artist&limit=15`)
    .pipe( map( data => data['artists'].items ));
  }

  getTopTracks( id:string ) {
    return this.getQuery(`artists/${ id }/top-tracks?country=us`)
    .pipe( map( data => data['tracks'] ));
  }

}