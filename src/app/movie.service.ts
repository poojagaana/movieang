import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Movie} from './movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  uri = "http://localhost:3000/movies";
  constructor(private http: HttpClient) { }

  findAll(): Observable<Movie[]>
  {
    return this.http.get<Movie[]>("http://localhost:3000/movies");
}

addReviews(id, movieName,rating,review)
{
  const obj = {
    id :id,
    movieName : movieName,
    rating : rating,
    review : review
  };

  
  console.log(obj);
  this.http.post(this.uri, obj)
      .subscribe(res => console.log('Review added'));

}

}