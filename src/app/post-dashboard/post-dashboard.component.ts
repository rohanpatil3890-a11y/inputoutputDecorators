import { Component, OnInit } from '@angular/core';
import { Ipost } from '../shared/model/post';
import { POSTArr } from '../shared/const/post';

@Component({
  selector: 'app-post-dashboard',
  templateUrl: './post-dashboard.component.html',
  styleUrls: ['./post-dashboard.component.scss']
})
export class PostDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

   trackById(index : number, product : Ipost){
     return product.id
  }

  POSTArr : Array<Ipost> = POSTArr

}
