import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IMovieData } from '../models/movie.model';

@Injectable()
export class KeyInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<string>,
    next: HttpHandler
  ): Observable<HttpEvent<IMovieData>> {
    const key = 'k_ij387hj2';
    const options = {
      url: `${environment.API_URL}/${req.url}/${key}`,
    };
    return next.handle(req.clone(options));
  }
}
