import { MovieService } from "./../movie.service";
//import { fakeMovies } from "./../fake-movies";
import { Movie } from "./../../models/movie";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-movies",
  templateUrl: "./movies.component.html",
  styleUrls: ["./movies.component.css"],
})
export class MoviesComponent implements OnInit {
  //movies = fakeMovies;
  movies: Movie[];

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.getMoviesFromService();
  }

  // get data from service
  getMoviesFromService(): void {
    //this.movies = this.movieService.getMovies();
    this.movieService.getMovies().subscribe(
      (updateMovies) => {
        this.movies = updateMovies;
        console.log(`this.movies=${JSON.stringify(this.movies)}`);
      }
    );
  }

  //action when select a movie in list
  // selectedMovie: Movie;
  // onSelected(movie: Movie): void {
  //   this.selectedMovie = movie;
  //   console.log(`selectedMovie = ${JSON.stringify(this.selectedMovie)}`);
  // }
}
