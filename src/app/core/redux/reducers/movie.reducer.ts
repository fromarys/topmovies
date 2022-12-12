import { IMovieState, IStoreState } from '../state.model';
import { ActionReducerMap, createReducer, on } from '@ngrx/store';
import { getMovieSuccess } from '../actions/movie.action';

const initialState: IMovieState = {
  movies: [],
};

const movieReducer = createReducer(
  initialState,
  on(getMovieSuccess, (state, { movies }) => ({
    movies: movies,
  }))
);

export const reducers: ActionReducerMap<IStoreState> = {
  moviesState: movieReducer,
};
