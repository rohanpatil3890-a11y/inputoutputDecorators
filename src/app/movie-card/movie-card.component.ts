import { Component, Input, OnInit } from '@angular/core';
import { Imovies } from '../shared/model/movie';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  @Input() movieObj !: Imovies

  // @Input() getMovieObj !: Imovies;

}
