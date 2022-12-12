import { IMovie } from '../models/movie.model';

export interface IMovieState {
  movies: IMovie[];
}
export interface IStoreState {
  moviesState: IMovieState;
}
