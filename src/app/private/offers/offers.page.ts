import { Component, OnInit } from '@angular/core';
import { OffersService } from './../../core/offers.service';
import { Movie } from './../../core/movie.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit {
  moviesObj: any;
  moviesList: any;
  imagePath: string;

  constructor(private offerService: OffersService, private router: Router) { }

  ngOnInit() {
    this.imagePath = "https://image.tmdb.org/t/p/w600_and_h900_bestv2";
    this.loadNowPlaying();

  }

  loadNowPlaying(){
    this.offerService.getNowPlaying().subscribe(
      (data) => {
        console.log("playing "+JSON.stringify(data));
        this.moviesObj = JSON.parse(JSON.stringify(data));
        this.moviesList = this.moviesObj.results;
      },(error) => {
        console.log("error "+JSON.stringify(error));
      }
    )
  }

  showMovieDetail(movie: Movie){
    console.log(movie.id);
    this.router.navigate(['offersdetail',{id:movie.id,title:movie.title,poster_path:movie.poster_path,release_date:movie.release_date}]);
  }
}
