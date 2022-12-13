import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable, tap } from 'rxjs';
import { Action } from '@ngrx/store';
import { MovieService } from '../../services/movie.service';
import { getMovieError } from '../actions/movie.action';
import { SnackbarService } from '../../services/snackbar.service';

@Injectable()
export class MovieErrorEffect {
  public $onError: Observable<Action> = createEffect(
    () => {
      return this.$actions.pipe(
        ofType(getMovieError),
        tap(({ error }) => {
          this.snackbar.openErrorToaster(`Error: ${error}`);
        })
      );
    },
    { dispatch: false }
  );
  constructor(
    private movieService: MovieService,
    private $actions: Actions,
    private snackbar: SnackbarService
  ) {}
}
