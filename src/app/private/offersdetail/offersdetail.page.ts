import { Movie } from './../../core/movie.interface';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-offersdetail',
  templateUrl: './offersdetail.page.html',
  styleUrls: ['./offersdetail.page.scss'],
})
export class OffersdetailPage implements OnInit {
  id: string;
  title: string;
  poster_path: string;
  release_date: string;
  imagePath = "https://image.tmdb.org/t/p/w600_and_h900_bestv2";
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.title = this.activatedRoute.snapshot.paramMap.get('title');
    this.poster_path = this.activatedRoute.snapshot.paramMap.get('poster_path');
    this.release_date = this.activatedRoute.snapshot.paramMap.get('release_date');

    this.imagePath = this.imagePath+this.poster_path;

    console.log("title "+this.title);

    console.log("poster_path "+this.poster_path);

    console.log("release_date "+this.release_date);

  }

}
