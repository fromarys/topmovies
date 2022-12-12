import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { getMovies } from '../../redux/actions/movie.action';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private store: Store) {}
  getMovies() {
    this.store.dispatch(getMovies());
  }
}
