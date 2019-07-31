import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Movie } from '../movie';

@Component({
  selector: 'app-movies-display',
  templateUrl: './movies-display.component.html',
  styleUrls: ['./movies-display.component.css']
})
export class MoviesDisplayComponent implements OnInit {

  //Movie object to store movie review taken from review form
  movieObj :Movie = {id : 0,movieName : '', rating : 0, review : ''};


  movieList1 : Movie[];
  //movieList2 : Movie[];
  //movieList3 : Movie[];
  temp : Movie[];
  tempList1 : string [] =[];
  tempList2 : string [] =[];
  tempList3 : string [] =[];
  tempAvg1 : number;
  tempAvg2 : number;
  tempAvg3 : number;

  tempReview1 : string;
  tempReview2 : string;
  tempReview3 : string;

  tempRating1 : number;
  tempRating2 : number;
  tempRating3 : number;

  constructor(private service: MovieService) { }

  ngOnInit() {
    this.service.findAll().subscribe(resp => this.movieList1=resp);
  }
  
  hit1()
  {
    this.service.findAll().subscribe(resp => this.movieList1=resp);
    //temp = this.movieList1;
    let list: string[] = [];
    let a : number = 0;
    let count : number =0;

    this.movieList1.forEach(element => {
      if(element.movieName=="ohBaby")
      {
        list.push(element.review);
        //list.push(" ");
        a = a + element.rating;
        count = count +1;
      }
        
    });
    this.tempList1 = list;
    this.tempAvg1 = a/count;

  
  }

  hit2()
  {
    this.service.findAll().subscribe(resp => this.movieList1=resp);
    //temp = this.movieList1;
    let list: string[] = [];
    let a : number = 0;
    let count : number =0;

    this.movieList1.forEach(element => {
      if(element.movieName=="Badla")
      {
        list.push(element.review);
        //list.push(" \ ");
        a = a + element.rating;
        count = count +1;
      }
        
    });
    this.tempList2=list;
    this.tempAvg2 = a/count;

  
  }
  hit3()
  {
    this.service.findAll().subscribe(resp => this.movieList1=resp);
    //temp = this.movieList1;
    let list: string[] = [];
    let a : number = 0;
    let count : number =0;

    this.movieList1.forEach(element => {
      if(element.movieName=="VellaiPookal")
      {
        list.push(element.review);
        //list.push(" \ ");
        a = a + element.rating;
        count = count +1;

      }
        
    });
    this.tempList3=list;
    this.tempAvg3 = a/count;

  
  }

  
  // hit2()
  // {
  //   this.service.findAll().subscribe(resp => this.movieList2=resp);
  // }

  // hit3()
  // {
  //   this.service.findAll().subscribe(resp => this.movieList3=resp);
  // }

  addReview1()
  {
    if(this.tempReview1!==null)
    {
      this.movieObj.movieName="ohBaby";
    }
    
    this.movieObj.rating=this.tempRating1;
    this.movieObj.review=this.tempReview1;
    this.service.addReviews(this.movieObj.id,this.movieObj.movieName,this.movieObj.rating,this.movieObj.review);
  }

  addReview2()
  {
    if(this.tempReview2!==null)
    {
      this.movieObj.movieName="Badla";
    }
    
    this.movieObj.rating=this.tempRating2;
    this.movieObj.review=this.tempReview2;
    this.service.addReviews(this.movieObj.id,this.movieObj.movieName,this.movieObj.rating,this.movieObj.review);
  }
  addReview3()
  {
    if(this.tempReview3!==null)
    {
      this.movieObj.movieName="VellaiPookal";
    }
    
    this.movieObj.rating=this.tempRating3;
    this.movieObj.review=this.tempReview3;
    this.service.addReviews(this.movieObj.id,this.movieObj.movieName,this.movieObj.rating,this.movieObj.review);
  }

}
