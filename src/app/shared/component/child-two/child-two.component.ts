import { Component, Input, OnInit } from '@angular/core';
import { Iposts } from '../../model/post2';


@Component({
  selector: 'app-child-two',
  templateUrl: './child-two.component.html',
  styleUrls: ['./child-two.component.scss']
})
export class ChildTwoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()  getAllPostData !: Iposts







}
