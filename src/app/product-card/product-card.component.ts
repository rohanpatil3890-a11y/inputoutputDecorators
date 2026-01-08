import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Iproduct } from '../shared/model/product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

 


  @Input() productObj !: Iproduct

  // @Input() gemobileData !: Iproduct

}
