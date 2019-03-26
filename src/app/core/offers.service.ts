import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OffersService {

  constructor(private http: HttpClient) { }

  getNowPlaying(){
    console.log("https://api.themoviedb.org/3/movie/now_playing?api_key=71c06d28840e8732581de79160c2dd37&language=en&page=1");
    return this.http.get("https://api.themoviedb.org/3/movie/now_playing?api_key=71c06d28840e8732581de79160c2dd37&language=en&page=1");
  }
}
