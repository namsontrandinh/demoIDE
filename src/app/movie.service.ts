import { MessageService } from './message.service';
import { Observable, of } from 'rxjs';
import { Movie } from "./../models/movie";
import { fakeMovies } from "./fake-movies";
import { Injectable } from "@angular/core";



@Injectable({
  providedIn: "root",
})
export class MovieService {
  constructor(public messageService: MessageService) { }

  getMovies(): Observable<Movie[]> {
    this.messageService.add(`${new Date().toLocaleString()}. Lay thong tin phim`);
    return of(fakeMovies);
  }

  getMovieFromId(id: number): Observable<Movie> {
    return of(fakeMovies.find(movie => movie.id === id));
  }
}
