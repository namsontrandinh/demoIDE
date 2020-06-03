import { MovieService } from './../movie.service';
import { Movie } from "./../../models/movie";
import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

@Component({
  selector: "app-movie-detail",
  templateUrl: "./movie-detail.component.html",
  styleUrls: ["./movie-detail.component.css"],
})
export class MovieDetailComponent implements OnInit {
  @Input() movie: Movie;

  constructor(
    private route: ActivatedRoute,
    private moviesService: MovieService,
    private location: Location
  ) { }

  ngOnInit(): void { 
    this.getMovieFromRoute();
  }

  getMovieFromRoute(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(`this.route.snapshot.paramMap = ${JSON.stringify(this.route.snapshot.paramMap)}`);

    // call service to get movie from id
    this.moviesService.getMovieFromId(id).subscribe(movie => this.movie = movie);
  }

  goBack(): void {
    this.location.back();
  }
}
