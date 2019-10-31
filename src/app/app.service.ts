import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

export class Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

@Injectable()
export class HttpService {

  constructor(private http: HttpClient) { }
  public get(url: string): Observable<any> {
    return this.http.get(url);
  }
}
