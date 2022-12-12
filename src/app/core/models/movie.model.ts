export interface IMovie {
  id: string;
  rank: string;
  title: string;
  fullTitle: string;
  year: string;
  image: string;
  crew: string;
  imDbRating: string;
  imDbRatingCount: string;
}

export interface IMovieData {
  items: IMovie[];
  errorMessage: string;
}
