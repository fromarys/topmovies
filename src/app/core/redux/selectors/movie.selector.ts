import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IMovieState } from '../state.model';

const selectFeature = createFeatureSelector<IMovieState>('moviesState');

export const selectMovies = createSelector(
  selectFeature,
  ({ movies }) => movies
);
