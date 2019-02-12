import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {

  artists:any[] = [];
  loading:boolean;

  constructor( private spotify:SpotifyService ) { }

  search( term:string ) {
    if ( term === '' ) {
      return false;
    }
    
    // console.log(term);
    this.loading = true;
    this.spotify.getArtists(term)
    .subscribe( (data:any) => {
      // console.log(data);
      this.artists = data;
      this.loading = false;
    });
  }

}