import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IMovieData } from '../models/movie.model';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private http: HttpClient) {}

  getMovies() {
    const url = 'Top250Movies';
    return this.http.get<IMovieData>(url);
  }
}
