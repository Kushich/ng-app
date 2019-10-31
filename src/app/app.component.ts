import {Component} from '@angular/core';
import {Post, HttpService} from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HttpService]
})
export class AppComponent  {
  posts: Post[];

  constructor(private httpService: HttpService) {
    this.httpService.get('https://jsonplaceholder.typicode.com/posts').subscribe(data => this.posts = data);
  }
}

