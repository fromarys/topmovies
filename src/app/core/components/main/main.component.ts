import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectMovies } from '../../redux/selectors/movie.selector';
import { Observable } from 'rxjs';
import { IMovie } from '../../models/movie.model';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  public movies: IMovie[];
  public $movies: Observable<IMovie[]> = this.store.select(selectMovies);
  public displayedColumns: string[] = [
    'rank',
    'image',
    'title',
    'crew',
    'year',
    'imDbRating',
  ];

  public dataSource: MatTableDataSource<IMovie>;
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.movies);
    this.$movies.subscribe((movies) => {
      this.dataSource.data = movies;
    });
  }
}
