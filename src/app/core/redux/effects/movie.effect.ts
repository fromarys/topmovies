import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { MovieService } from '../../services/movie.service';
import {
  getMovieError,
  getMovies,
  getMovieSuccess,
} from '../actions/movie.action';

@Injectable()
export class MovieEffect {
  public $loadMovies: Observable<Action> = createEffect(() => {
    return this.$actions.pipe(
      ofType(getMovies),
      exhaustMap((action) => {
        return this.movieService.getMovies().pipe(
          map((data) => {
            if (!data.items.length) {
              return getMovieError({ error: data.errorMessage });
            } else {
              return getMovieSuccess({ movies: data.items });
            }
          }),
          catchError((error) => {
            return of(getMovieError({ error: error.status }));
          })
        );
      })
    );
  });
  constructor(private movieService: MovieService, private $actions: Actions) {}
}
