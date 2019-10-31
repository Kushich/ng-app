import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {tap, catchError} from 'rxjs/operators';

export class Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}


@Injectable()
export class HttpService {

  constructor(private http: HttpClient) {
  }

  public get(url: string): Observable<Post[]> {
    return this.http.get<Post[]>(url)
      .pipe(
        tap(p => console.log(`fetched ${p.length} posts`)),
        catchError (err => {
      console.log(err);
      return throwError(err);
    }));
  }
}

