import { createAction, props } from '@ngrx/store';
import { IMovie } from '../../models/movie.model';

export const getMovies = createAction('[Main Page] Get Movies');

export const getMovieSuccess = createAction(
  '[Main Page] Get Movies Success',
  props<{ movies: IMovie[] }>()
);

export const getMovieError = createAction(
  '[Main Page] Get Movies Error',
  props<{ error: string }>()
);
