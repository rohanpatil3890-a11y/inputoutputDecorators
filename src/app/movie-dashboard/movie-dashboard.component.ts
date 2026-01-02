import { Component, OnInit } from '@angular/core';
import { Imovies } from '../shared/model/movie';
import { moviesArry } from '../shared/const/movie';

@Component({
  selector: 'app-movie-dashboard',
  templateUrl: './movie-dashboard.component.html',
  styleUrls: ['./movie-dashboard.component.scss']
})
export class MovieDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  moviesArry : Array<Imovies> = moviesArry

}
