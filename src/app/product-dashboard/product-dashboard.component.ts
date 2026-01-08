import { Component, OnInit } from '@angular/core';
import { Iproduct } from '../shared/model/product';
import { mobileProducts } from '../shared/const/product';

@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.scss']
})
export class ProductDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  productArr : Array<Iproduct> = mobileProducts;

     trackById(index : number, product : Iproduct){
       return product.id
    }



}
